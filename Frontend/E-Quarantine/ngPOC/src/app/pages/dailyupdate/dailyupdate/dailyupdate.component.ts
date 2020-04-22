import { Component, OnInit, ViewChild } from '@angular/core';
import { CloudantServiceService } from 'src/app/cloudant-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dailyupdate',
  templateUrl: './dailyupdate.component.html',
  styleUrls: ['./dailyupdate.component.scss']
})
export class DailyupdateComponent implements OnInit {
  dailyForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  submitted = false;
  public data: any;
  private cloudentService: CloudantServiceService;
  constructor(private fb: FormBuilder) { this.createForm(); }

  createForm() {
    this.dailyForm = this.fb.group({
      temperature: ['', Validators.required],
      dailynote: ['', Validators.required]
    });
  }

  get f() {
    return this.dailyForm.controls;
  }

  ngOnInit() {
    // this.cloudentService.getAllDoc('quarantine').subscribe(
    //   response => {
    //     this.data = response;
    //    var sample = JSON.stringify(response);
    //    console.log("data :" + sample);
    //  });
  }
  onClickMe(value) {
    this.submitted = true;
    if (this.dailyForm.invalid) {
      return;
    }
    let serializedForm = JSON.stringify(value);
    console.log(serializedForm);
    this.cloudentService.createDoc('quarantine', serializedForm).subscribe();
    //this.successMessage = "Your Details Saved!";
  }
}
