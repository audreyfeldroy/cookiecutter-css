module.exports = function(grunt) {

  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON("component.json"),

    // Banner definitions
    meta: {
      banner: "/*\n" +
        " *  <%= pkg.name %> - v<%= pkg.version %>\n" +
        " *  <%= pkg.description %>\n" +
        " *  http://github.com/<%= pkg.repo %>\n" +
        " *\n" +
        " *  Made by {{ cookiecutter.full_name }}\n" +
        " *  Under {{ cookiecutter.license }} License\n" +
        " */\n"
    },

    // Concat definitions
    concat: {
      dist_css: {
        src: "src/{{ cookiecutter.repo_name }}.css",
        dest: "dist/{{ cookiecutter.repo_name }}.css"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // CSS minification
    cssmin: {
      add_banner: {
        options: {
          banner: '/* {{ cookiecutter.repo_name }} by {{ cookiecutter.github_username }} ~ https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.repo_name }} */'
        },
        files: {
          'dist/{{ cookiecutter.repo_name }}.min.css': ['src/{{ cookiecutter.repo_name }}.css']
        }
      }
    },

    // Start up server on 8080 and open demo
    connect: {
      server: {
        options: {
          keepalive: true,
          open: "http://127.0.0.1:8080/demo/index.html",
          port: 8080
        }
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.registerTask("default", ["concat", "cssmin", "connect"]);
};
