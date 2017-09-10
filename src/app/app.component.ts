import { Component } from '@angular/core';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private loaderService: LoaderService) { }

  showLoader() {
    this.loaderService.show();
    setTimeout(() => {
      this.loaderService.hide();
    }, 10000);
  }
}
