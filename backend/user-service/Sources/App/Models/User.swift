import Foundation
import Vapor
import Fluent


final class User: Model {
    static let schema = "users"
    
    @ID
    var id: UUID?
    
    @Field(key: "username")
    var username: String
    
    @Field(key: "email")
    var email: String
    
    @Field(key: "password")
    var password: String
    
    @Field(key: "name")
    var name: String
    
    @Field(key: "mobile")
    var mobile: String?
    
    @Field(key: "point_reward")
    var point_reward: String?
    
    @Field(key: "geo_location")
    var geo_location: String?
    
    @Field(key: "city")
    var city: String?
    
    @Field(key: "province")
    var province: String?
    
    @Field(key: "country")
    var country: String?
    
    @Field(key: "domicile")
    var domicile: String?

    @Field(key: "residence")
    var residence: String?
    
    @Field(key: "shipping_address_default")
    var shipping_address_default: String?
    
    @Field(key: "shipping_address_id")
    var shipping_address_id: UUID?
    
    @Field(key: "date_of_birth")
    var date_of_birth: String?

    @Field(key: "gender")
    var gender: String?
    
    @Field(key: "role_id")
    var role_id: Int?
    
    @Field(key:"registrationToken")
    var registrationToken: String?
    
    @Field(key:"isActive")
    var isActive: Bool?
    
    @Field(key:"isBlocked")
    var isBlocked: Bool?
    
    
    @Field(key: "created_at")
    var created_at: String?
    
    @Field(key: "updated_at")
    var updated_at: String?
    

    init(name: String, username: String, password: String, email: String, mobile: String?, point_reward: String?, geo_location: String?, city: String?, province: String?, country: String?, domicile: String?, residence: String?, shipping_address_default: String?, shipping_address_id: UUID?, date_of_birth: String?, gender: String?, role_id: Int? = nil, registrationToken: String?, isActive: Bool?, isBlocked: Bool?, created_at: String?,updated_at: String?
    ){
        self.name = name
        self.username = username
        self.password = password
        self.email = email
        self.mobile = mobile
        self.city = city
        self.point_reward = point_reward
        self.geo_location = geo_location
        self.province = province
        self.country = country
        self.domicile = domicile
        self.residence = residence
        self.shipping_address_default = shipping_address_default
        self.shipping_address_id = shipping_address_id
        self.date_of_birth = date_of_birth
        self.gender = gender
        self.role_id = role_id
        self.isActive = isActive
        self.isBlocked = isBlocked
        self.registrationToken = registrationToken
        self.created_at = created_at
        self.updated_at = updated_at
    }
    
    init() {}
    
    final class GlobalAuth: Content, Authenticatable, Codable{
        var id: UUID?
        var name: String
        var username: String
        var email: String
        var registrationToken: String?
        var role_id: Int?
        
        init(id: UUID? = nil, name: String, username: String, email: String, registrationToken: String?, role_id: Int?) {
            self.id = id
            self.name = name
            self.email = email
            self.username = username
            self.registrationToken = registrationToken
            self.role_id = role_id
        }
    }
    
    final class Public: Content {
        var id: UUID?
        var name: String
        var username: String
        var email: String
        var mobile: String?
        var point_reward: String?
        var geo_location: String?
        var city: String?
        var province: String?
        var country: String?
        var domicile: String?
        var residence: String?
        var shipping_address_default: String?
        var shipping_address_id: UUID?
        var date_of_birth: String?
        var gender: String?
        var created_at: String?
        var updated_at: String?
        
        init( id: UUID?, name: String, username: String, email: String, mobile: String?, point_reward: String?, geo_location: String?, city: String?, province: String?, country: String?, domicile: String?, residence: String?, shipping_address_default: String?, shipping_address_id: UUID?, date_of_birth: String?, gender: String?, created_at: String?, updated_at: String?
        ){
            self.id = id
            self.name = name
            self.username = username
            self.email = email
            self.mobile = mobile
            self.city = city
            self.point_reward = point_reward
            self.geo_location = geo_location
            self.province = province
            self.country = country
            self.domicile = domicile
            self.residence = residence
            self.shipping_address_default = shipping_address_default
            self.shipping_address_id = shipping_address_id
            self.date_of_birth = date_of_birth
            self.gender = gender
            self.created_at = created_at
            self.updated_at = updated_at
        }
    }
    
}

