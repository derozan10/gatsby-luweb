const round = (x, n) => Math.round(x * (n * 10)) / (n * 10);
const scaleN = n => Math.round(1.2 ** n, 3);
const scale = n => `${scaleN(n)}rem`;

const colors = {
  base: '#333', // Black
  secondary: '#e9e9e9', // Medium Gray
  tertiary: '#f3f3f3', // Light Gray
  highlight: '#5b8bf7', // Light Blue
  white: '#FFFFFF',
  red: '#FF0000',
  darkGreen: '#038252',
  darkGray: '#1d2124',
  green: '#42C6B6',
  lightGreen: '#25f4db',
  black: '#33333',
  lightGray: '#757575',
  gray: '#666666',
  blue: '#3360a6',
  darkBlue: '#1f0eee',
  orange: '#da3434',
  yellow: '#fdd14d',
  darkYellow: '#fac421',
  blueGray: '#4d7a95',
  lightBlue: '#3b69a1',
  blackShades: ['#393E41'],
  primary: {
    one: '#050E61',
    two: '#0F1C8A',
    three: '#1A2693',
    four: '#2F3CAC',
    five: '#404CBF',
    six: '#6C77E0',
    seven: '#7985EC',
    eight: '#AFB7F8',
    nine: '#CFD3FC',
  },
  neutral: {
    one: '#F8F9FA',
    two: '#E1E7EC',
    three: '#D5DDE5',
    four: '#CCD4DB',
    five: '#AFBECC',
    six: '#929FB1',
    seven: '#6E7A89',
    eight: '#404B59',
    nine: '#212933',
  },
};

