import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostService {

  async createPost(data: PostDto, id: string){


  }
}
