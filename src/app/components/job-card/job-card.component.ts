import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent {
  @Input() job: any;

  @Output() roleFilterEvent = new EventEmitter();
  @Output() levelFilterEvent = new EventEmitter();
  @Output() languageFilterEvent = new EventEmitter();
  @Output() toolFilterEvent = new EventEmitter();
}
