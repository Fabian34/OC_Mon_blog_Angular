import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  isAuth = false;

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000
    );
  }

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveits: number;
  @Input() postCreatedAt: Date;

  ngOnInit() {
  }
  
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
    console.log('On ajoute +1 Like! On a ' + this.postLoveits + ' Like.');
  }

  onRetirerLike() {
    this.postLoveits--;
    console.log('On retire -1 Like! On a ' + this.postLoveits + ' Like.');
  }

}
