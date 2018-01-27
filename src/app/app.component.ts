import { Component } from '@angular/core';
import { AccountDataService } from './account-data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private accountData: AccountDataService) { }



  ngAfterViewChecked() {

    this.accountData.update();
  }

}
