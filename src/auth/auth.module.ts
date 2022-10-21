import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModels } from 'src/users/users.models';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        UsersModels,
        JwtModule.register({
            privateKey: process.env.PRIVATE_KEY
        })
    ]
})
export class AuthModule {}
