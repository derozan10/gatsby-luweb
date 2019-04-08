const authors = {
  lucas: {
    name: 'Lucas Van Remoortere',
    additionalName: 'hugomn',
    address: 'Antwerp',
    birthDate: '1989-09-05',
    birthPlace: 'Deurne',
    brand: 'Lucas Van Remoortere, Front End Developer, ReactJs developer',
    email: 'lucas@luweb.be',
    familyName: 'Van Remoortere',
    gender: 'Male',
    givenName: 'Lucas',
    height: '...',
    homeLocation: 'Antwerp',
    jobTitle: 'Front End Developer',
    knows: '...',
    memberOf: '...',
    nationality: 'Belgian',
    owns: '...',
    parent: '...',
    performerIn: '...',
    publishingPrinciples: '...',
    relatedTo: '...',
    seeks: '...',
    sibling: '...',
    spouse: {
      additionalName: '...',
      name: '...',
      givenName: '...',
      familyName: '...',
      gender: '...',
      nationality: '...',
      homeLocation: '...',
    },
    telephone: '...',
    weight: '...',
    workLocation: '...',
    worksFor: '...',
    description: '...',
    disambiguatingDescription: '...',
    identifier: '...',
    image: 'https://www.lucasvanremoortere.com/static/avatar-57a49c43e127f881d2d29bbfa51bd3ff.jpg',
    sameAs: 'https://www.lucasvanremoortere.com',
    url: 'https://www.lucasvanremoortere.com',
  },
};

const getAuthor = id => {
  const author = {
    ...authors[id],
    '@type': 'Person',
  };
  return author || authors[0];
};

module.exports = {
  authors,
  getAuthor,
};
