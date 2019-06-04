import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { Directive, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.login_modal.show();
  }

  @ViewChild('login_modal') login_modal: ModalDirective;
  
}
