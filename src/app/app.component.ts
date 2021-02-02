import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  getData() {
    console.log('Getting Data');
    this.http
      .get('http://localhost:3000/request')
      .toPromise()
      .then((data: any) => {
        const width = +window.innerWidth - 100;
        const height = +window.innerHeight - 100;
        console.log(data);
        window.location.href = data.data;      
      })
      .catch((err) => console.log(err));
  }
}
