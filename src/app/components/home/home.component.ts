import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileServiceService } from 'src/app/service/file-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filesArray:any[]=[];
  selectedFile: any;
  message: string='';
  // showMessage:string='';

  testIF:boolean=true;
  constructor(private fileService:FileServiceService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.fileService.getAllFiles().
    subscribe(
      (file:any) => this.filesArray = file
    )
  }

  pointFile(event: any):void{
    this.selectedFile=event.target.files[0];
  }

  onUpload():void{
    console.log(this.selectedFile);
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    this.fileService.upload(formData).subscribe(
      resp => {
        if(resp.status === 200)  this.message = "uploaded"
        else this.message = "try again"
        this.getAll()
      }
      
    )
    
    // return this.message;
    console.log(this.message)
  }
  verify():void{
    
  }
  
  // onUploadFiles(file: File): void {
  //   const formData = new FormData();
  //   formData.append('file', file, file.name); 
  //   this.fileService.Upload(formData).subscribe(
  //     event => {
  //       console.log(event);
  //       // this.resportProgress(event);
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log(error);
  //     }
  //   );
  // }
  
}
