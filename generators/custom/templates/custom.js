var gulp = require('gulp');

gulp.task('<%= customName %>', [<% var tab = tasks.split(','); for(var i = 0; i < tab.length; i++) { %>'<%=tab[i].replace(' ', '')%>'<% if (i !== tab.length - 1) {%>,<% } %>
    <%}%>]);