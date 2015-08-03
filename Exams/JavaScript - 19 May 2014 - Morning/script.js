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
    var n = +args[0],
        m = +args[n + 1],
        model = {},
        result = [],
        keyValuePair,
        currentLine,
        currentName,
        currentItem,
        currentContent = [],
        allSections = {},
        leadingWhiteSpaces,
        arrayOfWhiteSpaces,
        inShaver = false,
        inSection = false,
        inRenderSection = false,
        inCondition = false,
        inForEach = false,
        start,
        end,
        i,
        j,
        k;
    //model object initial
    for(i = 1; i <= n; i += 1) {
        keyValuePair = args[i].split(':');
        if(keyValuePair[1].indexOf(',') !== -1) {
            keyValuePair[1] = keyValuePair[1].split(',');
            model[keyValuePair[0]] = keyValuePair[1];
        } else if(keyValuePair[1] === 'true' || keyValuePair[1] === 'false') {
            model[keyValuePair[0]] = JSON.parse(keyValuePair[1]);
        } else {
            model[keyValuePair[0]] = keyValuePair[1];
        }
    }
    for(i = n + 2; i < n + m + 2; i += 1) {
        if(args[i] === undefined) {
            currentLine = '';
        } else if(args[i].indexOf('@@') > -1) {
            currentLine = args[i].replace('@', '');
        } else {
            currentLine = args[i];
        }
        //set state or push into result
        if(!inShaver) {
            if (currentLine.indexOf('@section ') > -1) {
                currentName = currentLine.split(' ')[1];
                inSection = true;
                inShaver = true;
                continue;
            } else if ((leadingWhiteSpaces = currentLine.indexOf('@renderSection("')) > -1) {
                currentName = currentLine.split('"')[1];
                inRenderSection = true;
                inShaver = true;
            } else if ((leadingWhiteSpaces = currentLine.indexOf('@if')) > -1) {
                start = currentLine.indexOf('(');
                end = currentLine.indexOf(')');
                currentName = currentLine.substring(start + 1, end);
                inCondition = true;
                inShaver = true;
                continue;
            } else if((leadingWhiteSpaces = currentLine.indexOf('@foreach')) > -1) {
                start = currentLine.indexOf('var ');
                end = currentLine.indexOf(' in', start);
                currentItem = '@' + currentLine.substring(start + 4, end);
                start = end + 4;
                end = currentLine.indexOf(')', start);
                currentName = currentLine.substring(start, end);
                inForEach = true;
                inShaver = true;
                continue;
            } else {
                result.push(currentLine);
            }
        }
        //inState logic
        if(inShaver) {
            if(inSection) {
                if(currentLine.indexOf('}') > -1) {
                    inSection = false;
                    inShaver = false;
                    allSections[currentName] = [];
                    for(j = 0; j < currentContent.length; j += 1) {
                        allSections[currentName].push(currentContent[j]);
                    }
                    currentContent = [];
                } else {
                    currentContent.push(currentLine);
                }
            } else if(inRenderSection) {
                inRenderSection = false;
                inShaver = false;
                arrayOfWhiteSpaces = new Array(leadingWhiteSpaces + 1);
                for(j = 0; j < allSections[currentName].length; j += 1) {
                   result.push(arrayOfWhiteSpaces.join(' ') + allSections[currentName][j]);
                }
                currentContent = [];
            } else if(inCondition) {
                if(currentLine.indexOf('}') > -1) {
                    inCondition = false;
                    inShaver = false;
                    arrayOfWhiteSpaces = new Array(leadingWhiteSpaces + 1);
                    for(j = 0; j < currentContent.length; j += 1) {
                        result.push(arrayOfWhiteSpaces.join(' ') + currentContent[j].trim());
                    }
                    currentContent = [];
                } else if(model[currentName]) {
                    currentContent.push(currentLine);
                }
            } else if(inForEach) {
                if(currentLine.indexOf('}') > -1) {
                    inForEach = false;
                    inShaver = false;
                    arrayOfWhiteSpaces = new Array(leadingWhiteSpaces + 1);
                    for(j = 0; j < model[currentName].length; j += 1) {
                        for(k = 0; k < currentContent.length; k += 1) {
                            if(currentContent[k].indexOf(currentItem) > -1) {
                                result.push(new Array(currentContent[k].indexOf(currentItem)).join(' ') + currentContent[k].replace(currentItem, model[currentName][k]).trim());
                            } else {
                                result.push(arrayOfWhiteSpaces.join(' ') + currentContent[k].trim());
                            }
                        }
                    }
                    currentContent = [];
                } else {
                    currentContent.push(currentLine);
                }

            }
        }
    }
    //replace model properties
    for(i = 0; i < result.length; i += 1) {
        for(currentItem in model) {
            result[i] = result[i].replace('@' + currentItem, model[currentItem]);
        }
    }
    return result.join('\n');
}

var test = [
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
    '    <li>Home</li>',
    '    <li>About us</li>',
    '</ul>',
    '}',
    '@section footer {',
    '<footer>',
    '    Copyright Telerik Academy 2014',
    '</footer>',
    '}',
    '<!DOCTYPE html>',
    '<html>',
    '<head>',
    '    <title>Telerik Academy</title>',
    '</head>',
    '<body>',
    '    @renderSection("menu")',
    '',
    '    <h1>@title</h1>',
    '    @if (showSubtitle) {',
    '        <h2>@subTitle</h2>',
    '        <div>@@JustNormalTextWithDoubleKliomba ;)</div>',
    '    }',
    '',
    '    <ul>',
    '        @foreach (var student in students) {',
    '            <li>',
    '                @student',
    '            </li>',
    '            <li>Multiline @title</li>',
    '        }',
    '    </ul>',
    '    @if (showMarks) {',
    '        <div>',
    '            @marks',
    '        </div>',
    '    }',
    '',
    '    @renderSection("footer")',
    '</body>',
    '</html>'
];

//console.log(shaverParser(test));