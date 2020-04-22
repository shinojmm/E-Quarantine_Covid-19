import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corona-map',
  templateUrl: './corona-map.component.html',
  styleUrls: ['./corona-map.component.scss']
})
export class CoronaMapComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

}
