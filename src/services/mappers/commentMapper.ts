import { Comment } from '../../models';
import { CommentDto } from '../dtos';


export function commentMapper(dto: CommentDto): Comment {
  return new Comment({
    id: dto.id,
    name: dto.name,
    email: dto.email,
    body: dto.body,
  });
}

export default function commentsMapper(dto: CommentDto[]): Comment[] {
  return dto.map(commentDto => commentMapper(commentDto));
}
