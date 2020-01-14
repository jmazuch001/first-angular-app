import { Component } from '@angular/core';

// if you inspect the html, you'll find 'app-root' in the script tag
// Using typescript to dynamically inject our own components
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  // adding another object will let you bind this dynamically to the html when you call in the html file
  name = 'Joseph!';
}
