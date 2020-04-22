import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {

  }

  login() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['/home']);
    }, 2000);
  }

}
