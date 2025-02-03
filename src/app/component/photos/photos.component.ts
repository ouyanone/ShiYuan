import { Component } from '@angular/core';
import { FileUploader, FileLikeObject, FileSelectDirective } from 'ng2-file-upload';
 

const URL = 'http://localhost:3000/fileupload/';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {



  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'file',
    disableMultipart : false,
    autoUpload: true,
    method: 'post',
    allowedFileType: ['image', 'pdf']
  });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('File uploaded:', item, response, status, headers);
    };
  }

 

}
