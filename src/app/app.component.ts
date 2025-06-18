import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
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
  @ViewChild('projectsComponent', { read: ElementRef })
  projectsComponent: ElementRef;

  pageSelected: string = '';
  blurActive: boolean = false; // State variable for blur effect

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
        this.blurActive = true; // Activate blur
        break;
      case 2:
        this.pageSelected = 'portfolio';
        this.blurActive = true; // Activate blur
        break;
      default:
        this.pageSelected = '';
        this.blurActive = false; // Deactivate blur
    }
  }

  navigateToProject(projectTitle: string) {
    this.pageSelected = 'projects'; // Switch to the Projects tab
    setTimeout(() => {
      const projectElement = this.projectsComponent.nativeElement.querySelector(
        `#${projectTitle}`
      );
      projectElement?.scrollIntoView({ behavior: 'smooth' });
    }, 0); // Wait for the Projects component to render
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop === 0) {
      this.blurActive = false; // Deactivate blur when scrolled to the top
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const cursorElement = document.querySelector(
      '.cursor-effect'
    ) as HTMLElement;
    if (cursorElement) {
      cursorElement.style.left = `${
        event.clientX - cursorElement.offsetWidth / 2
      }px`;
      cursorElement.style.top = `${
        event.clientY - cursorElement.offsetHeight / 2
      }px`;
    }
  }
}
