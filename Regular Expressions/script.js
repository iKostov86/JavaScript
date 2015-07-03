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
    var regex = new RegExp('', 'g');
    document.getElementsByTagName('html').innerHTML = this.replace();
}

function htmlBinding() {
    'use strict';
    var str = '<div data-bind-content="name"></div>',
        output = str.bind({name: 'Steven'});

}