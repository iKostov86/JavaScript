//Problem 1. Reverse string
function reverseString(str) {
    'use strict';
    var reversed,
        i;

    for(i = str.length - 1, reversed = ''; i >= 0; reversed += str[i--]);

    document.write(str + ' => ' + reversed);
}

//Problem 2. Correct brackets
function correctBrackets(expression) {
    'use strict';
    var count = 0,
        length,
        i;

    for(i = 0, length = expression.length; i < length; i += 1) {
        if(expression.charAt(i) === ')') {
            if(count === 0) {
                return false;
            } else {
                count -= 1;
            }
        } else if(expression.charAt(i) === '(') {
            count += 1;
        }
    }

    return (count === 0 ? true : false);
}

//Problem 3. Sub-string in text
function sub_stringInText(text, sub_str) {
    'use strict';
    var length = sub_str.length,
        count = -1,
        index = -1;

    text = text.toLowerCase();

    do {
        count += 1;
        index = text.indexOf(sub_str, index + 1);
    } while(index !== -1);

    return count;
}

//Problem 4. Parse tags
function parseTags() {
    'use strict';
}