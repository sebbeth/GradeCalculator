import { Component } from '@angular/core';
import { AccountDataService } from './account-data.service';


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
      this.accountData.getAccount();
    }

}
