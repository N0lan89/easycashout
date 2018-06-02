'use strict';

var total01 = 0;
var total02 = 0;


function coinsFunction() {
    document.getElementById('r01').innerHTML = (document.getElementById("input01").value * 0.05).toFixed(2);

    document.getElementById('r02').innerHTML = (document.getElementById("input02").value * 0.1).toFixed(2);

    document.getElementById('r03').innerHTML = (document.getElementById("input03").value * 0.25).toFixed(2);
    
    document.getElementById('r04').innerHTML = (document.getElementById("input04").value * 1).toFixed(2);

    document.getElementById('r05').innerHTML = (document.getElementById("input05").value * 2).toFixed(2);


    var coin005 = parseFloat(document.getElementById('r01').innerHTML);
    var coin010 = parseFloat(document.getElementById('r02').innerHTML);
    var coin025 = parseFloat(document.getElementById('r03').innerHTML);
    var coin1 = parseFloat(document.getElementById('r04').innerHTML);
    var coin2 = parseFloat(document.getElementById('r05').innerHTML);

    document.getElementById("total01").innerHTML = (coin005 + coin010 + coin025 + coin1 + coin2).toFixed(2);
    total01 = parseFloat(document.getElementById("total01").innerHTML);
}

function rollsFunction() {
    
    document.getElementById('r06').innerHTML = (document.getElementById("input06").value * (0.05 * 40)).toFixed(2);

    document.getElementById('r07').innerHTML = (document.getElementById("input07").value * (0.1 * 50)).toFixed(2);

    document.getElementById('r08').innerHTML = (document.getElementById("input08").value * (0.25 * 40)).toFixed(2);
    
    document.getElementById('r09').innerHTML = (document.getElementById("input09").value * (1 * 25)).toFixed(2);

    document.getElementById('r10').innerHTML = (document.getElementById("input10").value * (2 * 25)).toFixed(2);


    var coin005 = parseFloat(document.getElementById('r06').innerHTML);
    var coin010 = parseFloat(document.getElementById('r07').innerHTML);
    var coin025 = parseFloat(document.getElementById('r08').innerHTML);
    var coin1 = parseFloat(document.getElementById('r09').innerHTML);
    var coin2 = parseFloat(document.getElementById('r10').innerHTML);

    
    
    document.getElementById("total02").innerHTML = (coin005 + coin010 + coin025 +coin1 + coin2).toFixed(2);
    total02 = parseFloat(document.getElementById("total02").innerHTML);
}

setInterval(function () {
    document.getElementById("total").innerHTML = (total01 + total02).toFixed(2);
},100); 