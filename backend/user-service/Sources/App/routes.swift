import Vapor
import FluentPostgresDriver
import Fluent
import Redis

func routes(_ app: Application) throws {
    let port: Int
    let redisHostname: String
    let redisPort: Int
    
    guard let serverHostname = Environment.get("SERVER_HOSTNAME") else {
        return print("No Env Server Hostname")
    }
    
    if let envPort = Environment.get("SERVER_PORT") {
        port = Int(envPort) ?? 8081
    } else {
        port = 8081
    }
    
    if let redisEnvHostname = Environment.get("HOSTNAME_REDIS") {
         redisHostname = redisEnvHostname
    } else {
        redisHostname = "localhost"
    }
    
    
    if let redisEnvPort = Environment.get("PORT_REDIS") {
         redisPort = Int(redisEnvPort) ?? 6379
    } else {
        redisPort = 6379
    }
    
    app.http.server.configuration.port = port
    app.redis.configuration = try RedisConfiguration(hostname: redisHostname, port: redisPort)

    app.databases.use(.postgres(
            hostname: Environment.get("DB_HOSTNAME")!,
            username: Environment.get("DB_USERNAME")!,
            password: Environment.get("DB_PASSWORD")!,
            database: Environment.get("DB_NAME")!),
            as: .psql)
    
    app.logger.logLevel = .debug
    app.http.server.configuration.hostname = serverHostname
    try app.register(collection: UserController())
    try app.register(collection: AuthController())
    
}
