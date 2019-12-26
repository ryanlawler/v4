module.exports = {
  siteTitle: 'Ryan Lawler | Software Engineer',
  siteDescription:
    'Ryan is a software engineer based out of the Silicon Valley, CA who specializes in engineering efficient and scalable software solutions.',
  siteKeywords:
    'Ryan Lawler, Ryan, Lawler, ryanlawler__, software engineer, front-end engineer, back-end engineer, full-stack engineer, web developer, javascript, react, berkeley',
  siteUrl: 'https://ryanlawler.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Ryan Lawler',
  location: 'Redwood City, CA',
  email: 'RyanDaneLawler@gmail.com',
  github: 'https://github.com/ryanlawler',
  twitterHandle: '@ryanlawler__',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ryanlawler',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ryanlawler1/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ryanlawler3',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ryanlawler__',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
