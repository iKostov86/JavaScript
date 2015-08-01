//1. Vehicles
function vehicles(args) {
    'use strict';
    var wheels = [10, 4, 3],
        count = 0,
        number = +args[0],
        rows,
        cols,
        k;

    for(rows = 0; rows <= number / 10; rows += 1) {
        for(cols = 0; cols <= number / 4; cols += 1) {
            for(k = 0; k <= number / 3; k += 1) {
                if((rows * 10 + cols * 4 + k * 3) === number) {
                    count += 1;
                }
            }
        }
    }

    return count;
}

//2. Paths
function paths(args) {
    'use strict';
    var sum = 0,
        rows = 0,
        cols = 0,
        direction,
        dimension = args[0].split(' '),
        matrix = args.slice(1).map(function(item) {
            return item.split(' ');
        }),
        difference = {
            u: -1,
            d: 1,
            l: -1,
            r: 1
        };
    while(rows >= 0 && cols >= 0 && rows < dimension[0] && cols < dimension[1]) {
        if(!matrix[rows][cols]) {
            return 'failed at (' + rows + ', ' + cols + ')';
        }
        sum += ((1 << rows) + cols);
        direction = matrix[rows][cols];
        matrix[rows][cols] = '';
        rows += difference[direction.charAt(0)];
        cols += difference[direction.charAt(1)];
    }
    return 'successed with ' + sum;
}

//3. Shaver Parser
function shaverParser(args) {
    'use strict';
    var n = +(args[0]),
        m = args.length,
        i,
        model = {},
        prop = '',
        start = 0,
        end = 0,
        data = '',
        str = '',
        temp = '',
        list = '';

    //model object initial
    for(i = 1; i <= n; i += 1) {
        data = args[i];
        end = data.indexOf(':');
        prop = data.substring(start, end);
        temp = data.substring(end + 1, data.length);
        if(temp.indexOf(',') !== -1) {
            temp = temp.split(',');
            model[prop] = [];
            temp.forEach(function(item) {
                model[prop].push(item);
            })
        } else if(temp === 'true' || temp === 'false') {
            model[prop] = JSON.parse(temp);
        } else {
            model[prop] = temp;
        }
    }

    //html initial
    for(i += 1; i < m; i += 1) {
        if(i === (m - 1)) {
            str += args[i];
        } else {
            str += (args[i] + '\n');
        }
    }

    //render sections
    start = str.indexOf('@renderSection');
    while(start !== -1) {
        end = str.indexOf(')', start);
        prop = str.substring(str.indexOf('"', start) + 1, str.lastIndexOf('"', end));
        temp = '@section ' + prop;
        data = str.substring(start, str.indexOf(')', start) + 1);
        start = str.indexOf('{', str.indexOf(temp)) + 1;
        end = str.indexOf('}', start);
        str = str.replace(data, str.substring(start, end).trim());
        start = str.indexOf('@renderSection', start + 1);
    }

    //conditional statements
    start = -1;
    while((start = str.indexOf('@if', start + 1)) !== -1) {
        end = str.indexOf('}', start);
        prop = str.substring(str.indexOf('(', start) + 1, str.indexOf(')', start));
        if(model[prop]) {
            temp = str.substring(str.indexOf('{', start) + 1, end).trim();
            str = str.replace(str.substring(start, end + 1), temp);
        } else {
            //str = str.slice(0, start) + str.slice(end + 2, str.length - 1);
            str = str.replace(str.substring(start, end + 2), '');
        }
    }

    //loop
    start = -1;
    while((start = str.indexOf('@foreach', start + 1)) !== -1) {
        end = str.indexOf('}', start);
        prop = str.substring(str.indexOf('in ', start) + 3, str.indexOf(')', start));
        temp = '@' + str.substring(str.indexOf('(var ') + 5, str.indexOf(' in'));
        for(i = 0; i < model[prop].length; i += 1) {
            if(i === model[prop].length - 1) {
                list += str.substring(str.indexOf('{', start) + 1, str.indexOf('}', start)).trim();
            } else {
                list += str.substring(str.indexOf('{', start) + 1, str.indexOf('}', start)).trim() + '\n';
            }
            list = list.replace(temp, model[prop][i]);
        }
        str = str.replace(str.substring(start, end + 1), list);
    }

    //replace model properties
    for(prop in model) {
        temp = new RegExp('@' + prop, 'g');
        str = str.replace(temp, model[prop]);
    }

    str = str.replace(str.substring(0, str.indexOf('<!DOCTYPE html>')), '');
    return str;
}

var tests = [
'6',
'title:Telerik Academy',
'showSubtitle:true',
'subTitle:Free training',
'showMarks:false',
'marks:3,4,5,6',
'students:Pesho,Gosho,Ivan',
'42',
'@section menu {',
'<ul id="menu">',
'   <li>Home</li>',
'   <li>About us</li>',
'</ul>',
'}',
'@section footer {',
'<footer>',
'   Copyright Telerik Academy 2014',
'</footer>',
'}',
'<!DOCTYPE html>',
'<html>',
'<head>',
'<title>Telerik Academy</title>',
'</head>',
'<body>',
'@renderSection("menu")',
'',
'<h1>@title</h1>',
'@if (showSubtitle) {',
'<h2>@subTitle</h2>',
'<div>@@JustNormalTextWithDoubleKliomba ;)</div>',
'}',
'',
'<ul>',
'@foreach (var student in students) {',
'   <li>',
'       @student',
'   </li>',
'   <li>Multiline @title</li>',
'}',
'</ul>',
'@if (showMarks) {',
'<div>',
'   @marks',
'</div>',
'}',
'',
'@renderSection("footer")',
'</body>',
'</html>'
];

console.log(shaverParser(tests));