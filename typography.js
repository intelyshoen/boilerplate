import Typography from 'typography';

// typography.js 참고 테마설치도 가능함!
const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Montserret',
      styles: ['700'],
    },
    {
      name: 'Open Sans',
      styles: ['400'],
    },
  ],
  headerFontFamily: ['Montserret', 'helvetica-neue', 'sans-serif'],
  bodyFontFamily: ['opensans', 'sans-serif '],
});

typography.injectStyles();

export default typography;
