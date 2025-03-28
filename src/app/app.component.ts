import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PortfoliosComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    MatTabsModule,
    PortfoliosComponent,
    ProjectsComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  pageSelected: string = '';

  constructor() {
    this.mainColor = this.randomColor();
  }

  stylesList = ['red', 'red', 'red', 'red', 'red', 'red'];
  styleIndex = 0;
  mainColor = '';

  randomColor() {
    this.styleIndex = Math.floor(Math.random() * 6);
    return this.stylesList[this.styleIndex];
  }

  selectedTabChange(event: MatTabChangeEvent) {
    switch (event.index) {
      case 0:
        this.pageSelected = 'projects';
        break;
      case 4:
        this.pageSelected = 'portfolio';
        break;
    }
  }
}
