import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AppService {

  constructor(private _http: HttpClient) { }

  public getTableData() {
    const url = '../../../assets/sample-data/csv-data.json';
    return this._http.get<any>(url);
  }

  getPieChart() {
    const url = '../../../assets/sample-data/piechart-data.json';
    return this._http.get<any>(url);
  }

  getBarChart() {
    const url = '../../../assets/sample-data/barchart-data.json';
    return this._http.get<any>(url);
  }

  public uploadFile(formData: any) {
    const url = 'http://localhost/demo/index.php';
    return this._http.post(url , formData);
  }

}
