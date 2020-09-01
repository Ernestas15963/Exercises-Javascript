

// Challenge 1 : Your Age in Days.


function ageInDays(){
    var birthYear = prompt('What year you born...Good friend?');
    var ageInDaysz = (2018 - birthYear)* 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDaysz + ' days old.')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}


function reset(){
    document.getElementById('ageInDays').remove();
}


