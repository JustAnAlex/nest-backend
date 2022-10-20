import { INestApplication } from "@nestjs/common/interfaces"
import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"

function swaggerDocumentation(app: INestApplication) {
    const config = new DocumentBuilder()
    .setTitle('Users')
    .setDescription('users api documentation')
    .setVersion('1.0.0')
    .addTag('Controllers for users')
    .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)
}

async function bootstrap() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)

    swaggerDocumentation(app)
    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}
bootstrap()

