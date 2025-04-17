import {
  backend,
  devops,
  research,
  product,
  javascript,
  html,
  css,
  git,
  figma,
  docker,
  postgresql,
  nyeusi,
  naxa,
  tu,
  kec,
  tm,
  dfims,
  dvs,
  bipad,
  python,
  aws,
  postgis,
  mongo,
  terraform,
  kubernetes
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [

  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'DevOps',
    icon: devops,
  },
  {
    title: 'Product Management',
    icon: product,
  },
  {
    title: 'Researcher',
    icon: research,
  },
];

const technologies = [

  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'AWS Services',
    icon: aws,
  },
  {
    name: 'Terraform',
    icon: terraform,
  },
  {
    name: 'MongoDB',
    icon: mongo,
  },
  {
    name: 'Postgis',
    icon: postgis,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Kubernetes',
    icon: kubernetes,
  },
  {
    name: 'figma',
    icon: figma,
  },

];

const experiences = [
  {
    title: 'BE Computer Engineering',
    company_name: 'Kathmandu Engineering College',
    icon: kec,
    iconBg: '#333333',
    date: '2014 - 2018',
  },
  {
    title: 'Masters in Computer Systems and Knowledge Engineering',
    company_name: 'IOE Pulchowk Campus',
    icon: tu,
    iconBg: '#333333',
    date: '2020 - 2022',
  },
  {
    title: 'Backend Developer',
    company_name: 'Naxa Pvt Ltd',
    icon: naxa,
    iconBg: '#333333',
    date: '2021 - Present',
  },
];

const projects = [

  {
    id: 'project-1',
    name: 'DFIMS - MOF',
    description:
      "Ministry of Finance, Nepal's IMS - Development Finance Information Management System (DFIMS) to enhance transparency and efficiency in managing development finance.",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: dfims,
    repo: 'https://github.com/prabinoid',
    demo: 'https://dfims.mof.gov.np/',
  },
      
  {
    id: 'project-2',
    name: 'Tasking Manager',
    description: 'A collaborative mapping tool that helps coordinate volunteers for mapping projects, one task at a time.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: tm,
    repo: 'https://github.com/hotosm/tasking-manager/',
    demo: 'https://tasks.hotosm.org/',
  },

  {
    id: 'project-3',
    name: 'DVS',
    description: `DVS Nepal is a dynamic data visualization platform developed for the British Embassy Kathmandu to provide a comprehensive, portfolio-level view of UK-funded development programs in Nepal, enhancing strategic decision-making through interactive dashboards and evidence-based insights.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: dvs,
    repo: 'https://github.com/prabinoid',
    demo: 'https://dvsnepal.org/',
  },

  {
    id: 'project-4',
    name: 'Building Exposure',
    description: "Developed as a part of BIPAD portal, The Exposure platform by Nepal's National Disaster Risk Reduction and Management Authority (NDRRMA) offers detailed data on building exposure to assess and mitigate disaster risks across the country.",
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: bipad,
    repo: 'https://github.com/prabinoid',
    demo: 'https://exposure.ndrrma.gov.np/',
  },

  {
    id: 'project-5',
    name: 'Geonadir',
    description:
      '​GeoNadir is a cloud-based drone mapping platform that enables environmental professionals to process, analyze, and share geospatial data collaboratively, facilitating ecosystem monitoring and informed decision-making.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/prabinoid',
    demo: 'https://geonadir.com/',
  },
];

export { services, technologies, experiences, projects };
