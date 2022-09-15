import { Component } from '@angular/core';

import jobsData from '../../../../fixtures/data.json';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent {
  jobList: any = jobsData;

}
