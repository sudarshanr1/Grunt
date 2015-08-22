module.exports = function(grunt){
	grunt.initConfig({
	  concat: {
	    options: {
	      separator: ';',
	    },
	    js: {
	      src: ['js/*'],
	      dest: 'build/js/scripts.js',
	    },
	    css: {
	      src: ['css/*'],
	      dest: 'build/css/styles.js',
	    },
	  },
	  watch: {
			js: {
					files: ['js/*'],
					tasks: ['concat','uglify'],
				},
			css: {
					files: ['css/*'],
					tasks: ['concat','uglify'],
				},
		},
	  uglify: {
      		my_target: {
	      		files: {
	        	'js/scripts.min.js': ['build/js/*.js']
	      		}
    		}
  		},
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
}