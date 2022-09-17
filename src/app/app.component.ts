import { Component } from '@angular/core';

import jobsData from '../../fixtures/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jobList: any = jobsData;
  filters: any = {
    "role": "",
    "level": "",
    "languages": new Set(),
    "tools": new Set()
  };

  private jobFilter = (category: any, value: any) => {
    var props = this;
    var filter;
    if(category === "languages" || category === "tools") {
      filter = {
        [category]: function(props: any) {
          return props.jobList.filter((jobs: any) => value.every((el: any) => jobs[category].includes(el)));
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
    this.filters = { ...this.filters, "role": role };
    this.jobFilter("role", role);
  }

  filterByLevel(level: any) {
    this.filters = { ...this.filters, "level": level };
    this.jobFilter("level", level);
  }

  filterByLanguage(language: any) {
    this.filters = { ...this.filters, "languages": this.filters.languages.add(language) };
    this.jobFilter("languages", [...this.filters.languages]);
  }
  
  filterByTool(tool: any) {
    this.filters = { ...this.filters, "tools": this.filters.tools.add(tool) };
    this.jobFilter("tools", [...this.filters.tools]);
  }

  clearFilters() {
    this.jobList = jobsData;
    this.filters = {
      "role": "",
      "level": "",
      "languages": new Set(),
      "tools": new Set()      
    }
  }

  deleteRoleFilter() {
    this.jobList = jobsData;
    this.filters.role = '';
    if(this.filters.level !== "") {
      this.jobFilter("level", this.filters.level);      
    }
    if(this.filters.languages.size !== 0) {
      this.jobFilter("languages", [...this.filters.languages]);      
    }  
    if(this.filters.tools.size !== 0) {
      this.jobFilter("tools", [...this.filters.tools]);      
    }        
  }

  deleteLevelFilter() {
    this.jobList = jobsData;
    this.filters.level = '';
    if(this.filters.role !== "") {
      this.jobFilter("role", this.filters.role);      
    }
    if(this.filters.languages.size !== 0) {
      this.jobFilter("languages", [...this.filters.languages]);      
    }  
    if(this.filters.tools.size !== 0) {
      this.jobFilter("tools", [...this.filters.tools]);      
    }        
  }  

  deleteLanguageFilter(language: any) {
    this.jobList = jobsData;
    this.filters.languages.delete(language);
    if(this.filters.role !== "") {
      this.jobFilter("role", this.filters.role);      
    }
    if(this.filters.level !== "") {
      this.jobFilter("level", this.filters.level);      
    }    
    if(this.filters.languages.size !== 0) {
      this.jobFilter("languages", [...this.filters.languages]);      
    }  
    if(this.filters.tools.size !== 0) {
      this.jobFilter("tools", [...this.filters.tools]);      
    }        
  }   

  deleteToolFilter(tool: any) {
    this.jobList = jobsData;
    this.filters.tools.delete(tool);
    if(this.filters.role !== "") {
      this.jobFilter("role", this.filters.role);      
    }
    if(this.filters.level !== "") {
      this.jobFilter("level", this.filters.level);      
    }    
    if(this.filters.languages.size !== 0) {
      this.jobFilter("languages", [...this.filters.languages]);      
    }  
    if(this.filters.tools.size !== 0) {
      this.jobFilter("tools", [...this.filters.tools]);      
    }        
  }   
}
