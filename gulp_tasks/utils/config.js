// Paths relative to 'gulpfile.js'
var sourceRootDir = './app/',
    distRootDir = './build/';

module.exports = {
  sourceRoot: sourceRootDir,
  src: {
    dir: {
      scripts: './app/scripts/',
      styles: './app/styles/',
      fonts: './app/fonts/',
      images: './app/images/',
      partials: './app/partials/'
    },
    glob: {
      scripts: [
        './app/scripts/*.js',
        './app/scripts/**/*.js',
        '!./app/scripts/vendor/**'
      ],
      vendorScripts: [
        './app/scripts/vendor/**'
      ],
      styles: [
        './app/styles/less/main.less'
      ],
      watchstyles: [
        './app/styles/**/*.less'
      ],
      images: [
        './app/images/**/*'
      ],
      fonts: [
        './app/fonts/**/*.{eot,svg,ttf,woff}',
        './bower_modules/font-awesome/fonts/*.{eot,svg,ttf,woff}'
      ],
      html: [
        './app/*.html', './app/*.php'
      ],
      partials: [
        './app/partials/**/*.html'
      ],
      extras: [
        './app/*.*', '!app/*.html'
      ]
    },
    file: {
      app: './app/scripts/main.js',
      testConfig: './test/config/karma.config.js',
      text: [
        './app/.htaccess',
        './app/favicon.ico',
        './app/robots.txt',
        './app/humans.txt'
      ],
    }
  },
  vendorRoot: './bower_modules/',
  distRoot: distRootDir,
  dist: {
    dir: {
      root: distRootDir,
      styles: distRootDir + 'mincss/',
      font: distRootDir + 'fonts/',
      scripts: distRootDir + 'minjs/',
      vendorScripts: distRootDir + 'vendor/',
      images: distRootDir + 'images/'
    },
    file: {
      app: 'app.min.js',
      bundle: '[name].min.js',
    }
  },

  test: {
    unitTestSetup: './test/unitSpec/unitTestSetup.js',
    dir: {
      src: './test/',
      unit: './test/unitSpec/',
      component: './test/componentSpec/',
      integration: './test/integrationSpec/'
    },
    glob: {
      unit: ['./test/unitSpec/**/*.js'],
      karmaUnit: ['../unitSpec/**/*.js'],
      component: ['./test/componentSpec/**/*.js'],
      integration: ['./test/integrationSpec/**/*.js']
    }
  }
};
