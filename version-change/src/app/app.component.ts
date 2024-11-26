import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
const packageVersion = require('../../package.json').version;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'version-change';
  ngOnInit() {
    console.log(packageVersion);
  }
}
