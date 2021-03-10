module.exports = {
  inputDir: '',
  outputDir: '',
  fontTypes: ['eot', 'woff2', 'woff', 'ttf', 'svg'],
  assetTypes: ['ts', 'css', 'json', 'html', 'scss'],
  fontsUrl: './',
  fontHeight: 300,
  formatOptions: {
    svg: { metadata: { foo: 'bar' }, ascent: 0.5 },
    json: {
      indent: 2
    },
    ts: {
      types: ['constant', 'literalId', 'enum', 'literalKey'],
      singleQuotes: true
    }
  },
  tag: '',
  normalize: true,
  round: 100,
  descent: 45,
  templates: {
    scss: "src/assets/hbs/icons-scss.hbs",
    html: "src/assets/hbs/icons-html.hbs"
  },
  pathOptions: {}
};
