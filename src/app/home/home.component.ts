import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  hoverTextList: HoverText[] = [
    {
      index: 0,
      list: ['ipsum', 'ipso', 'iskjfhxdiashzfkahfoihpi'],
      style: '',
    },
    {
      index: 0,
      list: [
        'dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat',
      ],
      style: '',
    },
    {
      index: 0,
      list: ['nulla', 'eene', 'tweee', 'drieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'],
      style: '',
    },
  ];

  rouletteOnHover(index: number) {
    let length = this.hoverTextList[index].list.length;
    if (length > 1) {
      this.hoverTextList[index].index =
        (this.hoverTextList[index].index + 1) % length;
      this.hoverTextList[index].style = 'red';
//     let temp = Math.floor(Math.random() * 6) 
    }
  }
}

export interface HoverText {
  list: string[];
  index: number;
  style: string;
}
