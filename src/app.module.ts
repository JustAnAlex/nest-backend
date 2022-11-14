import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModels } from "./users/users.models";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { RolesModels } from "./roles/roles.models";
import { UsersRolesModels } from "./users-roles/users-roles.models";
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtService } from "@nestjs/jwt";

@Module({
    controllers:[AuthController],
    // providers:[AuthService, JwtService],
    providers:[AuthService],
    imports:[
        ConfigModule.forRoot({
            envFilePath: `./env/${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [UsersModels, RolesModels, UsersRolesModels],
            autoLoadModels: true,
        }),
        UsersModule,
        RolesModule,
        AuthModule,
    ]
})

export class AppModule {}
