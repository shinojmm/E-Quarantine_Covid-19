import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: any[];
  questionIndex: number = 0;
  checkedOption = "";
  textAnswer = "";
  textAreaAnswer = "";

  constructor(private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
    this.questions = [
      { question: "Do you have fever above 37.8 degree?", answerType: "boolean" },
      { question: "Do you have sence of smell?", answerType: "boolean" },
      { question: "Do you have breathing problem?", answerType: "boolean" },
      { question: "Do you have sore throat?", answerType: "boolean" },
      { question: "Are you having a very hard time waking up?", answerType: "boolean" },
      { question: "Have you lost consciousness in recent times?", answerType: "boolean" },
      { question: "Are you feeling inability to lie down because of difficulty breathing?", answerType: "boolean" },
      { question: "How many days since you are having the symptoms?", answerType: "text" },
      { question: "Do you have body pain?", answerType: "boolean" },
      { question: "Your blood group?", answerType: "text" },
      { question: "Describe you condition", answerType: "textArea" },
    ];
  }

  nextQuestion() {
    this.questionIndex++;
    this.checkedOption = "";
    this.textAnswer = "";
    this.textAreaAnswer = "";
  }

  submitAnswers() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['/home']);
    }, 2000);
  }

}
