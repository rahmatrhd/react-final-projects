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
      name: 'Franciscus Xaverius Novi Adhi Nugroho',
      picture: null,
      url: 'https://github.com/francisadhi',
    },
    description: 'You can get access to The Bible anytime and everywhere.',
    featured: 'https://images.unsplash.com/photo-1536704231234-beca9772ca68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82c2d17822215dc74cdb7ff5a7a16aad&auto=format&fit=crop&w=967&q=80',
    repositoryUrl: 'https://github.com/francisadhi/Elkitab',
    tags: ['web-app', 'react'],
    title: 'Elkitab',
    url: 'https://wonderful-clarke-c08e67.netlify.com/',
  },
  {
    author: {
      name: 'Gunawan Susanto',
      picture: null,
      url: 'https://github.com/monyet89',
    },
    description: 'Before you get exhausted, Order a cup of coffee from this app',
    featured: 'https://images.unsplash.com/photo-1499083097717-a156f85f0516?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0857182ce680e944304c9980ec175b10&auto=format&fit=crop&w=1502&q=80',
    repositoryUrl: 'https://github.com/monyet89/seller-side-app',
    tags: ['web-app', 'react'],
    title: 'Sales Stash',
    url: null,
  },
  {
    author: {
      name: 'Hadyan Yusuf',
      picture: null,
      url: 'https://github.com/ianyusuf',
    },
    description: 'Can\'t remember the Star Wars\'s characters? Find the character you\'re looking for here.',
    featured: 'https://images.unsplash.com/photo-1459876947801-8879713c9b47?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=980d25099d8c902a656e9dfbdef91fb1&auto=format&fit=crop&w=1050&q=80',
    repositoryUrl: 'https://github.com/ianyusuf/starwars',
    tags: ['web-app', 'react'],
    title: 'Starwars',
    url: 'https://hadyan-yusuf-starwars.netlify.com',
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
  },
  {
    author: {
      name: 'Hendro Widianto',
      picture: null,
      url: 'https://github.com/hendrowidianto/',
    },
    description: 'Just in case you want to ride Star Wars\'s vehicle to go to work',
    featured: 'https://images.unsplash.com/photo-1531061682486-1fa5a7390f74?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d09309b9fbc10a18e9587ca5715fff72&auto=format&fit=crop&w=1047&q=80',
    repositoryUrl: 'https://github.com/hendrowidianto/starwars-vehicles',
    tags: ['web-app', 'react'],
    title: 'Starwars Vehicles',
    url: 'https://ecstatic-archimedes-8432e3.netlify.com/',
  },
  {
    author: {
      name: 'Ishak',
      picture: null,
      url: 'https://github.com/iboy15',
    },
    description: 'You don\'t have to look for foods, they are all already around you.',
    featured: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43d2818abd122c626a47a12ae53ca481&auto=format&fit=crop&w=1050&q=80',
    repositoryUrl: 'https://github.com/iboy15/fooday',
    tags: ['mobile-app', 'react-native'],
    title: 'Foods AY (Around You)',
    url: null,
  },
  {
    author: {
      name: 'Julius Sutrisno',
      picture: null,
      url: 'https://github.com/julius3788',
    },
    description: 'Make your recruitment process done faster by doing it all in one place.',
    featured: 'https://images.unsplash.com/photo-1525944001263-ba59a9974f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ffca5f3ccc44b13d3b036035a6de1d5e&auto=format&fit=crop&w=1114&q=80',
    repositoryUrl: 'https://github.com/julius3788/ZRecruitment',
    tags: ['web-app', 'react'],
    title: 'ZRecruitment',
    url: 'https://julius3788-zrecruitment.netlify.com/',
  },
  {
    author: {
      name: 'Mikael Efendi',
      picture: null,
      url: 'https://github.com/fendimikael44',
    },
    description: 'Time is Knowledge! Don\'t waste your time.',
    featured: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5286d12e1a76e790bd5c8f1a2640aa7e&auto=format&fit=crop&w=1050&q=80',
    repositoryUrl: 'https://github.com/fendimikael44/Timer',
    tags: ['mobile-app', 'react-native'],
    title: 'Timer',
    url: null,
  },
  {
    author: {
      name: 'Stephanus Nicolaus',
      picture: null,
      url: 'https://github.com/stephanusnicolaus/',
    },
    description: 'Save your weekend! Done your client\'s request right from your smartphone.',
    featured: 'https://images.unsplash.com/photo-1467007849282-42dad96c2312?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=39827049561e1d87880cc750df92e2b4&auto=format&fit=crop&w=1055&q=80',
    repositoryUrl: 'https://github.com/stephanusnicolaus/iRis_Mobile',
    tags: ['web-app', 'react'],
    title: 'IRis',
    url: null,
  },
  {
    author: {
      name: 'Yosef Hadi',
      picture: null,
      url: 'https://github.com/ochep',
    },
    description: 'Get to know more about me and my stuff!',
    featured: 'https://images.unsplash.com/photo-1519377483941-d4c7ea7ae521?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0797cf41f9f4fd2c1ad83f46e95676f2&auto=format&fit=crop&w=844&q=80',
    repositoryUrl: 'https://github.com/ochep/FinalProject',
    tags: ['web-app', 'react'],
    title: 'My Portfolio',
    url: 'https://fervent-perlman-9e637d.netlify.com',
  }
]

export default projects