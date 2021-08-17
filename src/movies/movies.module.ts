import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MovieSchema } from './movie.model';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Movie', schema: MovieSchema}])],
    controllers: [MoviesController],
    providers: [MoviesService],
})
export class MoviesModule {}
