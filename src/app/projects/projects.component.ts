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
  selector: 'app-projects',
  imports: [MatSidenavModule, MatListModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @ViewChildren('projectPage', { read: ElementRef })
  projectPages: QueryList<ElementRef>;

  detectedProjectpage: string = '';

  projectList: Project[] = [
    {
      image: '',
      title: 'Project 2',
      html: '<p>Lorem ipsum dolor sit amet. Ea vitae quibusdam et quod labore sed placeat quaerat aut quasi quos ut asperiores fugit sed neque quod. At dolorum autem hic voluptate autem a culpa iusto aut expedita quia et quia alias in illum commodi. Et cupiditate voluptas est nihil officiis eum obcaecati omnis qui voluptas ducimus et tenetur dolorum est ducimus laudantium aut molestias incidunt. Qui sint earum qui molestiae nostrum et ratione omnis ex eius quia ab voluptates voluptas in omnis officiis nam sint possimus. Qui placeat voluptatem qui mollitia quia ut quaerat veniam aut quia voluptatem sit dolorem consequatur cum adipisci voluptatem sit quia facilis. </p><p>Et similique voluptatem aut nostrum dolores et corrupti rerum 33 harum labore eum voluptas animi qui perspiciatis temporibus ea sunt suscipit. Id praesentium nesciunt et tempore atque non dolor quia aut itaque voluptas ut quia quia. Et adipisci repudiandae sed dignissimos corrupti qui architecto dolorem qui cupiditate nulla rem eius voluptatibus eos quis vitae rem fugiat earum. Quo voluptatem quas eos tempore ducimus ut consectetur reprehenderit aut temporibus necessitatibus et iusto accusamus. Qui deserunt amet id veniam optio qui consequuntur rerum in omnis possimus qui aliquid molestiae. </p><p>Sed consectetur quasi sit rerum libero ut sint fugiat ex excepturi quis. Non sint veritatis ab itaque harum ut voluptates quae. Est magnam minima hic aliquam odio eos error numquam in quidem corrupti et accusamus sunt. Quo totam quae est harum magni et maxime impedit. Aut voluptatem voluptatem et dicta corporis rem ullam autem. Et cumque voluptas et eius tempora et quia quisquam in autem atque quo dolorem consequatur qui dolores saepe qui ullam ratione. Eos dolorem temporibus et quis culpa eos quia omnis sed unde iure et harum dolores. Quo libero numquam ea voluptatem quidem ex illum pariatur a dolorum voluptas ea incidunt voluptatem. Ea quam pariatur ex omnis sequi ab sint dicta a iure dolorem aut fugiat esse qui distinctio explicabo et quia voluptatem. </p>',
    },
    {
      image: '../../assets/palette.png',
      title: 'PIV - Profesional identity and vision',
      html: `
        <h1>PIV - Profesional identity and vision</h1>
        <p>I am a designer who is driven by change and innovation through experiences that transform societies. With technology at the heart of every idea, I aim to reshape our relationship with the things in our world.</p>
        <p>My work is grounded in the belief that design can be a powerful tool for change. I am committed to creating spaces that are not only functional and beautiful but also transformative.</p>
        <p>My design process is rooted in the belief that the best solutions are those that are deeply connected to the world around us.</p>
        <p>To achieve this, I rely on artistic processes—because that is what I believe in. I have moved beyond the modernist paradigm of data-driven, cause-and-effect thinking in which I was trained as a physicist. Instead, I see greater potential in innovation approaches rooted in values, intuition, and experimentation—methods often inspired by the arts. The result: designs that are more expressive and deeply connected to the world.</p>
        <p>In a world where many shy away from complexity, I believe innovation thrives by embracing it. I do this by engaging with everything I encounter on design journeys—colleagues, stakeholders, materials, and methods. When true alignment exists, there is no friction, only momentum toward shared goals. This demands value-based leadership and trust in the world around us.</p>
        <p>The freedom I need to fully commit to this way of working is fueled by my entrepreneurial spirit. I am self-directed and bring my full, authentic self to the table every day, inspiring others to join in. I proactively seek opportunities and feedback, driven by a deep motivation to contribute to the public domain—transforming the everyday through innovative spatial experiences.</p>
      `,
    },

    {
      image: '../../assets/Oids.png',
      title: 'Project 3',
      html: '<h1>The Oids - M12</h1><p>Are there patterns in how things come into being? During this research process, I embarked on an open-ended journey to explore what complexity means for design. Through over 50 iterations of the oids—a designed artifact consisting of a springy 3D-printed body and a magnet—I studied their behavior and the emergent qualities that arose when they moved in swarms. This exploration proved highly fruitful. The artifacts had an inherent attraction to anyone who interacted with them, and multiple academic directions emerged from the study (e.g., non-human charisma). Ultimately, I concluded that complexity has a benign shape—one that can be molded. To capture this, I formulated a set of heuristics for designing such artifacts, enabling complex tangible interaction and offering both an invitation and an initial vocabulary for other designers to embark on similar journeys. This insight profoundly influenced my design process, leading me to explore complexity dividends and consider design entropy as essential factors in my work. </p>',
    },
  ];

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'scroll', this.detectProjectPage.bind(this));
  }
  stylesList = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
  styleIndex = 0;

  randomColor() {
    this.styleIndex = Math.floor(Math.random() * 6);
    return this.stylesList[this.styleIndex];
  }

  detectProjectPage() {
    const detectedProjectpages: any[] = [];
    this.projectPages.forEach((elm, index) => {
      if (this.isInViewport(elm.nativeElement)) {
        detectedProjectpages.push(elm.nativeElement);
      }
    });

    this.detectedProjectpage = detectedProjectpages[0]?.id;
  }

  isInViewport(page: any) {
    var elementTop = page.offsetTop;
    var elementBottom = elementTop + page.offsetHeight - 50;

    // in this specific case the scroller is document.documentElement (<html></html> node)
    var viewportTop = document.documentElement.scrollTop;
    var viewportBottom = viewportTop + document.documentElement.clientHeight;

    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  scrollToProject(title: string) {
    let el = document.getElementById(title);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}

export interface Project {
  title: string;
  html: string;
  image: string;
}
