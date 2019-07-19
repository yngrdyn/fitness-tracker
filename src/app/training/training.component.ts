import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  ongoingTraining: string = '';

  constructor() { }

  ngOnInit() {
  }

  onTrainingStart(training: string) {
    this.ongoingTraining = training && training !== '' ? training : '';
  }

  onTrainingFinish() {
    this.ongoingTraining = '';
  }

}
