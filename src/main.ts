import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigurationService } from './config/configuration.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const {
    swagger,
    app: { http },
  }: ConfigurationService = app.get<ConfigurationService>(ConfigurationService);

  const config = new DocumentBuilder()
  .setTitle('Connect Service Api')
  .setDescription('Сервис Connect')
  .setVersion('1.0')
  .addTag('')
  .addBearerAuth()
  .addServer('/')
  .setExternalDoc(
    'Postman Collection',
    `${swagger.url}/${swagger.prefix}-json`,
  )
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup(swagger.prefix, app, document, {
  swaggerOptions: swagger.options,
});

await app
.listen(http.port)
.then(() => Logger.log(`Service started on http port ${http.port}...`));
}

bootstrap();
