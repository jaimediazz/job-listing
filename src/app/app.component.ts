import { Component } from '@angular/core';

import jobsData from '../../fixtures/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jobList: any = jobsData;

}
