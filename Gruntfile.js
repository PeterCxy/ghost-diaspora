module.exports = function(grunt) {

    grunt.initConfig({

        // merge minify js
        uglify: {

            global: {
                options: {
                    banner: '/* http://lorem.in  @author LoeiFy@gmail.com peter@typeblog.net */ \n'
                },
                files: {
                    'assets/prebuilt/dist/Diaspora.js': [
                        'assets/Diaspora.js'
                    ]
                }
            }

        },

        // concat js
        concat: {

            plugin: {

                options: {
                    banner: 'window.DP={};\n'
                },

                files: {
                    'assets/prebuilt/dist/plugin.js': [
                        'assets/Chocolate.js',
                        'assets/jquery.justifiedGallery.min.js',
                        'assets/jquery.parallax.js',
                        'assets/jquery.qrcode.min.js',
                        'assets/Vibrant.js'
                    ]
                }

            }

        },

        // merge minify css
        cssmin: {

            global: {
                options: {
                    banner: '/* http://lorem.in  @author LoeiFy@gmail.com peter@typeblog.net */ \n'
                },
                files: {
                    'assets/prebuilt/dist/Diaspora.css': [
                        'assets/Diaspora.css',
                        'assets/icon.css'
                    ],
                    'assets/prebuilt/dist/base.css': [
                        'assets/base.css'
                    ]
                }
            }

        }

    });

    // grunt plugin
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['uglify', 'concat', 'cssmin']);
    grunt.registerTask('dev', ['replace:dev']);

};
