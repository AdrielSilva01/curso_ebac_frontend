    module.exports = function (grunt) {
        grunt.initConfig({
        less: {
            development: {
            options: {
            },
            files: {
                'dist/styles/main.css': 'src/styles/main.less' 
            }
            }
        },
        
        uglify: {
            options: {
            compress: true,
            mangle: true
            },
            my_target: {
            files: {
                'dist/scripts/main.js': ['src/scripts/*.js']
            }
            }
        }
        });
    
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-uglify');
    
        grunt.registerTask('default', ['less', 'uglify']);
    };
    