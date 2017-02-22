import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/user.service';
import { UserModel } from '../common/user-model';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  user: UserModel;
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.user = this.userservice.getUser();
  }
  

}
