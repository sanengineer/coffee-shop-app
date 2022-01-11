//
//  File.swift
//  
//
//  Created by San Engineer on 14/08/21.
//

import Vapor

final class UserAuthMiddleware: Middleware {
    
    let authHostname: String = Environment.get("SERVER_HOSTNAME")!
    let authPort: Int = Int(Environment.get("SERVER_PORT")!)!

    func respond(to request: Request, chainingTo next: Responder) -> EventLoopFuture<Response> {
        guard let token = request.headers.bearerAuthorization else {
            return request.eventLoop.future(error: Abort(.unauthorized))
        }
        
        guard let id_params = request.parameters.get("id") else {
            return request.eventLoop.future(error: Abort(.unauthorized))
        }
      
        
        //debug
        print("\n", token, "\n")
        print("\n", id_params, "\n")
        
        return request
            .client
            .post("http://\(authHostname):\(authPort)/user/auth/authenticate", beforeSend: {
                authRequest in
                
                //debug
                print("\nAUTH_REQUEST",authRequest,"\n")
                print("\nAUTH_DATA", try authRequest.content.encode(AuthenticateData(token:token.token)), "\n")
                
                
                try authRequest.content.encode(AuthenticateData(token:token.token))
            })
        
            .flatMapThrowing { response in
                guard let user_id = try response.content.decode(Auth.self).id.self else {
                    throw Abort(.badRequest, reason: "USER_ID")
                }
                guard let params_uuid = UUID(uuidString: id_params) else {
                    throw Abort(.unauthorized, reason: "PARAMS_UUID")
                }
                

               if user_id == params_uuid {
                guard response.status == .ok  else {
                    if response.status == .unauthorized {
                        throw Abort(.unauthorized, reason: "UNAUTHORIZED")
                    } else {
                        throw Abort(.internalServerError)
                    }
                }
                } else {
                    throw Abort(.unauthorized)
                }
                       
                
                //debug
//                print("\n","RESPONSE:\n", response,"\n")
//                print("\n", "TRYYY\n", try response.content.decode(Auth.self), "\n")
//                print("\n","USER:", user_id,"\n")
            }
        
            .flatMap {
                return next.respond(to: request)
            }
    }
    
}
