import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-portfolio',
  imports: [MatSidenavModule, MatListModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  currentActivePortfolioItemTitle: string = "";

  portfolioItemList: PortfolioItem[] = [
    {
      image: '',
      title: "Portfolio 1",
      html: '<p>Lorem ipsum dolor sit amet. Ea vitae quibusdam et quod labore sed placeat quaerat aut quasi quos ut asperiores fugit sed neque quod. At dolorum autem hic voluptate autem a culpa iusto aut expedita quia et quia alias in illum commodi. Et cupiditate voluptas est nihil officiis eum obcaecati omnis qui voluptas ducimus et tenetur dolorum est ducimus laudantium aut molestias incidunt. Qui sint earum qui molestiae nostrum et ratione omnis ex eius quia ab voluptates voluptas in omnis officiis nam sint possimus. Qui placeat voluptatem qui mollitia quia ut quaerat veniam aut quia voluptatem sit dolorem consequatur cum adipisci voluptatem sit quia facilis. </p><p>Et similique voluptatem aut nostrum dolores et corrupti rerum 33 harum labore eum voluptas animi qui perspiciatis temporibus ea sunt suscipit. Id praesentium nesciunt et tempore atque non dolor quia aut itaque voluptas ut quia quia. Et adipisci repudiandae sed dignissimos corrupti qui architecto dolorem qui cupiditate nulla rem eius voluptatibus eos quis vitae rem fugiat earum. Quo voluptatem quas eos tempore ducimus ut consectetur reprehenderit aut temporibus necessitatibus et iusto accusamus. Qui deserunt amet id veniam optio qui consequuntur rerum in omnis possimus qui aliquid molestiae. </p><p>Sed consectetur quasi sit rerum libero ut sint fugiat ex excepturi quis. Non sint veritatis ab itaque harum ut voluptates quae. Est magnam minima hic aliquam odio eos error numquam in quidem corrupti et accusamus sunt. Quo totam quae est harum magni et maxime impedit. Aut voluptatem voluptatem et dicta corporis rem ullam autem. Et cumque voluptas et eius tempora et quia quisquam in autem atque quo dolorem consequatur qui dolores saepe qui ullam ratione. Eos dolorem temporibus et quis culpa eos quia omnis sed unde iure et harum dolores. Quo libero numquam ea voluptatem quidem ex illum pariatur a dolorum voluptas ea incidunt voluptatem. Ea quam pariatur ex omnis sequi ab sint dicta a iure dolorem aut fugiat esse qui distinctio explicabo et quia voluptatem. </p>',
    },
    {
      image: '',
      title: "Portfolio 2",
      html: '<p>Lorem ipsum dolor sit amet. Ea vitae quibusdam et quod labore sed placeat quaerat aut quasi quos ut asperiores fugit sed neque quod. At dolorum autem hic voluptate autem a culpa iusto aut expedita quia et quia alias in illum commodi. Et cupiditate voluptas est nihil officiis eum obcaecati omnis qui voluptas ducimus et tenetur dolorum est ducimus laudantium aut molestias incidunt. Qui sint earum qui molestiae nostrum et ratione omnis ex eius quia ab voluptates voluptas in omnis officiis nam sint possimus. Qui placeat voluptatem qui mollitia quia ut quaerat veniam aut quia voluptatem sit dolorem consequatur cum adipisci voluptatem sit quia facilis. </p><p>Et similique voluptatem aut nostrum dolores et corrupti rerum 33 harum labore eum voluptas animi qui perspiciatis temporibus ea sunt suscipit. Id praesentium nesciunt et tempore atque non dolor quia aut itaque voluptas ut quia quia. Et adipisci repudiandae sed dignissimos corrupti qui architecto dolorem qui cupiditate nulla rem eius voluptatibus eos quis vitae rem fugiat earum. Quo voluptatem quas eos tempore ducimus ut consectetur reprehenderit aut temporibus necessitatibus et iusto accusamus. Qui deserunt amet id veniam optio qui consequuntur rerum in omnis possimus qui aliquid molestiae. </p><p>Sed consectetur quasi sit rerum libero ut sint fugiat ex excepturi quis. Non sint veritatis ab itaque harum ut voluptates quae. Est magnam minima hic aliquam odio eos error numquam in quidem corrupti et accusamus sunt. Quo totam quae est harum magni et maxime impedit. Aut voluptatem voluptatem et dicta corporis rem ullam autem. Et cumque voluptas et eius tempora et quia quisquam in autem atque quo dolorem consequatur qui dolores saepe qui ullam ratione. Eos dolorem temporibus et quis culpa eos quia omnis sed unde iure et harum dolores. Quo libero numquam ea voluptatem quidem ex illum pariatur a dolorum voluptas ea incidunt voluptatem. Ea quam pariatur ex omnis sequi ab sint dicta a iure dolorem aut fugiat esse qui distinctio explicabo et quia voluptatem. </p>',
    },
    {
      image: '',
      title: "Portfolio 3",
      html: '<p>Lorem ipsum dolor sit amet. Ea vitae quibusdam et quod labore sed placeat quaerat aut quasi quos ut asperiores fugit sed neque quod. At dolorum autem hic voluptate autem a culpa iusto aut expedita quia et quia alias in illum commodi. Et cupiditate voluptas est nihil officiis eum obcaecati omnis qui voluptas ducimus et tenetur dolorum est ducimus laudantium aut molestias incidunt. Qui sint earum qui molestiae nostrum et ratione omnis ex eius quia ab voluptates voluptas in omnis officiis nam sint possimus. Qui placeat voluptatem qui mollitia quia ut quaerat veniam aut quia voluptatem sit dolorem consequatur cum adipisci voluptatem sit quia facilis. </p><p>Et similique voluptatem aut nostrum dolores et corrupti rerum 33 harum labore eum voluptas animi qui perspiciatis temporibus ea sunt suscipit. Id praesentium nesciunt et tempore atque non dolor quia aut itaque voluptas ut quia quia. Et adipisci repudiandae sed dignissimos corrupti qui architecto dolorem qui cupiditate nulla rem eius voluptatibus eos quis vitae rem fugiat earum. Quo voluptatem quas eos tempore ducimus ut consectetur reprehenderit aut temporibus necessitatibus et iusto accusamus. Qui deserunt amet id veniam optio qui consequuntur rerum in omnis possimus qui aliquid molestiae. </p><p>Sed consectetur quasi sit rerum libero ut sint fugiat ex excepturi quis. Non sint veritatis ab itaque harum ut voluptates quae. Est magnam minima hic aliquam odio eos error numquam in quidem corrupti et accusamus sunt. Quo totam quae est harum magni et maxime impedit. Aut voluptatem voluptatem et dicta corporis rem ullam autem. Et cumque voluptas et eius tempora et quia quisquam in autem atque quo dolorem consequatur qui dolores saepe qui ullam ratione. Eos dolorem temporibus et quis culpa eos quia omnis sed unde iure et harum dolores. Quo libero numquam ea voluptatem quidem ex illum pariatur a dolorum voluptas ea incidunt voluptatem. Ea quam pariatur ex omnis sequi ab sint dicta a iure dolorem aut fugiat esse qui distinctio explicabo et quia voluptatem. </p>',
    },
  ];

  constructor()
  {
    
  }

  onScroll(event: any)
  {
    this.currentActivePortfolioItemTitle =  "Project 1"
    console.log(event);
  }

  scrollToPortfolioItem(title: string)
  {
    let el = document.getElementById(title);
    el?.scrollIntoView({behavior: 'smooth'});
  }
}

export interface PortfolioItem {
  title: string;
  html: string;
  image: string;
}