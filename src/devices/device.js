const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    desktopS:"1200px",
    desktop: '1439px',
  }

  export const device = {
    mobileS: `(min-width: ${size.mobileS}) and (max-width: ${size.mobileM}) `,// 320px ile 375px arasi
    mobileM: `(min-width: ${size.mobileM}) and (max-width: ${size.mobileL})`,
    mobileL: `(min-width: ${size.mobileL}) and (max-width: ${size.tablet}) `,
    tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
    laptop: `(min-width: ${size.laptop}) and (max-width: ${size.desktopS})`,
    desktopS: `(min-width: ${size.desktopS}) and (max-width: ${size.desktop})`,
    desktop: `(min-width: ${size.desktop})`,
  
  };