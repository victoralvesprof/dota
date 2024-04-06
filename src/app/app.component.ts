import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'layout';
import { HeroListComponent } from 'hero-list';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule, HttpClientModule, HeroListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dota';
}
