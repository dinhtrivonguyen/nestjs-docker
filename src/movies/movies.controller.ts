import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { MoviesService } from './movies.service';
  
  @Controller('movies')
  export class MoviesController {
    /*MoviesService: any;*/
    constructor(private readonly MoviesService: MoviesService) {}
  
    @Post()
    async addMovie(
      @Body('title') prodTitle: string,
      @Body('description') prodDesc: string,
      @Body('year') prodYear: number,
    ) {
      const generatedId = this.MoviesService.insertMovie(
        prodTitle,
        prodDesc,
        prodYear,
      );
      return { id: generatedId };
    }
  
    @Get()
    async getAllMovies() {
      const movies = await this.MoviesService.getMovies();
      return movies;
    }
  
    @Get(':id')
    async getMovie(@Param('id') prodId: string) {
      return this.MoviesService.getSingleMovie(prodId);
    }
  
    @Patch(':id')
    async updateMovie(
      @Param('id') prodId: string,
      @Body('title') prodTitle: string,
      @Body('description') prodDesc: string,
      @Body('year') prodYear: number,
    ) {
      await this.MoviesService.updateMovie(prodId, prodTitle, prodDesc, prodYear);
      return null;
    }
  
    @Delete(':id')
    async  removeMovie(@Param('id') prodId: string) {
        await this.MoviesService.deleteMovie(prodId);
        return null;
    }
  }
  