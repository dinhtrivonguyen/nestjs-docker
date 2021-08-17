import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
//import { Mongoose } from 'mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/Movies.module';

@Module({
  imports: [MoviesModule, MongooseModule.forRoot('mongodb+srv://dinhtri:dinhtri@cluster0.dauq7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
