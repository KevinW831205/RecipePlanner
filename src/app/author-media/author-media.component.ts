import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author-media',
  templateUrl: './author-media.component.html',
  styleUrls: ['./author-media.component.css']
})
export class AuthorMediaComponent {
  @Input('imgUrl') imgUrl;

  constructor() { }


}