const theme = {
  sizes: {
    maxWidth: '1050px',
    maxWidthCentered: '40em',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
  blueGradient: 'linear-gradient(175deg,#006DA9,#00468F,#221C67)',
  greenGradient: 'linear-gradient(to right bottom,#42C6B6,#25f4db)',
  sharpShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  boxShadow: '0 8px 24px 0 rgba(0,0,0,.11)',
  scale,
  scaleN,
  colors,
  color: colors.black,
  bg: colors.white,
  padding: `4rem ${scaleN(1)}rem ${scaleN(4)}rem ${scaleN(0)}rem`,
  margin: '0 auto',
  maxWidth: '71.25rem',
  borderRadius: '0.2rem',
  lineHeight: 1.5,
  focus: {
    border: '0.4rem red solid',
  },
  p: {
    fontSize: scale(1.25),
    lineHeight: 1.58,
  },
  a: {
    color: colors.green,
    textDecoration: 'none',
    hover: {
      color: colors.darkGreen,
    },
  },
  header: {
    height: 64,
    title: {
      fontSize: scale(3),
      textAlign: 'left',
      padding: `${scale(0)} 0 0 0`,
      margin: `0 0 ${scale(6)} 0`,
      lineHeight: scaleN(0),
    },
    subTitle: {
      fontSize: `${scale(0)}`,
      padding: `${scale(-4)} 0 0 0`,
      margin: `${scale(-20)} 0 0 0`,
      lineHeight: scaleN(-1),
    },
    isHome: {
      title: {
        fontSize: scale(7),
        textAlign: 'center',
        padding: `${scale(2)} 0 0 0`,
        margin: `${scale(0)} 0 ${scale(4)} 0`,
        lineHeight: scaleN(0),
      },
      subTitle: {
        fontSize: `${scale(0)}`,
        padding: `${scale(-4)} 0 0 0`,
        margin: `0`,
        lineHeight: scaleN(-1),
      },
    },
  },
  menu: {
    mobile: {
      padding: `${scale(3)} ${scale(3)}`,
      opened: {
        bg: colors.blackShades[0],
      },
      closed: {
        bg: 'transparent',
      },
      label: {
        width: scale(3),
        height: scale(3),
        fontSize: scale(3.2),
      },
      a: {
        fontSize: scale(1.5),
        padding: `0 0 ${scale(1)}`,
        textAlign: 'left',
        color: colors.white,
        active: {
          color: colors.green,
        },
      },
      ul: {
        margin: `${scale(0.2)} 0 0 ${scale(0.2)}`,
      },
    },
    desktop: {
      padding: `${scale(2.2)} 0`,
      bg: 'transparent',
      a: {
        fontSize: scale(-0.5),
        fontWeight: 400,
        padding: `${scale(1)} ${scale(-0.4)}`,
        textAlign: 'left',
        color: colors.lightGray,
        active: {
          color: colors.darkGreen,
        },
        hover: {
          color: colors.darkGreen,
        },
      },
      ul: {
        margin: `0 ${scale(1)} 0 auto`,
      },
    },
  },
  socialLinks: {
    margin: `0`,
    padding: 0,
    a: {
      color: colors.black,
      fontSize: scale(2.5),
      margin: `0 0 ${scale(0)}`,
      padding: `0`,
      hover: {
        color: colors.green,
      },
    },
  },
  welcome: {
    marginTop: scale(6),
    marginBottom: scale(2),
  },
  h1: {
    fontSize: scale(5.8),
    margin: 0,
    padding: `${scale(8)} 0 0 0`,
  },
  h2: {
    fontSize: scale(3.8),
    margin: 0,
    padding: `${scale(8)} 0 0 0`,
  },
  h3: {
    fontSize: scale(3),
    margin: 0,
    padding: `${scale(6)} 0 0 0`,
  },
  h4: {
    fontSize: scale(2),
    margin: 0,
    padding: `${scale(6)} 0 0 0`,
  },
  h5: {
    fontSize: scale(1),
    margin: 0,
    padding: `${scale(4)} 0 0 0`,
  },
  h6: {
    fontSize: scale(1),
    margin: 0,
    padding: `${scale(4)} 0 0 0`,
  },
  blog: {
    author: {
      fontSize: scale(-0.7),
      lineHeight: scaleN(2),
      time: {
        color: colors.lightGray,
      },
    },
    list: {
      margin: `0 0 ${scale(4)} 0`,
      header: {
        fontSize: scale(6),
        padding: `${scale(1)} 0 0 0`,
        margin: `${scale(4)} 0 0 0`,
      },
      ul: {
        padding: `0`,
        margin: `0`,
      },
      item: {
        border: '1px solid rgba(0,0,0,.125);',
        padding: scale(1.2),
        hover: {
          backgroundColor: colors.blackShades[0],
        },
        title: {
          fontSize: scale(1.2),
          lineHeight: scaleN(1),
          margin: `0 0 ${scale(-0.8)}`,
          color: colors.gray,
          hover: {
            color: colors.darkGray,
          },
        },
        text: {
          fontSize: scale(-0.3),
          color: colors.lightGray,
          lineHeight: scaleN(2),
          padding: `0`,
          margin: `0`,
        },
      },
    },
    post: {
      padding: '20px',
      margin: `${scale(4)} auto 0`,
      maxWidth: '46.25rem',
      header: {
        fontSize: '2.6rem',
        margin: `0 0 ${scale(4)}`,
      },
      content: {
        code: {
          color: colors.white,
          fontSize: scale(1),
          borderRadius: '0.2rem',
          margin: `0`,
          padding: `${scale(-8)} ${scale(-4)}`,
          backgroundColor: colors.gray,
        },
        highlight: {
          backgroundColor: null,
          borderRadius: '0.2rem',
          margin: `${scale(0)} -50rem`,
          padding: `0 50rem`,
          code: {
            color: colors.white,
          },
        },
        a: {
          color: colors.green,
        },
        p: {
          fontSize: scale(1),
          margin: 0,
          padding: `2rem 0 0 0`,
        },
        ul: {
          fontSize: scale(1),
          margin: 0,
          padding: `${scale(0)}`,
        },
      },
    },
  },
  page: {
    padding: '20px',
    margin: `${scale(0)} auto ${scale(4)}`,
    maxWidth: '60rem',
    header: {
      fontSize: '2.4rem',
      margin: `0 0 ${scale(2)}`,
    },
    content: {
      p: {
        fontSize: scale(1),
        margin: 0,
        padding: `2rem 0 0 0`,
      },
    },
  },
  i18n: {
    selectLanguage: {
      li: {
        margin: `0 0 0 5px`,
        padding: `${scale(-8)} ${scale(-2)} ${scale(-5)} ${scale(-2)}`,
        fontSize: scale(3),
        borderRadius: '0.2rem',
        selected: {
          backgroundColor: colors.lightGreen,
        },
      },
    },
  },
};

export default theme;
