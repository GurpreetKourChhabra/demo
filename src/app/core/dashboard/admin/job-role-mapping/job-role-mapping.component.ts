import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-job-role-mapping',
  templateUrl: './job-role-mapping.component.html',
  styleUrls: ['./job-role-mapping.component.css']
})
export class JobRoleMappingComponent implements OnInit {
  public tableData: Array<any>;
  public jobRole = {
    role: '',
    level: '',
    type: ''
  };
  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getTableData().subscribe((data) => {
      this.tableData = data.map((value) => {
        value['role'] = '';
        value['type'] = '';
        value['level'] = '';
        return value;
      });
      console.log(this.tableData);
    });
  }

  test() {
    console.log(this.tableData);
  }

}
