import { Component } from '@angular/core';

import jobsData from '../../fixtures/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jobList: any = jobsData;
  filters: any;

  private jobFilter = (category: any, value: any) => {
    var props = this;
    var filter;
    if(category === "languages" || category === "tools") {
      filter = {
        [category]: function(props: any) {
          return props.jobList.filter((jobs: any) => jobs[category].includes(value));
        }
      }
    } else {
      filter = {
        [category]: function(props: any) {
          return props.jobList.filter((jobs: any) => jobs[category] === value);
        }
      }
    }

    this.jobList = filter[category](props);
  }

  filterByRole(role: any) {
    /* this.jobList = this.jobList.filter((job: any) => job.role === role); */
    this.filters = { ...this.filters, "role": role };
    console.log("filters: ", this.filters);
    this.jobFilter("role", role);
  }

  filterByLevel(level: any) {
    /* this.jobList = this.jobList.filter((job: any) => job.level === level); */
    this.filters = { ...this.filters, "level": level };
    console.log("filters: ", this.filters);
    this.jobFilter("level", level);
  }

  filterByLanguage(language: any) {
    console.log("language: ", language);
    this.filters = { ...this.filters, "language": language };
    console.log("filters: ", this.filters);
    this.jobFilter("languages", language);
  }
  
  filterByTool(tool: any) {
    console.log("tool", tool);
    this.filters = { ...this.filters, "tool": tool };
    console.log("filters: ", this.filters);
    this.jobFilter("tools", tool);
  }
}
