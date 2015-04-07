'use strict';

module.exports = function(grunt) {

  // Time the grunt task
  require('time-grunt')(grunt);

  // Load all grunt tasks & assemble
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', 'assemble']});

  grunt.initConfig({
    // Read needed files
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('_config.yml'),

    // Clean files
    // ### NEEDS FINISHING ###
    clean: {
      dev: [
        '<%= site.dist %>',
      ],
      prd: [
        '<%= site.dist %>'
      ]
    },

    // Assemble - Build HTML
    assemble: {
      options: {
        flatten: true,
        assets: '<%= site.distAssets %>',
        partials: '<%= site.partials %>',
        layoutdir: '<%= site.layouts %>',
        layout: '<%= site.layout %>',
        data: '<%= site.data %>/*.{json,yml}',
      },
      site: {
        src: '<%= site.pages %>/*.hbs',
        dest: '<%= site.dist %>/'
      }
    },

    // Compile SASS
    sass: {
      dev: {
        files: [{
          expand: true,
          cwd: '<%= site.srcAssets %>/scss/',
          src: ['**/*.scss'],
          dest: '<%= site.distAssets %>/css',
          ext: '.css'
        }],
        options: {
          sourcemap: true,
        }
      },
      prd: {
        files: [{
          expand: true,
          cwd: '<%= site.srcAssets %>/scss/',
          src: ['**/*.scss'],
          dest: '<%= site.distAssets %>/css',
          ext: '.css'
        }],
        options: {
          sourcemap: false,
        }
      }
    },

    // Autoprefix CSS
    autoprefixer: {
      dev: {
        options: {
          browsers: ['last 2 versions', 'Firefox ESR', 'ie 8', 'ie 9'],
          map: true,
        },
        files: [{
          expand: true,
          flatten: true,
          src: '<%= site.distAssets %>/css/*.css',
          dest: '<%= site.distAssets %>/css/'
        }],
      },
      prd: {
        options: {
          browsers: ['last 2 versions', 'Firefox ESR', 'ie 8', 'ie 9'],
          map: false,
        },
        files: [{
          expand: true,
          flatten: true,
          src: '<%= site.distAssets %>/css/*.css',
          dest: '<%= site.distAssets %>/css/'
        }],
      }
    },

    // Minify CSS
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '<%= site.distAssets %>/css',
          src: ['*.css', '!*.min.css'],
          dest: '<%= site.distAssets %>/css',
          ext: '.css'
        }]
      }
    },

    // jsHint custom JS
    jshint: {
      files: ['<%= site.srcAssets %>/js/modules/*.js']
    },

    // Uglify JS
    uglify: {
      dev: {
        options: {
          mangle: false,
          compress: false,
          preserveComments: 'all',
          beautify: true,
          sourceMap: true,
          sourceMapIncludeSources: true
        },
        files: {
          '<%= site.distAssets %>/js/head.js': ['<%= site.srcAssets %>/js/head/*.js'],
          '<%= site.distAssets %>/js/head-oldie.js': ['<%= site.srcAssets %>/js/head-oldie/*.js'],
          '<%= site.distAssets %>/js/site.js': [
            '<%= site.srcAssets %>/js/globals.js',
            '<%= site.srcAssets %>/js/vendor/*.js',
            '<%= site.srcAssets %>/js/plugins/*.js',
            '<%= site.srcAssets %>/js/modules/*.js',
            '<%= site.srcAssets %>/js/main.js',
          ]
        }
      },
      prd: {
        options: {
          mangle: true,
          beautify: false,
          preserveComments: 'some',
          compress: {
            drop_console: true
          },
        },
        files: {
          '<%= site.distAssets %>/js/head.js': ['<%= site.srcAssets %>/js/head/*.js'],
          '<%= site.distAssets %>/js/head-oldie.js': ['<%= site.srcAssets %>/js/head-oldie/*.js'],
          '<%= site.distAssets %>/js/site.js': [
            '<%= site.srcAssets %>/js/globals.js',
            '<%= site.srcAssets %>/js/vendor/*.js',
            '<%= site.srcAssets %>/js/plugins/*.js',
            '<%= site.srcAssets %>/js/modules/*.js',
            '<%= site.srcAssets %>/js/main.js',
          ]
        }
      },
    },

    // Image minification
    imagemin: {
      dynamic: {
        options: {
        },
        files: [{
          expand: true,
          cwd: '<%= site.srcAssets %>/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= site.distAssets %>/img/'
        }]
      }
    },

    // Copy files
    copy: {
      extras: {
        files: [
          {expand: true, cwd: '<%= site.src %>/files/', src: ['**'], dest: '<%= site.dist %>/'},
        ]
      }
    },

    // Watch for changes
    watch: {
      js: {
        files: ['<%= site.srcAssets %>/js/**/*.js'],
        tasks: ['jshint', 'uglify:dev'],
      },
      scss: {
        files:['<%= site.srcAssets %>/scss/**/*.scss'],
        tasks:['sass:dev', 'autoprefixer'],
      },
      img: {
        files: ['<%= site.srcAssets %>/img/**/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
      },
      assemble: {
        files: ['<%= site.templates %>/**/*', '_config.yml'],
        tasks: ['assemble'],
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
            src : [
              '<%= site.distAssets %>/css/*.css',
              '<%= site.distAssets %>/js/*.js',
              '<%= site.dist %>/*.html'
            ]
        },
        options: {
            watchTask: true,
            server: '<%= site.dist %>'
        }
      }
    }
  });

  // Tasks
  grunt.registerTask('dev', [
    'clean',
    'assemble',
    'sass:dev',
    'autoprefixer:dev',
    'jshint',
    'uglify:dev',
    'copy:extras',
    'browserSync',
    'watch'
  ]);

  grunt.registerTask('prd', [
    'clean',
    'assemble',
    'sass:prd',
    'autoprefixer:prd',
    'cssmin',
    'jshint',
    'uglify:prd',
    'copy:extras'
  ]);

  grunt.registerTask('default', 'dev');
  grunt.registerTask('reset', ['clean']);
};
