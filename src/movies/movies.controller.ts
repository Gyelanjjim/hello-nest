import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  //   @Get('search')
  //   search(@Query('year') searchingYear: string) {
  //     return `영화 개봉년도로 검색하기: ${searchingYear}`;
  //   }
  @Get('/:id')
  getOne(@Param('id') movieId: number) {
    // url로 들어온 값은 모두 string 이다.
    return this.moviesService.getOne(movieId);
  }
  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.moviesService.create(movieData);
  }
  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }
  //   @Put('/:id')    // 모든 리소스를 업데이트
  @Patch('/:id') // 일부 리소스만 업데이트
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDTO) {
    return this.moviesService.update(movieId, updateData);
  }
}
