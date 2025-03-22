import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    MatTabsModule,
    PortfolioComponent,
    ProjectsComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  pageSelected: string = 'projects';

  constructor() {}

  selectedTabChange(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.pageSelected = 'projects';
        break;
      case 2:
        this.pageSelected = 'portfolio';
        break;
    }
  }
}
