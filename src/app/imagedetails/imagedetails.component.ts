import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-imagedetails',
  templateUrl: './imagedetails.component.html',
  styleUrls: ['./imagedetails.component.css']
})
export class ImagedetailsComponent implements OnInit {

  constructor(private _http: HttpClient,public dialog: MatDialog) { }
  k: any
  name: any
  url: any
  siteaddress: any
  imglist: Array<{ _id: string, name: string, url: string }> = []

  ngOnInit(): void {
    this._http.get('http://localhost:3000/api/images').subscribe(list => {
      this.imglist = list["data"]
    })

    this._http.get('http://localhost:3000/api/images/' + sessionStorage.getItem("id")).subscribe(list => {

      console.log(list)
      this.name = list["data"].name
      this.url = list["data"].url
      this.siteaddress = list["data"].siteaddress
    })

  }
close(){
this.dialog.closeAll()
}
}
