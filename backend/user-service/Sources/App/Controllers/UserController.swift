import Vapor
import Redis
import Fluent

struct UserController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let userRouteGroup = routes.grouped("user")
        let userRouteMiddlewareGroup = userRouteGroup.grouped(UserAuthMiddleware())
     
        userRouteGroup.post("auth","register", use: createUser)
        userRouteMiddlewareGroup.get(":id", use: getOneUser)
        userRouteMiddlewareGroup.put(":id", use: updateUserBio)
    }
    
    func createUser(_ req: Request) throws -> EventLoopFuture<User.GlobalAuth> {
        let user = try req.content.decode(User.self)
        user.password = try Bcrypt.hash(user.password)
        user.role_id = 3
          
        let password_hash = user.password
        
        return user.save(on: req.db).flatMap{
            User
                .query(on: req.db)
                .filter(\.$password == password_hash)
                .first() 
                .unwrap(or: Abort(.notAcceptable, reason: "can't register, please use other username or email"))
                .flatMap { data in
          
                    let random = [UInt8].random(count: 32)
                    let token = RegistrationToken(tokenString: "\(String(describing:random.base64))", userId: "\(String(describing:data.id!))", username: "\(String(describing:data.username))")
                    
                    return req.redis.set(RedisKey(token.tokenString), toJSON: token).transform(to: token).flatMap { _ in
                            User
                              .query(on: req.db)
                              .set(\.$registrationToken, to: token.tokenString)
                              .filter(\.$password == password_hash)
                              .update()
                              .map {
                                  User.GlobalAuth(id: user.id, name: user.name, username: user.username, email: user.email, registrationToken: token.tokenString, role_id: user.role_id)
                              }
                        }
                   
                }
             }
        }

    
    func getOneUser(_ req: Request) -> EventLoopFuture<User.Public> {
        User.find(req.parameters.get("id"), on: req.db)
            .unwrap(or: Abort(.notFound))
            .convertToPublic()
    }
    
    func updateUserBio(_ req: Request) throws -> EventLoopFuture<User.Public> {
        let id = req.parameters.get("id", as: UUID.self)
        let userUpdate = try req.content.decode(RegularUserUpdateBio.self)
//        let userUpdate = try req.content.decode(User.self)
        
        return User
            .find(id, on: req.db)
            .unwrap(or: Abort(.notFound))
            .flatMap{ user in
                
               print("\n\nUSER:\n",user, "\n\n")
                
                user.mobile = userUpdate.mobile
                user.point_reward = userUpdate.point_reward
                user.geo_location = userUpdate.geo_location
                user.city = userUpdate.city
                user.province = userUpdate.province
                user.country = userUpdate.country
                user.domicile = userUpdate.domicile
                user.residence = userUpdate.residence
                user.shipping_address_default = userUpdate.shipping_address_default
                user.shipping_address_id = userUpdate.shipping_address_id
                user.date_of_birth = userUpdate.date_of_birth
                user.gender = userUpdate.gender
                
                return user.save(on: req.db).map{
                    user.convertToPublic()
                }
            }
    }
    
    
    
}

