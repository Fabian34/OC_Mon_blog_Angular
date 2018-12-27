import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  
  //isAuth = false;
  
  constructor(private postsService: PostsService, private router: Router) {
    //setTimeout(
    //  () => {
    //    this.isAuth = true;
    //  }, 2000
    //);
  }
  
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveits: number;
  @Input() postCreatedAt: Date;
  @Input() post: Post;

  ngOnInit() {}

  getTitle() {
    return this.postTitle;
  }

  getContent() {
    return this.postContent;
  }

  getLoveits() {
    return this.postLoveits;
  }

  getCreatedAt() {
    return this.postCreatedAt;
  }

  onAjouterLike() {
    this.postLoveits++;
    console.log('+1 Like! On a ' + this.postLoveits + ' Like.');
    this.postsService.saveLoveits(this.post, this.postLoveits);
    this.router.navigate(['/posts']);
  }

  onRetirerLike() {
    this.postLoveits--;
    console.log('-1 Like! On a ' + this.postLoveits + ' Like.');
    this.postsService.saveLoveits(this.post, this.postLoveits);
    this.router.navigate(['/posts']);
  }
  
  onDeletePost(post: Post) {
    this.postsService.removePost(post);
    console.log('Post intitulé : "' + post.title + '" supprimé!');
  }
}
