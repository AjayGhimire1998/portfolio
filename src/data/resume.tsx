import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Java } from "@/components/ui/svgs/java";

// Source of truth for this content: reference/profile.md (gitignored).
// Never name the vendor of the reporting platform used at Camco — refer to it
// as a "Reporting Software System".

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  links: readonly { title: string; icon: React.ReactNode; href: string }[];
};

type Skill = {
  name: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type Project = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links: readonly { type: string; href: string; icon: React.ReactNode }[];
  image?: string;
  video?: string;
  logo?: string;
};

export const DATA = {
  name: "Ajay Ghimire",
  initials: "AG",
  url: "https://www.ajayghimire.com",
  location: "Karratha, Western Australia",
  locationLink: "https://www.google.com/maps/place/Karratha+WA",
  description:
    "Software Engineer turned Technical Systems Analyst, bridging software development and heavy mechanical engineering operations.",
  summary: `I'm a Software Engineer turned Technical Systems Analyst, working where software meets heavy engineering. Today I manage refurbishment projects for heavy mining equipment at [Camco Engineering](/#work) and lead the digitisation of workshop reporting — reading requirements like an analyst, and testing, troubleshooting and giving vendors clear technical feedback like an engineer.

My background is software development. I co-founded [YashiTech Solutions](/#work), where I led projects including the [Chhittoo](https://chhittoo.app/) app ecosystem and the [HTML to Figma](https://chromewebstore.google.com/detail/html-to-figma-%E2%80%93-capture-a/jnpbaphmgkmmofnbbhmcbpaodpeeojgf) browser extension, after completing Academy Xi's software engineering bootcamp.`,
  avatarUrl: "/ajay.jpg",
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript" },
    { name: "React", icon: ReactLight },
    { name: "SQL" },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Java", icon: Java },
    { name: "Spring Boot" },
    { name: "Python", icon: Python },
    { name: "Ruby on Rails" },
    { name: "Capacitor" },
    { name: "Firebase" },
    { name: "AWS" },
    { name: "Stripe" },
    { name: "Jest / Vitest / JUnit" },
    { name: "Systems Analysis" },
    { name: "Requirements Gathering" },
    { name: "Process Improvement" },
    { name: "Change Management" },
    { name: "Project Management" },
  ] as Skill[],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ajayghimire009@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AjayGhimire1998",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ajayghimire",
        icon: Icons.linkedin,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@ajayghimire1998",
        icon: Icons.medium,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:ajayghimire009@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Camco Engineering",
      href: "",
      badges: [],
      location: "Karratha, WA",
      title: "Technical Systems Analyst",
      logoUrl: "/camco.png",
      start: "Jun 2025",
      end: "Present",
      description:
        "Led the integration of a Reporting Software System for digital job capture and reporting, replacing paper-based workshop reports. Assessed the software against business needs and recommended features and improvements to the vendor, and used a development background to evaluate integrations, data structures and fit. Trained and onboarded other branches — 200+ users across 4 workshops. Manage refurbishment projects for heavy mining equipment (conveyor pulleys, fixed plant) from quoting, parts and scheduling through to dispatch, completion reporting and MDR builds. Impact: 50% faster report turnaround, 20+ hrs/week of admin removed, 800+ reports completed digitally.",
    },
    {
      company: "YashiTech Solutions",
      href: "https://yashitechsolutions.com",
      badges: [],
      location: "Australia",
      title: "Software Engineer / Co-Founder",
      logoUrl: "/yashitech.png",
      start: "Mar 2023",
      end: "Jul 2026",
      description:
        "Co-founded an early-stage start-up building web solutions for small enterprises and SaaS products. Led the Chhittoo app ecosystem (Chhittoo, Chhittoo Riders and Chhittoo Vendors) and built HTML to Figma, a Chrome extension that turns web pages into editable Figma designs. Designed a Rails API with PostgreSQL and Stripe, deployed on Render and AWS S3, and built embeddable assistive tech that improves web accessibility on 3+ websites.",
    },
    {
      company: "Jimoto Foods",
      href: "",
      badges: [],
      location: "Sydney, NSW",
      title: "Web Developer",
      logoUrl: "/jimoto.png",
      start: "Apr 2024",
      end: "May 2024",
      description:
        "Enhanced and maintained the Shopify e-commerce platform, integrating features to improve user experience and streamline sales, and resolved website performance issues. Collaborated with the founder to align digital strategy with business goals.",
    },
    {
      company: "Cho Cho San",
      href: "",
      badges: [],
      location: "Sydney, NSW",
      title: "Chef De Partie",
      logoUrl: "/chochosan.png",
      start: "Jan 2018",
      end: "Jan 2022",
      description:
        "Prepared Japanese dishes alongside 6+ culinary masters at a popular Japanese restaurant (4.3/5 from 1.4k Google reviews, $100k+ weekly sales), serving 180+ guests a day. Managed rosters and introduced a one-week intensive training program for new recruits, and upheld standards that kept a 4-star NSW Food Authority rating for four years.",
    },
  ],
  earlierExperience:
    "Also: team leadership and operations roles at Woolworths Group and McDonald's (2017 – 2025).",
  education: [
    {
      school: "Academy Xi",
      href: "https://www.courses.com.au/provider/academy-xi",
      degree: "Full Stack Software Engineering Transform",
      logoUrl: "/academyxi.png",
      start: "2022",
      end: "2022",
    },
    {
      school: "Victorian Institute of Technology",
      href: "https://www.vit.edu.au",
      degree: "Bachelor's Degree, Information Technology and Systems",
      logoUrl: "/vit.png",
      start: "2018",
      end: "2021",
    },
  ],
  certifications: [
    "Ruby Course",
    "Responsive Web Design",
    "Efficient Input/Output using Java IO, NIO and NIO2",
    "Java from Basic to Advanced",
    "Low Level Design (LLD) from Basics to Advanced",
  ],
  projects: [
    // {
    //   title: "Paper to Platform",
    //   href: "",
    //   dates: "Camco Engineering · 2025 – Present",
    //   active: true,
    //   description:
    //     "Digitised workshop reporting with a Reporting Software System — tablet-based data capture, live job tracking and automated reports and MDRs. Rolled out across **4 workshops and 200+ users**, cutting report turnaround by **50%** and removing **20+ hrs/week** of manual paperwork, with **800+ reports** completed digitally.",
    //   technologies: [
    //     "Systems Analysis",
    //     "Requirements Gathering",
    //     "Change Management",
    //     "Digital Transformation",
    //   ],
    //   links: [],
    //   logo: "/camco.png",
    // },

    {
      title: "Chhittoo",
      href: "https://chhittoo.app/",
      dates: "YashiTech Solutions",
      active: true,
      description:
        "A service app built for Dharan — 24-hour grocery delivery, vehicle blue-book renewal and home salon services — with companion apps for riders and vendors.",
      technologies: ["TypeScript", "Capacitor", "Firebase", "AWS"],
      links: [
        {
          type: "Website",
          href: "https://chhittoo.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/chhittoo.webp",
      logo: "/chhittoo.png",
    },
    {
      title: "HTML to Figma",
      href: "https://chromewebstore.google.com/detail/html-to-figma-%E2%80%93-capture-a/jnpbaphmgkmmofnbbhmcbpaodpeeojgf",
      dates: "YashiTech Solutions",
      active: true,
      description:
        "A Chrome extension that captures any web page as editable Figma layers with Auto Layout — device presets, multi-size capture and pages behind a login, running in the browser without uploading the page. **2,000+ users** on the Chrome Web Store.",
      technologies: ["TypeScript", "Stripe", "Firebase"],
      links: [
        {
          type: "Chrome Web Store",
          href: "https://chromewebstore.google.com/detail/html-to-figma-%E2%80%93-capture-a/jnpbaphmgkmmofnbbhmcbpaodpeeojgf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/html-to-figma.webp",
      logo: "/yashitech.png",
    },
    {
      title: "With Love From Home",
      href: "https://with-love-from-home.netlify.app/",
      dates: "",
      active: false,
      description:
        "A full-stack e-commerce app where users register as a store to sell products or as a customer to browse, add to cart and check out, with email notifications for both.",
      technologies: ["React", "Ruby on Rails"],
      links: [
        {
          type: "Website",
          href: "https://with-love-from-home.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AjayGhimire1998/with-love-from-home-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/with-love-from-home.webp",
    },
    {
      title: "Memebook",
      href: "https://ajayghimire1998.github.io/memebook/",
      dates: "",
      active: false,
      description:
        "A social app for viewing, uploading and creating memes, using React Hooks and Context, the Jokes, Reddit and ImgFlip APIs, and Firebase for authentication and storage.",
      technologies: ["React", "Firebase"],
      links: [
        {
          type: "Website",
          href: "https://ajayghimire1998.github.io/memebook/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AjayGhimire1998/memebook",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/memebook.webp",
    },
    {
      title: "Cryptomania",
      href: "https://github.com/AjayGhimire1998/cryptomania",
      dates: "",
      active: false,
      description:
        "A Ruby CLI simulation game, published as a gem: invest a starting balance in your favourite cryptocurrencies on a past date, read about the coins, then check out on a later date to see whether you doubled your money. Uses Nokogiri to scrape coin details.",
      technologies: ["Ruby", "Nokogiri"],
      links: [
        {
          type: "RubyGems",
          href: "https://rubygems.org/search?query=cryptomania",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AjayGhimire1998/cryptomania",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/cryptomania.webp",
    },
  ] as Project[],
  writing: [
    {
      title: "The ‘final’ Keyword in Java",
      publishedAt: "2023-01-23",
      href: "https://medium.com/@ajayghimire1998/the-final-keyword-in-java-2471f9b63cb6",
    },
    {
      title: "“Array” Data Structure: An Illustrative Introduction",
      publishedAt: "2023-01-23",
      href: "https://medium.com/@ajayghimire1998/array-data-structure-an-illustrative-introduction-a4f5ca8cce46",
    },
    {
      title: "Cryptomania – a Ruby CLI Application",
      publishedAt: "2022-06-27",
      href: "https://medium.com/@ajayghimire1998/cryptomania-a-ruby-cli-application-f959f2508606",
    },
    {
      title: "Was Creating a Meme App for React’s Final Project Worth It?",
      publishedAt: "2022-04-20",
      href: "https://medium.com/@ajayghimire1998/was-creating-a-meme-app-for-reacts-final-project-worth-it-f1859731ff6f",
    },
    {
      title: "Movie-Search JS App Using OMDB API",
      publishedAt: "2022-03-16",
      href: "https://medium.com/@ajayghimire1998/movie-search-js-app-using-omdb-api-93033f0898a6",
    },
    {
      title: "I Have Created My First Portfolio Website",
      publishedAt: "2022-02-25",
      href: "https://medium.com/@ajayghimire1998/i-have-created-my-first-portfolio-website-4d0da88f4145",
    },
    {
      title: "Why Did I Decide to Study Software Engineering?",
      publishedAt: "2022-02-19",
      href: "https://medium.com/@ajayghimire1998/why-did-i-decide-to-study-software-engineering-8bf843bdfb10",
    },
  ],
  hackathons: [] as Hackathon[],
} as const;
