import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-avatar',
  templateUrl: './create-avatar.component.html',
  styleUrls: ['./create-avatar.component.css']
})
export class CreateAvatarComponent implements OnInit {

  public imagePath;
  public imgURL: any;
  public message: string;

  constructor() { }

  ngOnInit() {
  }

  public create() {

  }

  public preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.imgURL = reader.result;
    };
  }

}
