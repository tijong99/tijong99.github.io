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
import { DomSanitizer } from '@angular/platform-browser';

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
      image: '../../assets/FMP.JPG',
      title: 'FMP (M21)',
      line: 'Metalmorphosis',
      content: {
        heading: 'FMP (M21) - Metalmorphosis',
        subheading:
          'Exploring the potential of a novel material through open-ended making, into posthuman jewelry.',
        date: 'Juli 2025 - CA/TR',
        paragraphs: ['In becoming...'],
      },
    },
    {
      image: '../../assets/Oids.png',
      title: 'M12 ',

      line: 'The Oids',
      content: {
        heading: 'M12 - The Oids',
        subheading:
          'Exploring the potential of a novel material through open-ended making, into posthuman jewelry.',
        date: 'Juli 2025 - CA/TR',
        paragraphs: [
          'Are there patterns in how things come into being?',
          'During this research process, I embarked on an open-ended journey to explore what complexity means for design. Through over 50 iterations of the oids—a designed artifact consisting of a springy 3D-printed body and a magnet—I studied their behavior and the emergent qualities that arose when they moved in swarms.This exploration proved highly fruitful. The artifacts had an inherent attraction to anyone who interacted with them, and multiple academic directions emerged from the study (e.g., non-human charisma).Ultimately, I concluded that complexity has a benign shape—one that can be molded. To capture this, I formulated a set of heuristics for designing such artifacts, enabling complex tangible interaction and offering both an invitation and an initial vocabulary for other designers to embark on similar journeys.This insight profoundly influenced my design process, leading me to explore complexity dividends and consider design entropy as essential factors in my work.',
        ],
      },
    },

    {
      image: '../../assets/RT.png',
      title: 'M11',
      line: 'Radical Transparency',
      content: {
        heading: 'M11 - Radical Transparency',
        subheading:
          'Scaffolding futures of transparency-policy implementation with experiential prototypes',

        date: 'Januari 2024 - US-TR (MDC-CA)',
        paragraphs: [
          'In a project that was far more pragmatic and situated than my personal work, we developed a workshop and a dichotomic prototype, presenting two radically different implementations of transparency policy. The setup was designed with a high level of detail to facilitate discussion on the situated specifics of these imagined implementations.',
          'By experiencing the prototypes firsthand, stakeholders could concretely see how specific design choices shape the experiences of both government officials and citizens within transparency processes. We consider this dichotomic setup to be a generalizable research approach.',
          'This project serves as an example of how to foreground the complexities of an Anthropocene system.',
        ],
      },
    },
    {
      image: '../../assets/Rectum.png',
      title: 'EX',
      line: 'Anatomy in silver',
      content: {
        heading: 'Anatomy in silver',
        subheading: 'Creating silver jewelry from medical imagery',
        date: 'January 2022',
        paragraphs: [
          'You might not recognize it, but this is the shape of an actual rectum. The model—extracted from DICOM files of a CT scan—captures the precise geometry of a rectum, which was then transformed into a silver pendant using the lost wax casting method from a 3D print.',
          'Due to its ambiguous form, the necklace’s meaning remains subtly concealed. To most observers, it appears as a naturalistic, amorphous shape.',
          'I have long seen potential in developing this as a service for individuals with a deeply personal connection to a part of their body—such as cancer survivors. The pendant could serve as a way to reframe their relationship with their body and past experiences, offering a means to process and reinterpret their journey.',
        ],
      },
    },
    {
      image: '../../assets/ballroom.jpeg',
      title: 'EX',
      line: 'Ballroom',
      content: {
        heading: 'Ballroom',
        subheading: 'Moved by light',
        date: 'October 2021',
        paragraphs: [
          'The world is increasingly governed by algorithms. Human movement—and how it is perceived and enacted—is intricately linked to other actors and the environment. Rich interactions emerge when you design these simple relationships within their context.',
          'In the aftermath of COVID, we designed a ballroom where people could celebrate being together outside once again. We developed a ‘social-distancing-proof’ system using a simple Kalman filter and prediction algorithm, which created a convincing experience of "dancing with" others.',
          'Based on my BSc thesis, the system allowed for 16 light-human dance couples to form, using AI-powered pedestrian detection from an overhead sensing system, part of the living lab. This project was exhibited during GLOW 2021 on campus.',
        ],
      },
    },
    {
      image: '../../assets/CollectingCompassion.png',
      title: 'EX',
      line: 'Collecting compassion',
      content: {
        heading: 'Collecting Compassion',
        subheading:
          'Creating a daily ritual of sharing our compassion as a statement of peace',
        date: 'April 2022',
        paragraphs: [
          'When the war in Ukraine began, both I and the innovation space felt overwhelmingly powerless and wanted to contribute in some meaningful way. Very quickly, we assembled a team to develop an installation artwork to show our support for those affected by the situation.',
          'In the transitional space between the entrance and landing floor, we created an interactive experience where any passerby could send a drawing of a heart, which would then be projected onto both them and the wall they were facing. As more blue and yellow hearts were added, they mixed together to create an increasingly white projection, symbolizing our shared intention for peace.',
        ],
      },
    },
    {
      image: '../../assets/eem.jpeg',
      title: 'EX',
      line: 'Een eindje mooier',
      content: {
        heading: 'Een eindje Mooier',
        subheading: 'Guerilla hacking of public lighting',
        date: 'June 2021',
        paragraphs: [
          'A specific rail underpass, over 100 meters long and located next to the campus, was dull by day and intimidating by night. Stuck in bureaucratic limbo, awaiting development as part of a new construction project, it had been neglected.',
          'Driven by a stubborn desire to address this, I designed an immersive, colorful installation and, with the help of friends, implemented it at night. The result was a moment of wonder for every passerby, and the Aldermen were impressed.',
          'Through this act of guerrilla light street art, I reflect on the urban development process and suggest the role one can play as a constructive, designing citizen—ultimately inspiring me to approach the world as if it were my own backyard.',
        ],
      },
    },
    {
      image: '../../assets/UM.png',
      title: 'EX',
      line: 'Urban mycelium',
      content: {
        heading: 'Urban mycelium',
        subheading:
          'Sprouting light-streetart to highlight the unused potential across the city as a living ecosystem',
        date: 'April 2024',
        paragraphs: [
          'The city, one of my obsessions, is a complex, living ecosystem. Like any ecosystem, it consists of actors, processes, and cycles. Part of the ecosystem decomposes to make room for new growth—autopoiesis. This city, in a constant state of coupled self-generation and decay, is not managed with this understanding.',
          'I introduce a new urban mycelium to the ecosystem. Through this street art project, I allow light-emitting "elven benches" to fruit. Just as fungi sprout fruiting bodies from their mycelium in areas where the city is decomposing, I aim to close the cycle of urban growth. In doing so, I highlight areas with high potential for new development and challenge the conventional cycle of urban development through a naturalistic metaphor.',
        ],
      },
    },
    {
      image: '../../assets/Muni.png',
      title: 'EX',
      line: 'freelance',
      content: {
        heading: 'Uncommon Public Lighting consultancy',
        subheading:
          'Creatively converging municipalities and industry to develop novel public lighting concepts for yet unsolved characteristic cases',
        date: 'June 2023 – June 2024',
        paragraphs: [
          'As a freelance designer, I joined the team at Lighthouse Tue, working to bring together all partners in the public lighting ecosystem in a user-centric way. Our goal was to develop new design solutions for archetypal public lighting challenges that remain unsolved.',
          'For the municipalities of Amsterdam, Amstelveen, and Utrecht, we developed over 16 design concepts across two projects. These concepts converged into prototypes that were evaluated through UX surveys, light intensity analyses, and situated workshops with stakeholders and visitors. The workshops helped us understand the interconnections between the various actors involved.',
        ],
      },
    },
  ];

  constructor(private renderer: Renderer2, private sanitizer: DomSanitizer) {
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
  image: string;
  line: string;
  content: {
    heading: string;
    subheading?: string;
    date?: string;
    paragraphs: string[];
  };
}
