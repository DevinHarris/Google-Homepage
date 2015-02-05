module.exports = function(grunt) {

	//1 Config goes here.

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'css/main.css' : 'css/styles.scss'
				}
			}
		},

		watch: {
			scripts: {
				files: ['css/*.scss'],
				tasks: ['sass'],
				option: {
					spawn: false,
				},
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass', 'watch']);
};