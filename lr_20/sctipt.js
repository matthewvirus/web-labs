$(document).ready(function() {
    // tasks 1,2

    let jsonString = '';
    let listItems = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'
    ];

    $('.json-obj').click(addElementsToString);
    
    function addElementsToString() {
        jsonString += '{';
        for(let i = 0; i < listItems.length; i++) {
            jsonString += '"v' + i + '": "' + listItems[i] + '",';
        }
        jsonString = jsonString.slice(0, -1);
        jsonString += '}';
        console.log(jsonString);
        JSON.parse(jsonString, function(_k,v) {
            return (typeof(v) !== 'object')? $('.monthes').append($('<li>').html(v)) : undefined;
        });
    }

    // task 3

    let user = {
        name: "Matthew",
        dob: new Date("July 25, 2004").toLocaleDateString(
            'en-us', 
            { weekday:"long", year:"numeric", month:"short", day:"numeric"}
        ),
        passwordHash: "bf19a0254f74dc96e2998a1de1150a8899936cbcc31448ab018bcba99ca4ef87"
    };

    $('.append-list').click(appendListOnPage);

    function appendListOnPage() {
        $('.n3').append($('<ul>')
        .append([
            addElToList(user.name),
            addElToList(user.dob),
            addElToList(user.passwordHash)]));
    }
    function addElToList(field) {
        return $('<li>').html(field);
    }

    // task 4

    let childrenList = [];
    
    $('.body-children').click(function() {
        $('body').children().each(function() {
            console.log($(this));
        });
    });

    // task 5, 6

    $('.create-table').click(createTable);
    function createTable() {
        $('.n5').append($('<table>')
            .append($('<tr>')
                .append($('<th>'))
                .append($('<th>').text("PRESENT").addClass('time'))
                .append($('<th>').text("PAST").addClass('time'))
                .append($('<th>').text("FUTURE").addClass('time')))
            .append($('<tr>')
                .append($('<th>').text("+"))
                .append($('<td>').text("I dance"))
                .append($('<td>').text("I danced"))
                .append($('<td>').text("I will dance")))
            .append($('<tr>')
                .append($('<th>').text("-"))
                .append($('<td>').text("I don't dance"))
                .append($('<td>').text("I din't dance"))
                .append($('<td>').text("I'll not dance")))
            .append($('<tr>')
                .append($('<th>').text("?"))
                .append($('<td>').text("Do I dance?"))
                .append($('<td>').text("Did I dance?"))
                .append($('<td>').text("Will I dance?")))
        );
        $('th').addClass('headers');
        $('td').addClass('descs');
        $('.headers').css({
            "color": "white",
            "background-color": "#4db6ac",
            "font-family": "system-ui",
            "font-size": "12px",
            "padding": "10",
            "font-weight": "bold"
        });
        $('.descs').css({
            "color": "white",
            "background-color": "#26c6da",
            "font-family": "system-ui",
            "font-size": "10px",
            "padding": "10",
            "font-weight": "normal",
            "text-align": "center"
        });
    }

    // task 7

    $('body').on('mouseover', '.time', function() {
        alert($(this).text());
    });

    // task 8
    
    $('body').on('click', '.submit', function() {
        $('.error').css("color", "red");
    });

    $('.submit').click(validateForm);

    function validateForm() {
        let validationArray = [];
        let i = 0;

        let name = $('.name').val();
        let surname = $('.surname').val();
        let age = $('.age').val();
        let password = $('.password').val();

        validationArray.push(validateElements(name, 'Name', '.name'));
        validationArray.push(validateElements(surname, 'Surname', '.surname'));
        validationArray.push(validateElements(age, 'Age', '.age'));
        validationArray.push(validateElements(password, 'Password', '.password'));

        validationArray.forEach(function(el) {
            if (el) i++; 
        });
        if (i === validationArray.length) {
            alert('Success!')
        };
    }

    function validateElements(value, elName, elClass) {
        if (value.length === 0) {
            $(elClass).after('<br><span class="error">' + elName + ' is required</span>');
            return false;
        }
        $(elClass).children($('span').hide());
        return true;
    }

    // task 9

    $('.circle').css({
        'background-color': 'white',
        'position': 'relative',
        'top': '0.3vh',
        'left': '0.3vh',
        'height': '20px',
        'width': '20px',
        'border-radius': '20px',
    });

    $('.switch').css({
        'background-color': 'lightgrey',
        'height': '25px',
        'width': '60px',
        'border-radius': '20px',
    });

    let isOn = false;
    $('.switch').click(function() {
        isOn = !isOn;
        if (isOn) {
            $('.circle').animate({left: '4.4vh'});
            $('.switch').css("background-color", "lightblue");
        } else {
            $('.circle').animate({left: '0.3vh'});
            $('.switch').css("background-color", "lightgrey");
        }
    });
});