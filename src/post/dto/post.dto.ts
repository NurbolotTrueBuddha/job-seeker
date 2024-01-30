import { PostEnum } from "../enum/post.enum";

export class PostDto{
    id: string;
    photo_id: string;
    post_type: PostEnum;
    title: string;
    description: string;
    location: string;
    chapter: string
}