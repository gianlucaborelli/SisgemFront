import { Component } from '@angular/core';
import { needConfirmation } from './decorator/confirm-dialog.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sisgem-front';

}
