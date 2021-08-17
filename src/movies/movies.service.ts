import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie } from './movie.model';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];
  constructor(@InjectModel('Movie') private readonly movieModel: Model <Movie>) {} 

  async insertMovie(title: string, desc: string, year: number) {
   const newMovie = new this.movieModel({
      title, 
      description: desc, 
      year,
    }); 
    const result = await newMovie.save();
    console.log(result);
    return result.id as string;
  }

  async getMovies() {
    const movies = await this.movieModel.find().exec();
    return movies.map(prod => ({
      id: prod.id,
      title: prod.title,
      description: prod.description,
      year: prod.year,
    }));
  }

  async getSingleMovie(movieId: string) {
    const movie = await this.findMovie(movieId);
    return {
      id: movie.id,
      title: movie.title,
      description: movie.description,
      year: movie.year,
    };
  }

  async updateMovie(movieId: string, title: string, desc: string, year: number) {
    const updatedMovie = await this.findMovie(movieId);
    if (title) {
      updatedMovie.title = title;
    }
    if (desc) {
      updatedMovie.description = desc;
    }
    if (year) {
      updatedMovie.year = year;
    }
    updatedMovie.save();
  }

  async deleteMovie(prodId: string) {
      const result = await this.movieModel.deleteOne({_id: prodId}).exec();
      if (result.n === 0) {
        throw new NotFoundException('Could not find movie.');
      }
  }

  private async findMovie(id: string): Promise<Movie> {
    let movie;
    try {
      movie = await this.movieModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find movie.');
    }
    if (!movie) {
      throw new NotFoundException('Could not find movie.');
    }
    return movie;
  }
}
