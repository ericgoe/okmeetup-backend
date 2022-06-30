import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event } from './entities/event.entity';
import { Participant } from './entities/participant.entity';
import { PossibleAppointment } from './entities/possible-appointment.entity';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env['DATABASE_HOST'],
      username: process.env['DATABASE_USER'],
      password: process.env['DATABASE_PASSWORD'],
      database: 'okmeetup',
      synchronize: true,
      entities: [join(__dirname, '**/*.entities{.js,.ts}')],
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Event, Participant, PossibleAppointment]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
