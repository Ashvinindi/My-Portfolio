import hallsyncImage from '../assets/projects/hallsync.JPG'
import bearistaImage from '../assets/projects/bearista.svg'
import hospitalImage from '../assets/projects/hospital.svg'

export const featuredProject = {
  slug: 'hallsync',
  title: 'HallSync',
  subtitle: 'University Hall Management System',
  image: hallsyncImage,
  alt: 'HallSync mobile app screenshot',
  summary:
    'A university hall management mobile app built to help students and lecturers access hall information, manage authentication, and handle location-aware workflows more efficiently.',
  problem:
    'University hall processes often depend on scattered information and manual coordination, which makes access control, hall communication, and location details harder to manage.',
  solution:
    'HallSync centralizes the experience in a Flutter app with authentication, hall management, password management, and map-based location support.',
  contribution:
    'I focused on the product flow, application structure, and the way the system connects user needs with the right technical components.',
  tech: ['Flutter', 'MongoDB', 'Auth0', 'Google Maps API'],
  features: [
    'Student and lecturer authentication',
    'Hall management workflows',
    'Password management',
    'Location and map functionality',
    'University hall information access',
  ],
  live: null,
  github: null,
  caseStudy: '/hallsync',
  learnings:
    'The project strengthened my understanding of turning a real operational problem into a structured mobile solution with clearly separated responsibilities.',
}

export const projects = [
  {
    slug: 'bearista-shop',
    title: 'Bearista Shop',
    subtitle: 'Coffee shop website',
    image: bearistaImage,
    alt: 'Bearista Shop website illustration',
    summary:
      'A static coffee shop website with menu and contact sections, built to present information clearly and create a polished first impression for a small business.',
    problem:
      'Small business websites often need to communicate menu items, opening details, and contact information quickly without visual clutter.',
    solution:
      'I designed a simple and responsive landing experience that keeps the focus on the menu, brand presentation, and contact clarity.',
    contribution:
      'I handled the structure, layout, and visual consistency to keep the site lightweight and easy to navigate.',
    tech: ['HTML', 'CSS'],
    features: ['Menu presentation', 'Contact section', 'Responsive layout', 'Clean brand-focused structure'],
    live: null,
    github: null,
    caseStudy: null,
    learnings:
      'The project helped me refine layout discipline, spacing, and content hierarchy for a business-facing website.',
  },
  {
    slug: 'hospital-management-system',
    title: 'Hospital Management System',
    subtitle: 'Java and MySQL console application',
    image: hospitalImage,
    alt: 'Hospital management system illustration',
    summary:
      'A Java and MySQL-based console application for managing patients, doctors, and appointments with database integration.',
    problem:
      'Basic hospital operations can become difficult to track when patient, doctor, and appointment data lives in separate places.',
    solution:
      'I built a database-backed console system that supports core administrative workflows in a structured and reliable way.',
    contribution:
      'I worked on the application logic, database integration, and the main flows for adding and viewing records.',
    tech: ['Java', 'MySQL'],
    features: ['Add patients', 'View doctors', 'Book appointments', 'Database integration'],
    live: null,
    github: null,
    caseStudy: null,
    learnings:
      'The project improved my understanding of CRUD flows, relational data, and how to model a practical system around operational needs.',
  },
]
