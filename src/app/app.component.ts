import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  success: boolean = false;

  constructor(
    private http: HttpClient,
    private iconsService: IconsService,
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
    this.files = data;
  }

  test() {
    this.success = false;
    const formData = new FormData();
    for (let i = 0; i < this.files.length; i++) {
      formData.append('file', this.files[i]);
    }
    this.http.post('/api/Icons/CreateFont', formData).subscribe((res: any) => {
      this.success = res.status;
    });
  }

}
