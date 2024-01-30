import { PostEnum } from 'src/post/enum/post.enum';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'post' })
export class Post {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true })
  photo_id: string;

  @Column()
  post_type: PostEnum;

  @Column({ nullable: true })
  title: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column({nullable: true })
  is_active: boolean;
}
