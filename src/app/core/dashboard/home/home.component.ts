import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tableData: Array<any>;
  fileToUpload: File = null;
  constructor(private service: AppService , private elem: ElementRef) { }

  ngOnInit() {
    this.service.getTableData().subscribe((data) => {
      this.tableData = data;
    });
  }

  uploadFile() {
    let files = this.elem.nativeElement.querySelector('#selectFile').files;
    let formData = new FormData();
    let file = files[0];
    formData.append('selectFile' , file , file.name);
    console.log(formData);
    this.service.uploadFile(formData).subscribe((resp) => {
      // console.log(resp);
    });
  }

  handleFileInput(files: FileList) {
    console.log(files);
    this.fileToUpload = files.item(0);

    console.log(this.fileToUpload);
    const formData = new FormData();
    console.log(formData);
    formData.append('fileKey', this.fileToUpload, this.fileToUpload.name);
    console.log(formData);
  }

}
