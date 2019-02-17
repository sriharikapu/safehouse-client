import { Component, OnInit } from '@angular/core';

import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public avatarService: AvatarService) { }

  ngOnInit() {
  }

}
