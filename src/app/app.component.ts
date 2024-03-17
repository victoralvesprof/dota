import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'layout';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dota';
}
