import httpClient from './http-client';
import { Comment } from '../../models';
import { CommentDto } from '../dtos';
import commentsMapper from '../mappers/commentMapper';


function getCommetns(): Promise<Comment[]> {
  return httpClient.get<CommentDto[]>('/comments')
    .then(({ data }) => commentsMapper(data));
}

export default {
  getCommetns,
};
