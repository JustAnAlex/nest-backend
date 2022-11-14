import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        // ConfigModule.forRoot({
            // envFilePath: `./env/${process.env.NODE_ENV}.env`
            // envFilePath: path.resolve(__dirname, 'dist')
        // }),
        UsersModule,
        JwtModule.register({
            // secret: process.env.PRIVATE_KEY,
            secret: `${process.env.PRIVATE_KEY}`,
            signOptions: {
                expiresIn: '12h'
            }
        }),
        
    ],
    exports: [
        JwtModule
    ]
})
export class AuthModule {}
