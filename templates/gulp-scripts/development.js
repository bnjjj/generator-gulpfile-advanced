var gulp = require('gulp'),
  opn = require('opn');
var $ = require('gulp-load-plugins')({
  scope: ['dependencies']
});

var srcHosting = '<%= srcHosting %>',
  port = 8000;

var server = {
  host: 'localhost',
  port: port
};

if ($.util.env.host)
  srcHosting = $.util.env.host;
if ($.util.env.port)
  port = $.util.env.port;
if ($.util.env.prod)
  srcHosting = "./dist";

gulp.task('watch', function()
{
  gulp.watch([srcHosting + '/**/*.html', srcHosting + '/**/*.js', srcHosting + '/**/*.css']).on('change', function(event)
  {
    console.log(event.path + " modified ");
  })
});

gulp.task('webserver', function()
{
  gulp.src(srcHosting)
    .pipe($.webserver(
    {
      host: server.host,
      port: server.port,
      livereload: true,
      directoryListing: false
    }));
});

gulp.task('openbrowser', function()
{
  opn('http://' + server.host + ':' + server.port);
});


gulp.task('server', ['webserver', 'watch', 'openbrowser']);
