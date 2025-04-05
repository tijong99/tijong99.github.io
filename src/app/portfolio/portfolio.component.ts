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
    {
      image: '../../assets/ProfessionalIdentity.png',
      title: 'Professional Identity',
      content: {
        heading: 'Professional Identity',
        paragraphs: [
          'I am a designer who is driven by change and innovation through experiences that transform societies. With technology at the heart of every idea, I aim to reshape our relationship with the things in our world.',
          'To achieve this, I rely on artistic processes—because that is what I believe in. I have moved beyond the modernist paradigm of data-driven, cause-and-effect thinking in which I was trained as a physicist. Instead, I see greater potential in innovation approaches rooted in values, intuition, and experimentation—methods often inspired by the arts. The result: designs that are more expressive and deeply connected to the world.',
          'In a world where many shy away from complexity, I believe innovation thrives by embracing it. I do this by engaging with everything I encounter on design journeys—colleagues, stakeholders, materials, and methods. When true alignment exists, there is no friction, only momentum toward shared goals. This demands value-based leadership and trust in the world around us.',
          'The freedom I need to fully commit to this way of working is fueled by my entrepreneurial spirit. I am self-directed and bring my full, authentic self to the table every day, inspiring others to join in. I proactively seek opportunities and feedback, driven by a deep motivation to contribute to the public domain—transforming the everyday through innovative spatial experiences.',
        ],
      },
    },
    {
      image: '../../assets/Vision.png',
      title: 'Vision',
      content: {
        heading: 'Vision',
        paragraphs: [
          'The physical and natural world is filled with affective, rich complexity. But can’t we also make it effective?',
          'Since Descartes, the development of technology and Anthropocene systems has been driven by analysis, control, and instrumentation. This has shaped a modernist world where complexity is treated as an antagonist—hidden, confined, and minimized. While this approach has propelled our species forward, it has also led to colonialism, climate catastrophe, and the erosion of our own existence.',
          'This mindset severely limits the creative potential already embedded in the world. Nature itself reveals boundless possibilities, emerging from the open-ended, complex making-practice we call evolution. I propose a different approach: rather than suppressing complexity, we should shape it into a benign force—one we can harness and experience in all its richness.',
          'By doing so, we can break the vicious cycle of problem-solving and the inevitable problem-making that follows. Instead of reducing complexity, we should embrace it as a resource, bringing forward the deeply embedded mechanisms that already exist in the world.',
        ],
      },
    },
    {
      image: '../../assets/PastPresentFuture.png',
      title: 'Past-Present-Future',
      content: {
        heading: 'Past-Present-Future',
        paragraphs: [
          "With a bachelor's degree in applied physics, I specialized in using various computational techniques, working with data and programming. However, I found little enjoyment in this and felt at odds with the way these models and data framed our understanding of the world—too rigid, too singular. Seeking a more open and exploratory approach, I transitioned to industrial design, where I could engage with the world in a more creatively stimulating way.",
          'In the years following this shift, I struggled to articulate my vision and define my contribution within this artistic approach. My early ideas revolved around making the world more experienceable and vivid, which led me to focus on developing high-quality prototypes. I labeled myself a creative technologist.',
          'During this period, I developed broadly as a professional through a wide range of extracurricular activities: founding and leading student teams, working as a freelance public lighting consultant for municipalities, conducting research for publication in medical journals, initiating street art projects, and even writing critical letters to the university board—ultimately collaborating with them to shape and implement new policies.',
          'At the Transforming Practices squad, I discovered how my education in physics has shaped the way I perceive the world. This environment provided me with the perspectives, theories, approaches, and vocabulary to develop my design practice—ensuring it is both theoretically grounded and impactful.',
          'Teachings within the TP squad, such as post-phenomenology, reinforced the idea that the world is not merely an analytical and measurable reality but rather in a continuous state of becoming.',
          'My FMP project allowed me to merge the unique skills from physics with an artistic endeavor, creating a project that is deeply connected to research-through-design while maintaining high-quality prototypes.',
          'As I look toward the open future ahead, I am unsure of the exact path I need to take. I seek an environment where I can continue to imagine new ways of seeing and shaping the world—one that embraces complexity rather than reduces it. I want this to be constructive and sustainable, without relying on creative subsidies.',
          'This is why I am eager to work in the public domain, where the potential for meaningful impact is high.',
          'Could this mean rebuilding the system from within, as a healthy yet recalcitrant young civil servant?',
          'Could teaching or researching design be part of this contribution?',
          'Is there space to develop my own design practice—through a studio where I can refine, specify, and bring my vision into the world?',
        ],
      },
    },
    {
      image: '../../assets/CV.png',
      title: 'CV',
      content: {
        heading: 'Curriculum Vitae',
        paragraphs: [
          'EXPERIENCE',
          'Januari 2025 – Present Scape Agency | Designer and Material researcher',
          'September 2024 - Januari 2025 Scape Agency | Design intern',
          'May 2023 - Present LichtstudioTM | Freelance R&D for public lighting',
          'December 2021 - May 2022 SPACES (Startup) | Concept',
          'December 2020 - December 2021 GLOW | Workgroup campus area and Project manager',
          'September 2020 - Januari 2022 Team IGNITE | Founder and Lead design conception',
          'March 2020 - November 2020 VERO | Experimental physicist aerosol dynamics',
          'November 2018 - September 2019 Applied Micro Electronics | Production engineer',
          '',
          'EDUCATION',
          '2022 – TU/e | Master of Industrial Design',
          '2021 - 2022 TU/e | Pre-Master of Industrial Design',
          '2017 – 2021 TU/e | Bachelor of Applied Physics',
          '2011 – 2017 Oostvaarders College | Kunstklas Atheneum NT/NG',
          '',
          'PERSONALIA',
          'Tim de Jong',
          '02 - 08 - 1999',
          'Almere',
          'Contact',
          '+31(0)6 1523 7425',
          'tim@scape.agency',
          '',
          'EXPOSITIONS',
          'Februari 2024 Innovative low-light signage | Highlight Delft',
          'Januari 2024 A Growing City | Light-streetart in Eindhoven',
          'Juni 2021 - 2024 Een Eindje Mooier | Streetart commission by Eindhoven',
          'April 2022 - September 2022 Collecting Compassion | Commission by innovationSpace',
          'May 2023 Collecting Compassion | Museum Bonnefanten',
          'November 2021 Ballroom | GLOW 2021 (Winner Young Talent Award)',
          'October 2020 Expeditie Spinvis | Drivers of Change at DDW',
        ],
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
