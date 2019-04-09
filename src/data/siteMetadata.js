const languages = require('./languages');

module.exports = {
  siteUrl: 'https://www.luweb.be',
  siteTitle: 'Luweb',
  siteTitleAlt: 'Luweb',
  description: 'Web design & development Antwerp. We build your online brand',
  siteLogo: '/luweb-logo-blueGradient-small.png', // Logo used for SEO, RSS, and App manifest
  backgroundColor: '#fff', // Used for Offline Manifest
  themeColor: '#3950D3', // Used for Offline Manifest
  copyright: 'Copyright © 2019 Luweb', // Copyright string for the RSS feed
  sourceCodeLink: 'https://github.com/derozan10/gatsby-luweb',
  // disqusShortname: 'luweb-1'
  menu: [
    { label: 'home', slug: '/' },
    { label: 'about', slug: 'about' },
    {
      label: 'services',
      slug: 'services',
      subDirectories: [
        {
          label: 'website',
          slug: 'webdesign-development',
        },
        {
          label: 'seo',
          slug: 'seo',
        },
        {
          label: 'optimization',
          slug: 'website-optimization',
        },
        {
          label: 'online marketing',
          slug: 'online-marketing',
        },
      ],
    },
    { label: 'contact', slug: 'contact' },
    { label: 'blog', slug: 'blog' },
  ],
  languages,
  author: {
    name: 'Lucas Van Remoortere',
    bio: 'Front End Developer. React, and Javascript enthousiast. Antwerp, Belgium',
    homeCity: 'Antwerp',
    email: 'lucas@luweb.be',
    twitter: 'LuWebDev',
    defaultLink: 'https://www.lucasvanremoortere.com',
  },
  contact: [
    {
      type: 'email',
      value: 'info@luweb.be',
      link: 'mailto:info@luweb.be',
    },
    {
      type: 'phone',
      value: '+32 496 061042',
      country: 'be',
      link: 'tel:+32 496 061042',
    },
  ],
};
