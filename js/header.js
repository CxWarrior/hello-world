var template ='\
<nav class="navbar navbar-inverse navbar-fixed-top">\
    <div class="container">\
    <div class="navbar-header">\
    <a class="navbar-brand" href="/index.html">Jeffindustri.es</a>\
    </div>\
    <div id="navbar" class="collapse navbar-collapse">\
    <ul class="nav navbar-nav">\
    <li class="{{#home}}active{{/home}}"><a href="/index.html">Home</a></li>\
<li class="{{#about}}active{{/about}}"><a href="/about.html">About</a></li>\
<li class="{{#contact}}active{{/contact}}"><a href="/contact.html">Contact</a></li>\
<li class="{{#mtgclass}}active{{/mtgclass}}"><a href="/mtgclass/index.html">Mtg Class Finder</a></li>\
</ul>\
</div>\
</div>\
</nav>\
';
view={};
var active = $('#mainNav').attr('data-active');
view[active]=true;
$('#mainNav').html(Mustache.render(template, view));