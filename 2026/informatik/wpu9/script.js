'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
    alert("Ich heiße dich herzlich Willkommen!");
    document.getElementById('bild1').addEventListener('pointerover', zoom1_in);
    document.getElementById('bild1').addEventListener('pointerleave', zoom1_out);

});

function zoom1_in()
{
    var dasBild1 = document.getElementById('bild1');
    dasBild1.style.width = "400px";
}

function zoom1_out()
{
    var dasBild1 = document.getElementById('bild1');
    dasBild1.style.width = "200px";
}
