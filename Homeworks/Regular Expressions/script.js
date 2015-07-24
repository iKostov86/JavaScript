//Problem 1. Format with placeholders
String.prototype.format = function(options) {
    'use strict';
    var option,
        regex ,
        formatted = this;

    for(option in options) {
        regex = new RegExp('#{' + option + '}', 'g');
        formatted = formatted.replace(regex, options[option]);
    }

    return formatted;
    };

function formatWithPlaceholders() {
    'use strict';
    var options,
        output;

    options = {name: 'John'};
    output = 'Hello, there! Are you #{name}?'.format(options);
    console.log(output);

    options = {name: 'John', age: 13};
    output = 'My name is #{name} and I am #{age}-years-old.'.format(options);
    console.log(output);
}

//Problem 2. HTML binding
String.prototype.bind = function(obj) {
    'use strict';
    var prop,
        regexContent,
        regexLink,
        regexClass,
        output = this;

    for (prop in obj) {
        regexContent = new RegExp('(^<.*?data-bind-content="' + prop + '".*?>)(.*?)(<\/.*?>)', 'g');
        regexLink = new RegExp('(^<.*?data-bind-href="' + prop + '".*?)>(.*?</.*?>)', 'g');
        regexClass = new RegExp('(^<.*?data-bind-class="' + prop + '".*?)>(.*?</.*?>)', 'g');

        output = output.replace(regexContent, '$1' + obj[prop] + '$3');
        output = output.replace(regexLink, '$1 href="' + obj[prop] + '">$2');
        output = output.replace(regexClass, '$1 class="' + obj[prop] + '">$2');
    }

    return output;
};

function htmlBinding() {
    'use strict';
    //<div data-bind-content="name">Steven</div>
    var str = '\<div data-bind-content="name"\>\</div\>',
        output = str.bind({name: 'Steven'});
    console.log(output);

    //<a data-bind-content="name" data-bind-href="link" data-bind-class="name" href="http://telerikacademy.com" class="Elena">Elena</à>
    str = '\<a data-bind-content="name" data-bind-href="link" data-bind-class="name"\>\</à\>';
    output = str.bind({name: 'Elena', link: 'http://telerikacademy.com'});
    console.log(output);

    document.writeln(output);
}