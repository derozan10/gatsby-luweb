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
  menu: [
    { label: 'home', slug: '/' },
    { label: 'blog', slug: '/blog/' },
    { label: 'about', slug: '/about/' },
    { label: 'contact', slug: '/contact/' },
    { label: 'call', link: 'http://call.hugomagalhaes.com/' },
  ],
  languages,
  author: {
    name: 'Lucas Van Remoortere',
    bio: 'Front End Developer. React, and Javascript enthusiast. Antwerp, Belgium',
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
      country: 'de',
      link: 'tel:+32 496 061042',
    },
  ],
};
