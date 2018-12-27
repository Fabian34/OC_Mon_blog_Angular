import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
	var config = {
	  apiKey: "AIzaSyCZzt6TU_qLCNpMX7qN8q98nwewdmi4GR8",
	  authDomain: "posts-9d599.firebaseapp.com",
	  databaseURL: "https://posts-9d599.firebaseio.com",
	  projectId: "posts-9d599",
	  storageBucket: "posts-9d599.appspot.com",
	  messagingSenderId: "279535891662"
	};
    firebase.initializeApp(config);
  }
}
