import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  @Output() trainingStarted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.trainingStarted.emit(form.controls['exercise'].value);
  }

}
