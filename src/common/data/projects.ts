export interface InterfaceAuthor {
  name: string;
  picture: string | null;
  url: string;
}

export interface InterfaceProject {
  author: InterfaceAuthor;
  description: string;
  featured: string;
  repositoryUrl: string;
  tags: string[];
  title: string;
  url: string | null;
}

const projects: InterfaceProject[] = [
  {
    author: {
      name: 'Bagus Sulistyo',
      picture: null,
      url: 'https://github.com/3ndung',
    },
    description: 'App that helps fishermans predict weather and locate where they can get more fishes.',
    featured: 'https://images.unsplash.com/photo-1507124441518-c9584b9dc520?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9af6af56b0f5bb3a267ee4b80f1346a8&auto=format&fit=crop&w=1050&q=80',
    repositoryUrl: 'https://github.com/3ndung/NgeLaut',
    tags: ['mobile-app', 'react-native'],
    title: 'NgeLautYuk',
    url: null,
  },
  {
    author: {
      name: 'Erwin Siswanto',
      picture: null,
      url: 'https://github.com/erwinsiswanto',
    },
    description: 'Get updates of the latest movies and discover more.',
    featured: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2a1fe3e63c97f40568e673fae29af4aa&auto=format&fit=crop&w=1050&q=80',
    repositoryUrl: 'https://github.com/erwinsiswanto/moviedb',
    tags: ['mobile-app', 'react-native'],
    title: 'MovieDB',
    url: null,
  },
  {
    author: {
      name: 'Hanifa Fissalma',
      picture: null,
      url: 'https://gitlab.com/hanifa_fissalma',
    },
    description: 'Discover and order your favorites food right in the app.',
    featured: 'https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-0.3.5&s=4587c9bbef01f57cebad883418e30a63&auto=format&fit=crop&w=1038&q=80',
    repositoryUrl: 'https://gitlab.com/hanifa_fissalma/final-project-reactjs',
    tags: ['web-app', 'react'],
    title: 'BeliMakan',
    url: 'https://gifted-fermi-0a5870.netlify.com/',
  }
]

export default projects