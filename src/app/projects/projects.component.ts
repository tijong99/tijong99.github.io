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
      title: 'Project 1',
      html: '<p>Lorem ipsum dolor sit amet. Ea vitae quibusdam et quod labore sed placeat quaerat aut quasi quos ut asperiores fugit sed neque quod. At dolorum autem hic voluptate autem a culpa iusto aut expedita quia et quia alias in illum commodi. Et cupiditate voluptas est nihil officiis eum obcaecati omnis qui voluptas ducimus et tenetur dolorum est ducimus laudantium aut molestias incidunt. Qui sint earum qui molestiae nostrum et ratione omnis ex eius quia ab voluptates voluptas in omnis officiis nam sint possimus. Qui placeat voluptatem qui mollitia quia ut quaerat veniam aut quia voluptatem sit dolorem consequatur cum adipisci voluptatem sit quia facilis. </p><p>Et similique voluptatem aut nostrum dolores et corrupti rerum 33 harum labore eum voluptas animi qui perspiciatis temporibus ea sunt suscipit. Id praesentium nesciunt et tempore atque non dolor quia aut itaque voluptas ut quia quia. Et adipisci repudiandae sed dignissimos corrupti qui architecto dolorem qui cupiditate nulla rem eius voluptatibus eos quis vitae rem fugiat earum. Quo voluptatem quas eos tempore ducimus ut consectetur reprehenderit aut temporibus necessitatibus et iusto accusamus. Qui deserunt amet id veniam optio qui consequuntur rerum in omnis possimus qui aliquid molestiae. </p><p>Sed consectetur quasi sit rerum libero ut sint fugiat ex excepturi quis. Non sint veritatis ab itaque harum ut voluptates quae. Est magnam minima hic aliquam odio eos error numquam in quidem corrupti et accusamus sunt. Quo totam quae est harum magni et maxime impedit. Aut voluptatem voluptatem et dicta corporis rem ullam autem. Et cumque voluptas et eius tempora et quia quisquam in autem atque quo dolorem consequatur qui dolores saepe qui ullam ratione. Eos dolorem temporibus et quis culpa eos quia omnis sed unde iure et harum dolores. Quo libero numquam ea voluptatem quidem ex illum pariatur a dolorum voluptas ea incidunt voluptatem. Ea quam pariatur ex omnis sequi ab sint dicta a iure dolorem aut fugiat esse qui distinctio explicabo et quia voluptatem. </p>',
    },
    {
      image: '',
      title: 'Project 2',
      html: '<p>Lorem ipsum dolor sit amet. Ea vitae quibusdam et quod labore sed placeat quaerat aut quasi quos ut asperiores fugit sed neque quod. At dolorum autem hic voluptate autem a culpa iusto aut expedita quia et quia alias in illum commodi. Et cupiditate voluptas est nihil officiis eum obcaecati omnis qui voluptas ducimus et tenetur dolorum est ducimus laudantium aut molestias incidunt. Qui sint earum qui molestiae nostrum et ratione omnis ex eius quia ab voluptates voluptas in omnis officiis nam sint possimus. Qui placeat voluptatem qui mollitia quia ut quaerat veniam aut quia voluptatem sit dolorem consequatur cum adipisci voluptatem sit quia facilis. </p><p>Et similique voluptatem aut nostrum dolores et corrupti rerum 33 harum labore eum voluptas animi qui perspiciatis temporibus ea sunt suscipit. Id praesentium nesciunt et tempore atque non dolor quia aut itaque voluptas ut quia quia. Et adipisci repudiandae sed dignissimos corrupti qui architecto dolorem qui cupiditate nulla rem eius voluptatibus eos quis vitae rem fugiat earum. Quo voluptatem quas eos tempore ducimus ut consectetur reprehenderit aut temporibus necessitatibus et iusto accusamus. Qui deserunt amet id veniam optio qui consequuntur rerum in omnis possimus qui aliquid molestiae. </p><p>Sed consectetur quasi sit rerum libero ut sint fugiat ex excepturi quis. Non sint veritatis ab itaque harum ut voluptates quae. Est magnam minima hic aliquam odio eos error numquam in quidem corrupti et accusamus sunt. Quo totam quae est harum magni et maxime impedit. Aut voluptatem voluptatem et dicta corporis rem ullam autem. Et cumque voluptas et eius tempora et quia quisquam in autem atque quo dolorem consequatur qui dolores saepe qui ullam ratione. Eos dolorem temporibus et quis culpa eos quia omnis sed unde iure et harum dolores. Quo libero numquam ea voluptatem quidem ex illum pariatur a dolorum voluptas ea incidunt voluptatem. Ea quam pariatur ex omnis sequi ab sint dicta a iure dolorem aut fugiat esse qui distinctio explicabo et quia voluptatem. </p>',
    },
    {
      image: '',
      title: 'Project 3',
      html: '<p>Lorem ipsum dolor sit amet. Ea vitae quibusdam et quod labore sed placeat quaerat aut quasi quos ut asperiores fugit sed neque quod. At dolorum autem hic voluptate autem a culpa iusto aut expedita quia et quia alias in illum commodi. Et cupiditate voluptas est nihil officiis eum obcaecati omnis qui voluptas ducimus et tenetur dolorum est ducimus laudantium aut molestias incidunt. Qui sint earum qui molestiae nostrum et ratione omnis ex eius quia ab voluptates voluptas in omnis officiis nam sint possimus. Qui placeat voluptatem qui mollitia quia ut quaerat veniam aut quia voluptatem sit dolorem consequatur cum adipisci voluptatem sit quia facilis. </p><p>Et similique voluptatem aut nostrum dolores et corrupti rerum 33 harum labore eum voluptas animi qui perspiciatis temporibus ea sunt suscipit. Id praesentium nesciunt et tempore atque non dolor quia aut itaque voluptas ut quia quia. Et adipisci repudiandae sed dignissimos corrupti qui architecto dolorem qui cupiditate nulla rem eius voluptatibus eos quis vitae rem fugiat earum. Quo voluptatem quas eos tempore ducimus ut consectetur reprehenderit aut temporibus necessitatibus et iusto accusamus. Qui deserunt amet id veniam optio qui consequuntur rerum in omnis possimus qui aliquid molestiae. </p><p>Sed consectetur quasi sit rerum libero ut sint fugiat ex excepturi quis. Non sint veritatis ab itaque harum ut voluptates quae. Est magnam minima hic aliquam odio eos error numquam in quidem corrupti et accusamus sunt. Quo totam quae est harum magni et maxime impedit. Aut voluptatem voluptatem et dicta corporis rem ullam autem. Et cumque voluptas et eius tempora et quia quisquam in autem atque quo dolorem consequatur qui dolores saepe qui ullam ratione. Eos dolorem temporibus et quis culpa eos quia omnis sed unde iure et harum dolores. Quo libero numquam ea voluptatem quidem ex illum pariatur a dolorum voluptas ea incidunt voluptatem. Ea quam pariatur ex omnis sequi ab sint dicta a iure dolorem aut fugiat esse qui distinctio explicabo et quia voluptatem. </p>',
    },
  ];

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'scroll', this.detectProjectPage.bind(this));
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