extension User: Content {}

extension User: Authenticatable {}

struct Auth: Content, Authenticatable {
    var id: UUID?
    var name: String
    var username: String
    var email: String
    var registrationToken: String?
    var role_id: Int?

    init(id: UUID?, name: String, username: String, email: String, registrationToken: String?, role_id: Int?) {
        self.id = id
        self.name = name
        self.email = email
        self.username = username
        self.registrationToken = registrationToken
        self.role_id = role_id
    }
}



final class RegularUserUpdateBio: Codable, Content{
    
    var mobile: String
    var point_reward: String? = ""
    var geo_location: String? = ""
    var city: String
    var province: String
    var country: String
    var domicile: String
    var residence: String
    var shipping_address_default: String
    var shipping_address_id: UUID? = nil
    var date_of_birth: String
    var gender: String
    
    
    init( mobile: String, point_reward: String, geo_location: String, city: String, province: String, country: String, domicile: String, residence: String, shipping_address_default: String, shipping_address_id: UUID, date_of_birth: String, gender: String
        ){
        self.mobile = mobile
        self.city = city
        self.point_reward = point_reward
        self.geo_location = geo_location
        self.province = province
        self.country = country
        self.domicile = domicile
        self.residence = residence
        self.shipping_address_default = shipping_address_default
        self.shipping_address_id = shipping_address_id
        self.date_of_birth = date_of_birth
        self.gender = gender
    }
}

final class SuperUserUpdateBio: Codable, Content{
    
    var mobile: String
    var point_reward: String? = ""
    var geo_location: String? = ""
    var city: String
    var province: String
    var country: String
    var domicile: String
    var residence: String
    var shipping_address_default: String
    var shipping_address_id: UUID? = nil
    var date_of_birth: String
    var gender: String
    
    
    init( mobile: String, point_reward: String, geo_location: String, city: String, province: String, country: String,domicile: String,residence: String, shipping_address_default: String,shipping_address_id: UUID, date_of_birth: String,gender: String
        ){
        self.mobile = mobile
        self.city = city
        self.point_reward = point_reward
        self.geo_location = geo_location
        self.province = province
        self.country = country
        self.domicile = domicile
        self.residence = residence
        self.shipping_address_default = shipping_address_default
        self.shipping_address_id = shipping_address_id
        self.date_of_birth = date_of_birth
        self.gender = gender
    }
}

extension User {
    func convertToPublic() -> User.Public {
        return User.Public( id: id, name: name, username: username, email: email, mobile: mobile, point_reward: point_reward, geo_location: geo_location, city: city, province: province, country: country, domicile: domicile, residence: residence, shipping_address_default: shipping_address_default, shipping_address_id: shipping_address_id, date_of_birth: date_of_birth, gender: gender, created_at: created_at, updated_at: updated_at)
    }
  
    func convertToGlobalAuth() -> User.GlobalAuth {
        return User.GlobalAuth(id: id, name: name, username: username, email: email, registrationToken: registrationToken, role_id: role_id)
    }
    
}


extension EventLoopFuture where Value: User {
    func convertToPublic() -> EventLoopFuture<User.Public> {
        return self.map { user in
            return user.convertToPublic()
        }
    }
    
    func convertToGlobalAuth() -> EventLoopFuture<User.GlobalAuth> {
        return self.map { user in
            return user.convertToGlobalAuth()
        }
    }
    
   
}

extension Collection where Element: User {
    func convertToPublic() -> [User.Public] {
        return self.map { $0.convertToPublic() }
    }
    
    func convertToGlobalAuth() -> [User.GlobalAuth] {
        return self.map{ $0.convertToGlobalAuth() }
    }
    
}

extension EventLoopFuture where Value == Array<User> {
    func convertToPublic() -> EventLoopFuture<[User.Public]> {
        return self.map { $0.convertToPublic() }
    }
    
    func convertToGlobalAuth() -> EventLoopFuture<[User.GlobalAuth]> {
        return self.map { $0.convertToGlobalAuth() }
    }
}

extension User: ModelAuthenticatable {
    
    static let usernameKey = \User.$username
    static let passwordHashKey = \User.$password

    func verify(password: String) throws -> Bool  {
        try Bcrypt.verify(password, created: self.password)
    }
    
}
