const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const esbuild = require('esbuild');
module.exports = function (eleventy) {

  // Run esbuild before anything else (using bundle for js)
  eleventy.on('eleventy.before', async () => {
    await esbuild.build({
      entryPoints:  ['./src/assets/scripts/index.js'],
      bundle: true,
      sourcemap: true,
      outfile: './public/assets/scripts/bundle.js',
      minify: true
    })
  })

  eleventy.addWatchTarget("./src/assets/styles/");
  eleventy.addWatchTarget("./src/assets/images/");
  eleventy.addWatchTarget("./src/assets/favicons/");
  eleventy.addWatchTarget("./src/assets/scripts/");
  eleventy.addWatchTarget("./src/data/");
  eleventy.addShortcode("year", () => {
    return `${new Date().getFullYear()}`
  });

  eleventy.addPassthroughCopy("./src/site.webmanifest");
  eleventy.addPassthroughCopy("./src/favicon.ico");
  eleventy.addPassthroughCopy("./src/assets/images");
  eleventy.addPassthroughCopy("./src/assets/favicons");
  eleventy.addPassthroughCopy("./tls/");
  eleventy.addPlugin(eleventySass);

  return {
    templateFormats: ['md', 'njk'],
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    },
  };

};
