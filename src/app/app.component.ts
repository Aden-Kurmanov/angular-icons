import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Subscription} from "rxjs";
import {IconsService} from "./icons.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loading = false;
  files: File[] = [];
  icons: {key: string, value: string}[] = [];

  constructor(
    private http: HttpClient,
    private iconsService: IconsService
  ) {
  }

  ngOnInit() {
    const sub: Subscription = this.iconsService.getIcons().subscribe((icons) => {
      for (const i of Object.keys(icons)) {
        const icon = 'icon-' + i;
        const value = icons[i].toString(16);
        this.icons.push({key: icon, value: value});
      }

      this.loading = false;
      sub.unsubscribe();
    });
  }

  get_file(data) {
    console.log('getData: ', data);
    this.files.push(data);
  }

  test() {
    const formData = new FormData()
    for (let i = 0; i < this.files.length; i++) {
      formData.append('file', this.files[i]);
    }
    const uploadReq = new HttpRequest('POST', '/api/icon/testIcon', formData, {
      reportProgress: true
    });
    this.http.request(uploadReq).subscribe((res) => {
      console.log('res: ', res);
    }, (err) => {
      console.log('err: ', err);
    })
    // this.http.post('/api/icon/testIcon', 'hello').subscribe((res) => {
    //   console.log('result: ', res);
    // }, (err) => {
    //   console.log('err: ', err);
    // });
  }

}
