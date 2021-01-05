import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-day2';

  isTableShow: boolean = false;

  onShowTable() {
    this.isTableShow = true;
  }
}
