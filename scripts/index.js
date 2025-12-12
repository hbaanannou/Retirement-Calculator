var currentAge = prompt('How old are you now?');
document.write('<div>You are '+currentAge+' years old.</div>');

var retireAge = prompt('At what age do you want to retire?');
document.write('<div>You want to be '+retireAge+' years old when you retire.</div>')

var retirement = parseFloat(retireAge - currentAge);
var retireYear = new Date().getFullYear() + retirement;

document.write('<div>You want to retire in '+retireYear+'.</div>');
console.log('You want to retire in '+retireYear+' years.');



