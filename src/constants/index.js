import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "關於",
  },
  {
    id: "work",
    title: "作品",
  },
  {
    id: "contact",
    title: "聯絡我",
  },
];

const services = [
  {
    title: "網頁開發者",
    icon: web,
  },
  {
    title: "React Native 開發者",
    icon: mobile,
  },
  {
    title: "後端開發者",
    icon: backend,
  },
  {
    title: "內容創作者",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js 開發者",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2020年 3月 - 2021年 4月",
    points: [
      "使用 React.js 和其他相關技術開發和維護網頁應用程式。",
      "與包括設計師、產品經理和其他開發者在內的跨部門團隊合作，創造高品質的產品。",
      "實作響應式設計並確保跨瀏覽器的相容性。",
      "參與程式碼審查並為其他開發者提供建設性的回饋。",
    ],
  },
  {
    title: "React Native 開發者",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2021年 1月 - 2022年 2月",
    points: [
      "使用 React.js 和其他相關技術開發和維護網頁應用程式。",
      "與包括設計師、產品經理和其他開發者在內的跨部門團隊合作，創造高品質的產品。",
      "實作響應式設計並確保跨瀏覽器的相容性。",
      "參與程式碼審查並為其他開發者提供建設性的回饋。",
    ],
  },
  {
    title: "網頁開發者",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "2022年 1月 - 2023年 1月",
    points: [
      "使用 React.js 和其他相關技術開發和維護網頁應用程式。",
      "與包括設計師、產品經理和其他開發者在內的跨部門團隊合作，創造高品質的產品。",
      "實作響應式設計並確保跨瀏覽器的相容性。",
      "參與程式碼審查並為其他開發者提供建設性的回饋。",
    ],
  },
  {
    title: "全端開發者",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023年 1月 - 至今",
    points: [
      "使用 React.js 和其他相關技術開發和維護網頁應用程式。",
      "與包括設計師、產品經理和其他開發者在內的跨部門團隊合作，創造高品質的產品。",
      "實作響應式設計並確保跨瀏覽器的相容性。",
      "參與程式碼審查並為其他開發者提供建設性的回饋。",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "我原以為不可能做出和我們產品一樣美觀的網站，但 James 證明我錯了。",
    name: "Sara Lee",
    designation: "財務長",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "我從未見過像 James 這樣真正關心客戶成功的網頁開發者。",
    name: "Chris Brown",
    designation: "營運長",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "在 James 優化我們的網站後，我們的流量增加了 50%。我們對他感激不盡！",
    name: "Lisa Wang",
    designation: "技術長",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "汽車租賃",
    description:
      "這是一個基於網頁的平台，允許使用者搜尋、預訂和管理來自不同供應商的汽車租賃，為交通需求提供方便高效的解決方案。",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "一個網頁應用程式，讓使用者可以搜尋職缺、檢視職位的預估薪資範圍，並根據目前所在位置尋找可用的工作。",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "旅遊指南",
    description:
      "一個綜合性的旅遊預訂平台，允許使用者預訂航班、飯店和租車，並提供熱門目的地的精選推薦。",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
