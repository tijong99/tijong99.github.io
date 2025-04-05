import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-portfolio',
  imports: [MatSidenavModule, MatListModule, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  @ViewChildren('portfolioPage', { read: ElementRef })
  portfolioPages: QueryList<ElementRef>; // Ensure matches 'portfolioPages'

  detectedPortfoliopage: string = ''; // Ensure matches 'detectedPortfoliopage'

  portfolioList: Portfolio[] = [
    // Ensure matches 'portfolioList'
    {
      image: '../../assets/Portfolio1.png',
      title: 'Portfolio 1',
      content: {
        heading: 'Portfolio 1',
        subheading: 'Subheading for Portfolio 1',
        date: 'January 2023',
        paragraphs: ['Lorem ipsum dolor sit amet...', 'More details here...'],
      },
    },
    {
      image: '../../assets/Portfolio2.png',
      title: 'Portfolio 2',
      content: {
        heading: 'Portfolio 2',
        subheading: 'Subheading for Portfolio 2',
        date: 'February 2023',
        paragraphs: ['Lorem ipsum dolor sit amet...', 'More details here...'],
      },
    },
  ];

  constructor(private renderer: Renderer2) {
    this.renderer.listen(
      'window',
      'scroll',
      this.detectPortfolioPage.bind(this)
    );
  }

  detectPortfolioPage() {
    const detectedPortfoliopages: any[] = [];
    this.portfolioPages.forEach((elm, index) => {
      if (this.isInViewport(elm.nativeElement)) {
        detectedPortfoliopages.push(elm.nativeElement);
      }
    });

    this.detectedPortfoliopage = detectedPortfoliopages[0]?.id;
  }

  isInViewport(page: any) {
    var elementTop = page.offsetTop;
    var elementBottom = elementTop + page.offsetHeight - 50;

    var viewportTop = document.documentElement.scrollTop;
    var viewportBottom = viewportTop + document.documentElement.clientHeight;

    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  scrollToPortfolio(title: string) {
    let el = document.getElementById(title); // Ensure matches 'title'
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}

export interface Portfolio {
  title: string;
  image: string;
  content: {
    heading: string;
    subheading?: string;
    date?: string;
    paragraphs: string[];
  };
}
