import Vapor
import Fluent

final class Token: Content {
    var id: UUID?
    var tokenString: String
    var username: String
    var userId: UUID
    
    init(tokenString: String, userId: UUID, username: String) {
        self.tokenString = tokenString
        self.userId = userId
        self.username = username
    }
}

final class RegistrationToken: Content {
    var tokenString: String
    var username: String
    var userId: String!
    
    init(tokenString: String, userId: String!, username: String) {
        self.tokenString = tokenString
        self.userId = userId
        self.username = username
    }
}

extension Token {
    static func generate(for user: User) throws -> Token {
        let random = [UInt8].random(count: 32)
        return try Token(tokenString: random.base64, userId: user.requireID(), username: user.username)
    }
    
}


