/**
 * @class Comment model
 */
export default class Comment {
  id: number;
  name: string;
  email: string;
  body: string;

  constructor(data: Comment) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.body = data.body;
  }
}
