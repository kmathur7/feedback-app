import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../common/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private userservice: UserService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: '',
      empid: ''
    });
  }
  fncall() {
    this.userservice.setUser(this.registerForm.value);
    this.router.navigate(['/response']);
  }

}
