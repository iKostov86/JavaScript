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
//String.prototype.bind = function(obj) {
//    'use strict';
//    var prop,
//        regexContent,
//        regexLink;
//
//    for(prop in obj) {
//
//    }
//};

String.prototype.bind = function(parameters) {
    var regexContent,
        regexHref,
        regexClass,
        prop,
        output = this;

    for (prop in parameters) {
        regexContent = new RegExp('(<.*?data-bind-content="' + prop + '".*?>)(.*?)(<\\s*/.*?>)', 'g');
        regexHref = new RegExp('(<.*?data-bind-href="' + prop + '".*?)>', 'g');
        regexClass = new RegExp('(<.*?data-bind-class="(' + prop + ')".*?)>', 'g');

        output = output.replace(regexContent, function(element, openingTag, content, closingTag) {
            return openingTag + parameters[prop] + closingTag;
        });

        output = output.replace(regexHref, function (tag, contentBeforeClosing) {
            return contentBeforeClosing + ' href="' + parameters[prop] + '">';
        });

        output = output.replace(regexClass, function (tag, contentBeforeClosing) {
            return contentBeforeClosing + ' class="' + parameters[prop] + '">';
        });
    }

    return output;
};

function htmlBinding() {
    'use strict';
    var str = '<div data-bind-content="name"></div>',
        output = str.bind({name: 'Steven'});
    console.log(output);

    str = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></à>';
    output = str.bind({name: 'Elena', link: 'http://telerikacademy.com'});
    console.log(output);
}