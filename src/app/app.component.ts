import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog} from '@angular/material/dialog';
import { ImagedetailsComponent } from './imagedetails/imagedetails.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imageapp';
  cols : number;

  gridByBreakpoint = {
    xl: 6,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  }
 
  imglist: Array<{ _id: string, name: string, url: string }> = []
  list: any
  breakpoint:any
  constructor(private _http: HttpClient, public dialog: MatDialog,private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
  }
  ngOnInit() {

    this._http.get('http://localhost:3000/api/images').subscribe(list => {
      console.log(list)
      console.log(list["data"])
      this.imglist = list["data"]
      console.log(this.imglist[0])
    })
    this.breakpoint = (window.innerWidth <= 900) ? 1 : 6;
  }
  imagedetails(i) {
    sessionStorage.setItem("id", i)
    
    const dialogRef = this.dialog.open(ImagedetailsComponent,
    {
      width: '1400px',
      height: '600px',
      
    });
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 4 : 6;
  
  }
}
