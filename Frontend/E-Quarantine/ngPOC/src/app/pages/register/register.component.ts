import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {

  }

  register() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['/questions']);
    }, 2000);
  }

}
