import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app/app.module';
import { UserModule } from './user/user.module';

async function bootstrap() {
  const user = await NestFactory.create(UserModule);
  await user.listen(8000);
}
bootstrap();
