import { Building2, ChartColumn, Drone, HandCoins, Map, MapPinned } from 'lucide-react';
import { Icons } from '../components/Icons';

// Your personal content for the site: edit this file to update it.

export const personal = {
  name: 'Prabin Pathak',
  role: 'Backend & GIS Developer',
  // Shown next to the pulsing dot above your name.
  status: 'Currently at NAXA',
  intro:
    'A web developer based in Kathmandu, Nepal. Cloud survivor, DevOps-ish, and PM when cornered.',
  email: 'prabinoid@gmail.com',
  github: 'https://github.com/prabinoid',
  // The file in /public behind the "Download CV" button. Set to null to hide the button.
  // Keep it relative (no leading slash) so it also works when the site lives in a
  // subfolder, as it does on GitHub Pages (prabinoid.github.io/mysite/).
  cv: 'PrabinPathakCV.pdf',
};

export const socials = [
  {
    label: 'LinkedIn profile',
    href: 'https://www.linkedin.com/in/prabin-pathak-27723217b/',
    icon: Icons.linkedin,
  },
  { label: 'GitHub profile', href: 'https://github.com/prabinoid', icon: Icons.github },
  { label: 'Facebook profile', href: 'https://facebook.com/prabinoid', icon: Icons.facebook },
  { label: 'Send me an email', href: 'mailto:prabinoid@gmail.com', icon: Icons.gmail },
];

