import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, CommonModule], // Removed NgxPackeryModule
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Added CUSTOM_ELEMENTS_SCHEMA
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None, // Disable encapsulation
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('projectPage', { read: ElementRef })
  projectPages: QueryList<ElementRef>;

  detectedProjectpage: string = '';

  projectList: Project[] = [
    {
      image: '../../assets/FMP.JPG',
      images: [
        '../../assets/FMP.JPG',
        '../../assets/FMP/AL9A3220.JPG',
        '../../assets/FMP/AL9A3237.JPG',
        '../../assets/FMP/AL9A3263.JPG',
        '../../assets/FMP/AL9A3274.JPG',
        '../../assets/FMP/AL9A4170.JPG',
        '../../assets/FMP/AL9A4248.JPG',
        '../../assets/FMP/Broche1.jpg',
        '../../assets/FMP/c6dbd9a5-fb14-4514-9f38-8f15f55be1b9.jpg',
        '../../assets/FMP/IMG_6717.jpeg',
        '../../assets/FMP/IMG_7117.HEIC',
        '../../assets/FMP/IMG_7135.HEIC',
        '../../assets/FMP/pen1a.jpg',
        '../../assets/FMP/PXL_20241025_074434844.MP.jpg',
        '../../assets/FMP/Watch1.png',
        '../../assets/FMP/WIN_20241114_13_12_54_Pro.jpg',
        '../../assets/FMP/WIN_20241114_13_13_43_Pro.jpg',
        '../../assets/FMP/WIN_20241129_11_42_22_Pro.jpg',
        'FACT 1: This project took 6 months to complete.',
        'FACT 2: Inspired by nature.',
        'FACT 3: Incorporated a 4-month biographical study.',
        'FACT 4: Created 10 watches, 4 rings, 5 pens, and 2 brooches.',
        'FACT 5: Lab at Amsterdam Fashion Institute (AMFI).',
      ],
      title: 'FMP (M21)',
      line: 'Metalmorphosis',
      content: {
        heading: 'FMP (M21) - Timeless, a Chronolabe',
        subheading:
          'Exploring the potential of a novel material through open-ended making, into posthuman jewelry.',
        date: 'Juli 2025 - CA/TR',
        paragraphs: [
          '<div class="global-content">This graduation project <span class="violet">zooms out to often overlooked timescales in design</span>, from the gradual deterioration of materials to the products of now becoming fossils of the future. Showing the opportunities of realizing that a design is never finished.</div>',
          '<div class="global-content">At its core it proposes <span class="blue">a novel material</span> that harnesses <span class="blue">the slow dynamics of metal corrosion</span> to produce <span class="orange">unique aesthetic expressions</span> that evolve over multiple timescales. By designing a series of trinkets, the project invites reflections on how making, experiencing, and intentionally playfully unmaking with this material can foreground these other-temporal dimensions.</div>',
          '<div class="global-content">Through these reflections, in combination with a small diary study, the project contributes to operationalizing longer timescales in design. A repertoire for unmaking – a set of activities designers could utilize to bring the agency of deterioration and multiple timescales to the foreground in their design processes - is presented as a pragmatic tool, alongside <span class="violet">conceptual discussions on time-metaphors and notions such as care and authenticity</span> that change through the lens of long timescales.</div>',
        ],
      },
    },
    {
      image: '../../assets/Oids.png',
      images: [
        '../../assets/Oids.png',
        '../../assets/M12/Final Poster heuristics.jpg',
        '../../assets/M12/PXL_20240611_092151114.MP.jpg',
        '../../assets/M12/PXL_20240611_115905494.MP.png',
        '../../assets/M12/PXL_20240612_103230945.MP.jpg',
        '../../assets/M12/reynolds birds.png',
        '../../assets/M12/Screenshot 2024-06-11 090447.png',
        '../../assets/M12/ssss.png',
        '../../assets/M12/stamboom.png',
        '../../assets/M12/Starlings.jpg',
        '../../assets/M12/VC.png',
        '../../assets/M12/VISUALS 2.png',
        'FACT 1: Over 50 iterations were made.',
        'FACT 2: Uses magnets for interaction.',
      ],
      title: 'M12 ',

      line: 'The Oids',
      content: {
        heading: 'M12 - The Oids',
        subheading: 'Shaping complexity into benign form.',
        date: 'Juli 2025 - CA/TR',
        paragraphs: [
          '<div class="global-content">Are there patterns in how things come into being?</div>',
          '<div class="global-content">During this research process, I embarked on an open-ended journey to <span class="violet">explore what complexity means for design</span>. Through over 50 iterations of the oids—a designed artifact consisting of <span class="blue">a springy 3D-printed body</span> and a magnet—I studied their behavior and the emergent qualities that arose when they moved in swarms. This exploration proved highly fruitful. The artifacts had an inherent attraction to anyone who interacted with them, and multiple academic directions emerged from the study (e.g., non-human charisma). Ultimately, I concluded that <span class="orange">complexity has a benign shape</span>—one that can be molded.</div>',
          '<div class="global-content">To capture this, I formulated a set of heuristics for designing such artifacts, enabling complex tangible interaction and offering both <span class="red">an invitation</span> and an initial vocabulary for other designers to embark on similar journeys. This insight profoundly influenced my design process, leading me to explore complexity dividends and consider design entropy as essential factors in my work.</div>',
        ],
      },
    },

    {
      image: '../../assets/RT.png',
      images: [
        '../../assets/RT.png',
        '../../assets/M11/A9ytssi4_19y48or_f98.png',
        '../../assets/M11/A917mcgte_19y48oo_f98.png',
        '../../assets/M11/A917wpcsb_19y48ol_f98.png',
        '../../assets/M11/PXL_20231004_115905644.MP.jpg',
        '../../assets/M11/PXL_20231004_132446907.MP.jpg',
        '../../assets/M11/PXL_20231020_091112734.MP~2 (1).jpg',
        '../../assets/M11/PXL_20231208_125910378.MP.jpg',
        '../../assets/M11/PXL_20231214_134353283.MP.jpg',
        '../../assets/M11/RT - Copy.png',
        'FACT 1: Stakeholders experienced prototypes firsthand.',
        'FACT 2: Designed to facilitate transparency discussions.',
      ],
      title: 'M11',
      line: 'Radical Transparency',
      content: {
        heading: 'M11 - Radical Transparency',
        subheading:
          'Scaffolding futures of transparency-policy implementation with experiential prototypes',

        date: 'Januari 2024 - US-TR (MDC-CA)',
        paragraphs: [
          '<div class="global-content">In a project that was far more pragmatic and situated than my personal work, we developed a workshop and a dichotomic prototype, presenting two radically different implementations of transparency policy. The setup was designed with <span class="blue">a high level of detail</span> to facilitate <span class="violet">different implementations of transparency policy</span>.</div>',
          '<div class="global-content">By experiencing the prototypes firsthand, stakeholders could concretely see how specific design choices shape the experiences of both government officials and citizens within transparency processes. We consider this dichotomic setup to be a generalizable research approach.</div>',
          '<div class="global-content">This project serves as an example of how to foreground the complexities of an Anthropocene system.</div>',
        ],
      },
    },
    {
      image: '../../assets/ArtTech.png', // Placeholder image path
      images: [
        '../../assets/ArtTech.png', // Placeholder image path
        'https://youtu.be/GmpuFuxuoO4?feature=shared',
        'FACT 1: TR CA',
        'FACT 2: EXPERIMENT 8.',
      ],
      title: 'Art-Tech ISP',
      line: 'Experiment Eight',
      content: {
        heading: 'Art-Tech innovationspace project',
        subheading: 'Conveying agency in technological objects',
        date: 'June 2024',
        paragraphs: [
          '<div class="global-content">Following Ballroom, I continued to explore my fascination with the liveliness of non-living things. In this multidisciplinary project, we investigated additional qualities that <span class="orange">shape the perception of agency</span>, ranging from material expression and contextual framing to movement dynamics, through <span class="orange">highly embodied ideation processes</span>.</div>',
          '<div class="global-content">We qualitatively assessed the perception of agency in our work Experiment Eight: <span class="blue">a detailed interactive installation</span> inspired by contemporary dance, experienced by 40 participants.</div>',
        ],
      },
    },
    {
      image: '../../assets/Rectum.png',
      images: [
        '../../assets/rectum/Rectum.png',
        '../../assets/rectum/Screenshot 2025-05-01 151959.png',
        'FACT 1: Based on medical imagery.',
        'FACT 2: Created using lost wax casting.',
      ],
      title: 'EX',
      line: 'Anatomy in silver',
      content: {
        heading: 'Anatomy in silver',
        subheading: 'Creating silver jewelry from medical imagery',
        date: 'January 2022',
        paragraphs: [
          '<div class="global-content">You might not recognize it, but this is the shape of an actual rectum. The model—<span class="yellow">extracted from DICOM files of a CT scan</span>—captures the precise geometry of a rectum, which was then transformed into a silver pendant using <span class="blue">the lost wax casting method</span> from a 3D print.</div>',
          '<div class="global-content">Due to its <span class="orange">ambiguous form</span>, the necklace’s meaning remains subtly concealed. To most observers, it appears as a naturalistic, amorphous shape.</div>',
          '<div class="global-content">I have long <span class="red">seen potential</span> in developing this as a service for individuals with a deeply personal connection to a part of their body—such as cancer survivors. The pendant could serve as a way to reframe their relationship with their body and past experiences, offering a means to process and reinterpret their journey.</div>',
        ],
      },
    },
    {
      image: '../../assets/ballroom.jpeg',
      images: [
        '../../assets/ballroom.jpeg',
        '../../assets/Ballroom/20211101_222143.jpg',
        '../../assets/Ballroom/A-depth-map-collected-by-the-Kinect-based-measurement-system-with-superimposed-individual (1).png',
        '../../assets/Ballroom/csm_BvOF Hypar GLOW 2021 testbeeld 2_32e4304723.jpg',
        '../../assets/Ballroom/s.jpeg',
        '../../assets/Ballroom/Screenshot 2025-05-01 150701.png',
        '../../assets/Ballroom/Screenshot 2025-05-01 150721.png',
        'FACT 1: Designed post-COVID for social distancing.',
        'FACT 2: Featured at GLOW 2021.',
      ],
      title: 'EX',
      line: 'Ballroom',
      content: {
        heading: 'Ballroom',
        subheading: 'Moved by light',
        date: 'October 2021',
        paragraphs: [
          '<div class="global-content">The world is increasingly governed by algorithms. Human movement—and how it is perceived and enacted—is intricately linked to other actors and the environment. Rich interactions emerge when you design these simple relationships within their context.</div>',
          '<div class="global-content">In the aftermath of COVID, we designed a ballroom where <span class="violet">people could celebrate being together</span> outside once again. We developed a ‘social-distancing-proof’ system using a simple <span class="blue">Kalman filter and prediction algorithm</span>, which created a convincing experience of "dancing with" others.</div>',
          '<div class="global-content">Based on my BSc thesis, the system allowed for 16 light-human dance couples to form, using <span class="yellow">AI-powered pedestrian detection from an overhead sensing system</span>, part of the living lab. This project was exhibited during <span class="red">GLOW 2021</span> on campus.</div>',
        ],
      },
    },
    {
      image: '../../assets/CollectingCompassion.png',
      images: [
        '../../assets/CollectingCompassion.png',
        '../../assets/CollectingCompassion/CollectingCompassion.png',
        '../../assets/CollectingCompassion/csm_innospace_fda109dec4.webp',
        'FACT 1: Created to support Ukraine during the war.',
        'FACT 2: Interactive experience with heart projections.',
      ],
      title: 'EX',
      line: 'Collecting compassion',
      content: {
        heading: 'Collecting Compassion',
        subheading:
          'Creating a daily ritual of sharing our compassion as a statement of peace',
        date: 'April 2022',
        paragraphs: [
          '<div class="global-content">When the war in Ukraine began, both I and the innovation space felt overwhelmingly powerless and wanted to <span class="violet">contribute in some meaningful way</span>. Very quickly, <span class="red">we assembled a team</span> to develop an installation artwork to show our support for those affected by the situation.</div>',
          '<div class="global-content">In the transitional space between the entrance and landing floor, we created an <span class="orange">interactive experience</span> where any passerby could send a drawing of a heart, which would then be projected onto both them and the wall they were facing. As more blue and yellow hearts were added, they mixed together to create an increasingly white projection, symbolizing our shared intention for peace.</div>',
        ],
      },
    },
    {
      image: '../../assets/eem.jpeg',
      images: [
        '../../assets/eem.jpeg',
        '../../assets/EEM/20210906_222635.jpg',
        '../../assets/EEM/csm_image00004_a18c5523b7.webp',
        '../../assets/EEM/csm_image00037_d235d69cb8.webp',
        '../../assets/EEM/csm_in_progress_EEM_fd7f577de2.webp',
        '../../assets/EEM/Screenshot 2025-05-01 152717.png',
        '../../assets/EEM/Screenshot 2025-05-01 152747.png',
        '../../assets/EEM/Slide1.png',
        'FACT 1: Guerrilla light street art.',
        'FACT 2: Inspired by urban development processes.',
      ],
      title: 'EX',
      line: 'Een eindje mooier',
      content: {
        heading: 'Een eindje Mooier',
        subheading: 'Guerilla hacking of public lighting',
        date: 'June 2021',
        paragraphs: [
          '<div class="global-content">A specific rail underpass, over 100 meters long and located next to the campus, was dull by day and <span class="violet">it had been neglected</span> by night. Stuck in bureaucratic limbo, awaiting development as part of a new construction project, it had been neglected.</div>',
          '<div class="global-content">Driven by a stubborn desire to address this, I designed an <span class="orange">immersive, colorful installation</span> and, with the help of friends, implemented it at night. The result was a <span class="orange">moment of wonder</span> for every passerby, and the Aldermen were impressed.</div>',
          '<div class="global-content">Through this act of guerrilla light street art, I reflect on the urban development process and suggest the role one can play as a <span class="red">constructive, designing citizen</span>—ultimately inspiring me to approach the world as if it were my own backyard.</div>',
        ],
      },
    },

    {
      image: '../../assets/UM.png',
      images: [
        '../../assets/Elvenbankjes/exploratory sketches.png',
        '../../assets/Elvenbankjes/IMG_0166.JPG',
        '../../assets/Elvenbankjes/IMG_0281.JPG',
        '../../assets/Elvenbankjes/IMG_0301.JPG',
        '../../assets/Elvenbankjes/IMG_0492.JPG',
        '../../assets/Elvenbankjes/paperprots.jpg',
        '../../assets/Elvenbankjes/PXL_20240122_091239012.MP.jpg',
        '../../assets/Elvenbankjes/PXL_20240122_093138906.MP.jpg',
        '../../assets/Elvenbankjes/PXL_20240212_125613965.MP.jpg',
        '../../assets/Elvenbankjes/PXL_20240212_130756641.MP.jpg',
        '../../assets/Elvenbankjes/PXL_20240212_132824322.MP.jpg',
        '../../assets/Elvenbankjes/PXL_20240216_182236162.MP.jpg',
        '../../assets/Elvenbankjes/schetsen.jpg',
        '../../assets/Elvenbankjes/tekeningen.jpg',
        'FACT 1: Highlights unused urban potential.',
        'FACT 2: Inspired by natural ecosystems.',
      ],
      title: 'EX',
      line: 'Urban mycelium',
      content: {
        heading: 'Urban mycelium',
        subheading:
          'Sprouting light-streetart to highlight the unused potential across the city as a living ecosystem',
        date: 'April 2024',
        paragraphs: [
          '<div class="global-content">The city, one of my obsessions, is a complex, living ecosystem. Like any ecosystem, it consists of actors, processes, and cycles. Part of the ecosystem decomposes to make room for new growth—autopoiesis. This city, in a constant state of coupled self-generation and decay, <span class="violet">is not managed with this understanding</span>.</div>',
          '<div class="global-content">I introduce a new urban mycelium to the ecosystem. Through this street art project, I allow <span class="blue">light-emitting</span> "elven bankjes" to fruit. Just as fungi sprout fruiting bodies from their mycelium in areas where the city is decomposing, I aim to close the cycle of urban growth. In doing so, I highlight areas with high potential for new development and challenge the conventional cycle of urban development through a <span class="orange">naturalistic metaphor</span>.</div>',
        ],
      },
    },
    {
      image: '../../assets/Muni.png',
      images: [
        '../../assets/Muni.png',
        '../../assets/freelance/A9k7zgja_19y48ny_f98.png',
        '../../assets/freelance/A9qmt469_19y48n2_f98.png',
        '../../assets/freelance/A9zlb596_19y48nh_f98.png',
        '../../assets/freelance/IMG_8649.JPG',
        '../../assets/freelance/PXL_20231002_113658063.MP.jpg',
        '../../assets/freelance/PXL_20240515_184222454.MP.jpg',
        '../../assets/freelance/PXL_20240515_190437688.MP.jpg',
        '../../assets/freelance/PXL_20240515_200812132.NIGHT.jpg',
        'FACT 1: Developed 16 design concepts.',
        'FACT 2: Evaluated through UX surveys and workshops.',
      ],
      title: 'EX',
      line: 'Freelance',
      content: {
        heading: 'Uncommon Public Lighting consultancy',
        subheading:
          'Creatively converging municipalities and industry to develop novel public lighting concepts for yet unsolved characteristic cases',
        date: 'June 2023 – June 2024',
        paragraphs: [
          '<div class="global-content">As a <span class="red">freelance designer</span>, I joined the team at Lighthouse Tue, working to bring together all partners in the public lighting ecosystem in a user-centric way. Our goal was to develop new design solutions for archetypal public lighting challenges that remain unsolved.</div>',
          '<div class="global-content">For the municipalities of Amsterdam, Amstelveen, and Utrecht, we developed over 16 design concepts across two projects. These concepts <span class="blue">converged into prototypes</span> that were <span class="violet">evaluated through UX surveys</span>, light intensity analyses, and situated workshops with stakeholders and visitors. The workshops helped us understand the interconnections between the various actors involved.</div>',
        ],
      },
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

  overlayVisible: boolean = false;
  overlayImages: string[] = [];

  showOverlay(images: string[]) {
    this.overlayImages = this.shuffleArray(images); // Shuffle images before displaying
    this.overlayVisible = true;
  }

  hideOverlay() {
    this.overlayVisible = false;
    this.overlayImages = [];
  }

  shuffleArray(array: string[]): string[] {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  isImage(url: string): boolean {
    return /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(url); // Check for common image extensions
  }

  ngAfterViewInit() {}
}

export interface Project {
  title: string;
  image: string;
  images: string[];
  line: string;
  content: {
    heading: string;
    subheading?: string;
    date?: string;
    paragraphs: string[];
  };
}
