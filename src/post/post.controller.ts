import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDto } from './dto/post.dto';

@Controller()
export class PostController {
  constructor(private readonly service: PostService) {}

  @Post()
  async create(@Body() dto: PostDto, @Query() id: string) {
    return this.service.createPost(dto, id);
  }
}
