import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {

  @Input() exercise: string = '';
  @Output() trainingFinished = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onStop() {
    this.trainingFinished.emit();
  }

}