export const navLinks = [
  { name: 'Home', hash: '#home' },
  { name: 'About', hash: '#about' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Contact', hash: '#contact' },
];

export const about = {
  paragraphs: [
    'I’ve spent the last 5+ years building web and GIS backends that (mostly) don’t crash, while simultaneously surviving the emotional rollercoaster of DevOps and cloud engineering.',
    'I have a love-hate relationship with AWS, GCP, and all things that claim to be "serverless" but come with 17 config files. One minute I’m optimizing PostGIS queries like a wizard, next I’m in a dark corner whispering "why is this container restarting again?"',
    'Somewhere along the way I also became the team/project lead: working closely with clients, steering projects from kickoff to release and keeping the whole team in sync, all without giving up my developer badge. And when no one’s looking, I moonlight as a product manager, translating vague business ideas into JIRA tickets and pretending I enjoy meetings.',
  ],
  interests: [
    'Backend Development',
    'GIS',
    'DevOps',
    'Cloud',
    'Product Management',
    'Research',
  ],
};

export const technologies = [
  { name: 'Python', icon: Icons.python },
  { name: 'PostgreSQL', icon: Icons.postgresql },
  { name: 'PostGIS', icon: Icons.postgis },
  { name: 'MongoDB', icon: Icons.mongodb },
  { name: 'Docker', icon: Icons.docker },
  { name: 'Kubernetes', icon: Icons.kubernetes },
  { name: 'AWS', icon: Icons.aws },
  { name: 'Terraform', icon: Icons.terraform },
  { name: 'GitHub Actions', icon: Icons.githubActions },
  { name: 'Grafana', icon: Icons.grafana },
  { name: 'Linux', icon: Icons.linux },
  { name: 'Bash', icon: Icons.bash },
  { name: 'Git', icon: Icons.git },
];

export const alsoWorkedWith = [
  { name: 'GCP', icon: Icons.gcp },
  { name: 'ECS', icon: Icons.ecs },
  { name: 'RDS', icon: Icons.rds },
  { name: 'S3', icon: Icons.s3 },
  { name: 'Lambda', icon: Icons.lambda },
  { name: 'Helm', icon: Icons.helm },
  { name: 'Redis', icon: Icons.redis },
  { name: 'RabbitMQ', icon: Icons.rabbitmq },
  { name: 'Celery', icon: Icons.celery },
  { name: 'JavaScript', icon: Icons.javascript },
  { name: 'HTML5', icon: Icons.html },
  { name: 'CSS3', icon: Icons.css },
  { name: 'Figma', icon: Icons.figma },
  { name: 'Jira', icon: Icons.jira },
];

// Each project card:
// - `category`: 'outsourcing', 'ngo' or 'government', shown as a badge in the top-right corner.
// - `featured`: true highlights the card.
// - `description`: the short summary on the front.
// - `details`: the longer write-up on the back (shown when the card is clicked). Use a string
//   for a paragraph (separate paragraphs with a blank line), or an array of strings for bullets.
//   Write links as [text](https://example.com).
export const projects = [
  {
    title: 'Tasking Manager',
    category: 'outsourcing',
    featured: true,
    description:
      'A collaborative mapping tool that helps coordinate volunteers for mapping projects, one task at a time.',
    details: [
      'Lead maintainer of Tasking Manager since 2024, for the Humanitarian OpenStreetMap Team (HOT) × Naxa.',
      'Migrated the entire backend stack from Flask and psycopg2 to FastAPI and asyncpg, making it an efficient asynchronous application.',
      'Load-tested and benchmarked the new architecture by simulating real-world load with k6, Grafana and InfluxDB to show the performance of the migrated async application.',
      'Took part in moving the infrastructure from VMs to container-based services (ECS, RDS), with Terraform blue-green deployments for zero downtime.',
      'Set up the test suite for the asynchronous framework and refactored the unit and integration tests.',
      'Released a sandbox environment for Tasking Manager to production: a dashboard application launches private OpenStreetMap instances on Kubernetes with Helm, so contributions made in the sandbox go to our own instance instead of the live OpenStreetMap database.',
      "Currently building AI features for Tasking Manager in collaboration with fAIr, HOT's AI-assisted mapping platform, integrating its predictions to bring AI-assisted mapping into Tasking Manager.",
      'Delivered continuous feature development and fixes, big and small.',
      'Reviewed and supervised major features built by external contractors, such as Super Mapper, the Partners module and the MapSwipe integration.',
      'Supported the test team by deploying features and fixes to multiple test servers and origins.',
      'Engaged with the open source community, handling and addressing the queries it raised.',
      'Planned and executed the product roadmap.',
    ],
    icon: Map,
    tags: ['Open-Source', 'Mapping', 'HOTOSM'],
    links: {
      live: 'https://tasks.hotosm.org/',
      github: 'https://github.com/hotosm/tasking-manager/',
    },
  },
  {
    // TODO: add links (`live`, `github`).
    title: 'CultureMap App',
    category: 'outsourcing',
    description:
      'A map-first platform for Right Place Geo showcasing culture, rebuilt from a legacy system into a dynamic, cloud-native GIS.',
    details: [
      'A product of Australian client [Right Place Geo](https://www.rightplacegeo.com/) that showcases culture through a map-first approach, rebuilt from a legacy system.',
      'Overhauled the entire data model and database with dynamic tables, so organizations can define their own tables without writing new code.',
      'Migrated all the legacy data, along with existing Fulcrum field data, into the new tables.',
      "Prototyped CultureMap Field, an offline-first field data collection app to replace Fulcrum. It collects data without a connection and syncs it into the organization's tables in batches once the user is back online.",
      'Built raster processing and orthomosaic support, overlaying vector layers on top to tell stories, with GeoStyler for styling.',
      'Served map layers as PMTiles for fast raster and vector display, and provided analysis URLs as Cloud Optimized GeoTIFFs (COG) for raster and GeoParquet for vector data.',
      'Ran processing on AWS: Step Functions trigger the pipeline, Lambda converts the data, and the results are stored per organization in S3.',
      'Worked closely with QGIS for analysis, with the CultureMap app providing the analysis URLs for every dataset.',
      'Built a QGIS plugin for direct access to all datasets during analysis.',
      'Added a live-layer export: a QGIS layer definition (QLR) file, secured with a short-lived token, keeps the styling and loads the layer straight into QGIS.',
      'Added raw data downloads, and tabular datasets where uploaded CSVs are converted to Parquet for visualization in Power BI.',
    ],
    icon: MapPinned,
    tags: ['Culture', 'Mapping'],
    links: {},
  },
  {
    title: 'DFIMS - MOF',
    category: 'government',
    description:
      "Ministry of Finance, Nepal's IMS - Development Finance Information Management System (DFIMS) to enhance transparency and efficiency in managing development finance.",
    details: [
      "Nepal's Ministry of Finance foreign aid information management system.",
      'A composite application: Django and PostgreSQL maintain the complex relational data, while FastAPI and MongoDB power efficient visualizations with complex charts and filters.',
      'Pandas handles report manipulation and generation.',
      'Funding is visualized with breakdowns by sector, location, development partner and more, and the composite architecture keeps the data and reports fast to visualize.',
    ],
    icon: HandCoins,
    tags: ['Development-Finance', 'IMS', 'MoF-Nepal'],
    links: { live: 'https://dfims.mof.gov.np/' },
  },
  {
    title: 'DVS',
    category: 'ngo',
    description:
      'DVS Nepal is a dynamic data visualization platform developed for the British Embassy Kathmandu to provide a comprehensive, portfolio-level view of UK-funded development programs in Nepal, enhancing strategic decision-making through interactive dashboards and evidence-based insights.',
    details: [
      'An information management system for the British Embassy Kathmandu (BEK) to execute, manage and monitor projects and programs.',
      'Spatial queries and vector tiles for visualizing and filtering demographic data.',
      'A role-based management hierarchy.',
    ],
    icon: ChartColumn,
    tags: ['Data-Visualization', 'Dashboards', 'British-Embassy'],
    links: { live: 'https://dvsnepal.org/' },
  },
  {
    title: 'Building Exposure',
    category: 'government',
    description:
      "Developed as a part of BIPAD portal, The Exposure platform by Nepal's National Disaster Risk Reduction and Management Authority (NDRRMA) offers detailed data on building exposure to assess and mitigate disaster risks across the country.",
    details: [
      "A risk assessment module of Nepal's national BIPAD Portal, developed by the National Disaster Risk Reduction and Management Authority (NDRRMA).",
      'A Django web application for mapping, visualizing and analyzing buildings and facilities.',
      'Feature-level data collected with ODK for government buildings, schools and offices all over Nepal, for risk assessment and hazard analysis.',
      'PostGIS spatial queries for proximity and risk analysis, plus 3D building (polygon) visualization.',
      'Raster and vector layers for hazard analysis.',
    ],
    icon: Building2,
    tags: ['GIS', 'Disaster-Risk', 'NDRRMA'],
    links: { live: 'https://exposure.ndrrma.gov.np/' },
  },
  {
    title: 'Geonadir',
    category: 'outsourcing',
    description:
      'GeoNadir is a cloud-based drone mapping platform that enables environmental professionals to process, analyze, and share geospatial data collaboratively, facilitating ecosystem monitoring and informed decision-making.',
    details: [
      'A cloud-based drone mapping platform.',
      'Carried out development of the first phase of the product.',
      'Drone imagery upload with metadata validation.',
      'Orthophoto generation.',
      'Collaborative mapping over WebSockets using Django signals.',
      'Zapier (webhook) integration for Slack and data exports.',
    ],
    icon: Drone,
    tags: ['Drone-Mapping', 'Geospatial', 'Cloud'],
    links: { live: 'https://geonadir.com/' },
  },
];

// Most recent first. `description` is optional.
export const experiences = [
  {
    title: 'Sr. Backend Developer / Team Lead',
    location: 'Naxa Pvt. Ltd., Kathmandu',
    description:
      'Building web and GIS backends that (mostly) don’t crash, optimizing PostGIS queries, and keeping containers alive on AWS and GCP, with some product management on the side.',
    date: '2021 - Present',
  },
  {
    title: 'Masters in Computer Systems and Knowledge Engineering',
    location: 'IOE Pulchowk Campus',
    date: '2020 - 2022',
  },
  {
    title: 'BE Computer Engineering',
    location: 'Kathmandu Engineering College',
    date: '2014 - 2018',
  },
];
