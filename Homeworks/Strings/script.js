//Problem 1. Reverse string
function reverseString(str) {
    'use strict';
    var reversed,
        i;

    for(i = str.length - 1, reversed = ''; i >= 0; reversed += str[i--]);

    return reversed;
    //document.write(str + ' => ' + reversed);
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
function sub_stringInTextWithRegex(text, sub_str) {
    'use strict';
    var regex = new RegExp(sub_str, 'g'),
        matches = text.match(regex);

    return matches.length;
}

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
function parseTagsWithRegex(text) {
    'use strict';
    var regex = new RegExp('\<upcase\>(.*?)<\/upcase\>', 'g');
    text = text.replace(regex, function(x, y) {
        return y.toUpperCase();
    });
    regex = new RegExp('\<lowcase\>(.*?)\<\/lowcase\>', 'g');
    text = text.replace(regex, function(x, y) {
        return y.toLowerCase();
    });

    regex = new RegExp('\<mixcase\>(.*?)\<\/mixcase\>', 'g');
    text = text.replace(regex, function(x, y) {
        var i;

        for (i = 0; i < y.length; i += 1) {
            if (Math.random() < 0.5) {
                y = y.replace(y[i], y[i].toUpperCase());
            } else {
                y = y.replace(y[i], y[i].toLowerCase());
            }
        }

        return y;
    });

    console.log(text);
}

function parseTags(text) {
    'use strict';
    var start,
        end,
        str1,
        str2,
        i;

    changeText('\<upcase\>', '\</upcase\>', function(x){ return x.toUpperCase(); });
    changeText('\<lowcase\>', '\</lowcase\>', function(x) {return x.toLowerCase();});
    changeText('\<mixcase\>', '\</mixcase\>', function(x) {
        for (i = 0; i < x.length; i += 1) {
            if (i % 2 === 0) {
                x = x.replace(x[i], x[i].toUpperCase());
            } else {
                x = x.replace(x[i], x[i].toLowerCase());
            }
        }

        return x;
    });

    console.log(text);

    function changeText(tag1, tag2, func) {
        while(true) {
            start = text.indexOf(tag1, start);
            if(start === -1) {
                break;
            }
            end = text.indexOf(tag2, start + tag1.length);
            str1 = text.substring(start, end + tag2.length);
            str2 = func(text.substring(start + tag1.length, end));
            text = text.replace(str1, str2);
        }
    }
}

//Problem 5. nbsp
function replaceWhiteSpacesWithRegex(text) {
    'use strict';
    var regex = / /g;
    text = text.replace(regex, 'NBSP');
    console.log(text);
}

function replaceWhiteSpaces(text) {
    'use strict';
    var index;

    while((index = text.indexOf(' ', index + 1)) !== -1) {
        text = text.replace(text.substr(index, 1), 'NBSP');
    }

    console.log(text);
}

//Problem 6. Extract text from HTML
var myHTML = '<html>' +
    '<head>' +
    '<title>Sample site</title>' +
    '</head>' +
    '<body>' +
    '<div>text' +
    '<div>more text</div>' +
    'and more...' +
    '</div>' +
    'in body' +
    '</body>' +
    '</html>';

function extractTextFromHTMLWithRegex(html) {
    'use strict';
    html = html || document.documentElement.innerHTML;

    var regex = new RegExp('<.*?>', 'g');

    html= html.split(regex)
        .map(function(item) {
            return item.trim();
        })
        .join('');

    console.log(html);
}

function extractTextFromHTML(html) {
    'use strict';
    var start = 0,
        end = 0,
        text = '';

    while(start = html.indexOf('>', end), end = html.indexOf('<', start)) {
        if(end !== -1) {
            text += html.substring(start + 1, end);
        } else {
            break;
        }
    }
    console.log(text);
}

//Problem 7. Parse URL
function parseURLWithRegex(url) {
    'use strict';
    var regex = new RegExp('(.*?):\/\/(.*?)(\/.*)', ''),
        matches = url.match(regex),
        jsonObj = {};

    //http://telerikacademy.com/Courses/Courses/Details/239
    jsonObj.protocol = matches[1];
    jsonObj.server = matches[2];
    jsonObj.resource = matches[3];

    return jsonObj;
}

function parseURL(url) {
    'use strict';
    var jsonObj = {},
        start = 0,
        end = 0;

    end = url.indexOf(':', start);
    jsonObj.protocol = url.substring(start, end);
    start = url.indexOf('//', end) + 2;
    end = url.indexOf('/', start);
    jsonObj.server = url.substring(start, end);
    jsonObj.resource = url.substring(end, url.length);

    console.log(jsonObj);
}

//Problem 8. Replace tags
function replaceTagsWithRegex(html) {
    'use strict';
    var regex = /<\s*a\s+href\s*=\s*"(.*?)"\s*>(.*?)<\s*\/a\s*>/gi;
    html = html.replace(regex, '[URL=' + '$1 ' + ']' + '$2' + '[/URL]');
    return html;
}

function replaceTags(html) {
    'use strict';
    var start,
        end;

    for(start = 0, end = 0;start !== -1 && end !== -1;) {
        start = html.indexOf('<a', end);
        end = html.indexOf('href="', start) + 6;
        indexExists(start, end, '[URL=');

        start = html.indexOf('">', end);
        end = start + 2;
        indexExists(start, end, ']');

        start = html.indexOf('</a>', end);
        end = start + 4;
        indexExists(start, end, '[/URL]');
    }

    function indexExists(start, end, tag) {
        if(start !== -1 && end !== -1) {
            html = html.replace(html.substring(start, end), tag);
        }
    }

    console.log(html);
}

//Problem 9. Extract e-mails
function extractEmailsWithRegex(text) {
    'use strict';
    var regex = new RegExp('^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$'),
        emails = text.split(' ');
    emails = emails.filter(function(item) {
        return regex.test(item);
    });
    console.log(emails);
}

function extractEmails(text) {
    'use strict';
    var emails = text.split(' ').filter(function (item) {
        if (item.indexOf('@', 0) !== -1) {
            return true;
        } return false;
    });
    console.log(emails);
}

//Problem 10. Find palindromes
function findPalindromesWithRegex(text) {
    'use strict';
    var palindromes,
        regex = /\b\w+\b/g,
        matches = text.match(regex);

    palindromes = matches.filter(function(item) {
        if(isPalindrome(item)) {
            return true;
        } return false;
    });

    console.log(palindromes);
}
function findPalindromes(text) {
    'use strict';
    var i,
        palindromes = [],
        strings = text.split(/[ ,.]/g);

    for(i = 0; i < strings.length; i += 1) {
        //if(reverseString(strings[i]) === strings[i]) {
        //    palindromes.push(strings[i]);
        //}
        if(strings[i] !== '' && isPalindrome(strings[i])) {
            palindromes.push(strings[i]);
        }
    }

    console.log(palindromes);
}

function isPalindrome(letters) {
    'use strict';
    var characters  = letters.split(''),
        firstLetter = characters.shift(),
        lastLetter  = characters.pop();

    if (firstLetter !== lastLetter) {
        return false;
    } else if (characters.length < 2) {
        return true;
    } return isPalindrome(characters.join(''));
}

//Problem 11. String format
function stringFormat() {
    'use strict';
    var args = [].slice.call(arguments),
        frmt = args[0],
        position = 0,
        index = -1;

    for(;;) {
        index = frmt.indexOf('{', index + 1);
        if(index !== -1) {
            position = +frmt.charAt(index + 1);
            frmt = frmt.replace(frmt.substr(index, 3), args[position + 1]);
        } else {
            break;
        }
    }

    console.log(frmt);
}

//Problem 12. Generate list
function generateListApp() {
    'use strict';
    var people = [{name: 'Petkan', age: 14}, {name: 'Divaka', age: 17}],
        template = document.getElementById('list-item').innerHTML,
        tmp = '',
        peopleList = '',
        i;

    (function() {
        peopleList += '\<ul\>';
        for(i = 0; i < people.length; i += 1) {
            tmp = template.replace('-{name}-', people[i].name);
            tmp = tmp.replace('-{age}-', '' + people[i].age);
            peopleList += '\<li\>' + tmp + '\</li\>';
        }
        peopleList += '\</ul\>';
    })();

    document.writeln(peopleList);
}