module.exports = function (grunt) {
  'use strict';

  grunt.file.defaultEncoding = 'utf8';
  grunt.util.linefeed = '\n';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    secret: grunt.file.readJSON('.secret.json'),
    banner: '/*! \n' +
            ' * <%= pkg.title %>  v<%= pkg.version %> \n' +
            ' * License: <%= pkg.license.type %> <%= pkg.license.url %> \n' +
            ' * Web: <%= pkg.homepage %> \n' +
            ' * repository: <%= pkg.repository.url %> \n' +
            ' * Changed: <%= grunt.template.today("yyyy-mm-dd") %> \n' +
            '*/ \n',

    // Task configuration.
    clean: {
      dist: 'dist'
    },

    concat: {
      options: {
        stripBanners: true
      },
      JS: {
        options: {
          banner: '<%= banner %> '
        },
        src: [
          'js/**'
        ],
        dest: 'dist/js/<%= pkg.name %>.js'
      },
      CSS: {
        options: {
          banner: '<%= cssBanner %>'
        },
        src: [
          'css/**'
        ],
        dest: 'dist/css/<%= pkg.name %>.css'
      }
    },

    uglify: {
      options: {
        preserveComments: false,
        banner: '<%= banner %> \n'
      },
      core: {
        src: '<%= concat.JS.dest %>',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },

    autoprefixer: {
      options: {
        browsers: '<%= pkg.config.autoprefixerBrowsers %>'
      },
      core: {
        options: {
          map: false
        },
        // src: 'dist/css/<%= pkg.name %>.css'
        src: 'css/**.css'
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '0',
        noAdvanced: true,
        banner: '<%= banner %>'
      },
      core: {
        src: 'dist/css/<%= pkg.name %>.css',
        dest: 'dist/css/<%= pkg.name %>.min.css'
      }
    },

    copy: {
      fonts: {
        src: 'fonts/*',
        dest: 'dist/'
      },
      site: {
        src: 'fonts/*',
        dest: 'docs/'
      }
    },

    pagespeed: {
      options: {
        nokey: true,
        url: "<%= pkg.homepage %>"
      },
      prod: {
        options: {
          url: "<%= pagespeed.prod.options.locale %>",
          locale: "en_US",
          strategy: "desktop",
          threshold: 85
        }
      },
      paths: {
        options: {
          paths: ["/"],
          locale: "<%= pagespeed.prod.options.locale %>",
          strategy: "mobile",
          threshold: 85
        }
      }
    },

    sftp: {
      options: {
          host: '<%= secret.host %>',
          username: '<%= secret.username %>',
          password: '<%= secret.password %>',
          showProgress: true,
          "<%= secret.option %>": '<%= secret.optionans %>'
      },
      commonview: {
        files: {
          "./": "**.html"
        },
        options: {
          path: '<%= secret.path %>/',
          srcBasePath: "/"
        }
      },   
      commonjs: {
        files: {
          "./": "js/common-scripts.js"
        },
        options: {
          path: '<%= secret.path %>/js/',
          srcBasePath: "js/"
        }
      },
      commoncss: {
        files: {
          "./": ["css/style.css", "css/dashboard.css"]
        },
        options: {
          path: '<%= secret.path %>/css/',
          srcBasePath: "css/"
        }
      },
      distview: {
        files: {
          "./": "**.html"
        },
        options: {
          path: '<%= secret.path %>/',
          srcBasePath: "/"
        }
      },
      distjs: {
        files: {
          "./": "js/**"
        },
        options: {
          path: '<%= secret.path %>/js/',
          srcBasePath: "js/"
        }
      },
      distcss: {
        files: {
          "./": "css/**"
        },
        options: {
          path: '<%= secret.path %>/css/',
          srcBasePath: "css/"
        }
      },
      distimg: {
        files: {
          "./": "img/**"
        },
        options: {
          path: '<%= secret.path %>/img/',
          srcBasePath: "img/"
        }
      },
      distasset: {
        files: {
          "./": "assets/**"
        },
        options: {
          path: '<%= secret.path %>/assets/',
          srcBasePath: "assets/"
        }
      }
    }
  });

  // Load plugins
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  // Dist JS
  //grunt.registerTask('dist-js', ['concat:JS', 'uglify:core', 'uglify:site']);

  // Dist CSS
  //grunt.registerTask('dist-css', ['concat:CSS', 'autoprefixer', 'cssmin:core', 'cssmin:site']);

  // SFTP Common Files
  grunt.registerTask('ftp', ['autoprefixer', 'sftp:commonview', 'sftp:commoncss', 'sftp:commonjs']);

  // SFTP Common Files
  grunt.registerTask('ftpall', ['autoprefixer', 'sftp:distview', 'sftp:distcss', 'sftp:distjs']);

  // SFTP Images
  grunt.registerTask('ftpimg', ['sftp:distimg']);

  // SFTP Assets
  grunt.registerTask('ftpasset', ['sftp:distasset']);

  // Test Page Speed
  //grunt.registerTask('speed', ['pagespeed']);

  // Default Task.
  //grunt.registerTask('default', ['clean:dist', 'copy', 'dist-css', 'dist-js']);

  // Full Distribution Task.
  //grunt.registerTask('dist', ['clean:dist', 'copy', 'dist-css', 'dist-js', 'ftpall']);

};