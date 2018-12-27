export class Post {
  loveits: number;
  created_at: any;
  constructor(public title: string, public content: string) {
    this.created_at = (new Date()).toString();
    this.loveits = 0;
  }
}