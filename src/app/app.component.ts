import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MultiPurposeWebsite';

  youtube(): void {
    window.open("https://www.youtube.com", "_blank");
  }

  instagram(): void {
    window.open("https://www.instagram.com", "_blank");
  }

  twitter(): void {
    window.open("https://www.twitter.com", "_blank");
  }

  facebook(): void {
    window.open("https://www.facebook.com", "_blank");
  }
}
