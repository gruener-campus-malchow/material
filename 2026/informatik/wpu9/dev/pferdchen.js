'use strict';

document.addEventListener('DOMContentLoaded', registerEvents);

function readImageList(){

    let BilderListe = [];

    fetch('./feather/filelist.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht ok');
        }
        return response.text(); // Die Antwort als Text einlesen
    })
    .then(text => {
        const lines = text.split('\n'); // Zeilen in ein Array umwandeln
        lines.forEach(line=>{BilderListe.push(line)})
    })
    .catch(error => console.error('Fehler:', error));

    console.log(BilderListe);

    alert("Fertig")
}

function registerEvents(){

    document.getElementById('loadFile').addEventListener('click', readImageList);

    document.getElementById('bild1').addEventListener('pointerover', zoom1_in);
    document.getElementById('bild1').addEventListener('pointerleave', zoom1_out);

    document.getElementById('bild2').addEventListener('pointerover', zoom2_in);
    document.getElementById('bild2').addEventListener('pointerleave', zoom2_out);

    document.getElementById('bild3').addEventListener('pointerover', zoom3_in);
    document.getElementById('bild3').addEventListener('pointerleave', zoom3_out);

    document.getElementById('bild4').addEventListener('pointerover', zoom4_in);
    document.getElementById('bild4').addEventListener('pointerleave', zoom4_out);

    document.getElementById('bild5').addEventListener('pointerover', zoom5_in);
    document.getElementById('bild5').addEventListener('pointerleave', zoom5_out);

    document.getElementById('bild6').addEventListener('pointerover', zoom6_in);
    document.getElementById('bild6').addEventListener('pointerleave', zoom6_out);
}

function zoom1_in(){
    document.getElementById('bild1').src = 'https://m.media-amazon.com/images/I/61DutkYqEGL._UF894,1000_QL80_.jpg';
}

function zoom1_out(){
    document.getElementById('bild1').src = "https://gcm.schule/dev/gcmofficial/sites/default/files/logo.svg";
}

function zoom2_in(){
    document.getElementById('bild2').src = 'https://img.weser-kurier.de/image/0266-119cc8d64250-a85620d5c44e-1000/1600,16-9,low,50,50,1_2000_1060_1884_1060_1_-0_0_1_-58_0/Landscapekina-pferde-rettung-mit-dem-hubschrauber.webp';
}

function zoom2_out(){
    document.getElementById('bild2').src = "https://gcm.schule/dev/gcmofficial/sites/default/files/logo.svg";
}

function zoom3_in(){
    document.getElementById('bild3').src = 'https://img.freepik.com/fotos-kostenlos/pegasus-mit-schoenen-fluegeln-in-der-natur_23-2151799630.jpg';
}

function zoom3_out(){
    document.getElementById('bild3').src = "https://gcm.schule/dev/gcmofficial/sites/default/files/logo.svg";
}

function zoom4_in(){
    document.getElementById('bild4').src = 'https://m.media-amazon.com/images/I/61DutkYqEGL._UF894,1000_QL80_.jpg';
}

function zoom4_out(){
    document.getElementById('bild4').src = "https://gcm.schule/dev/gcmofficial/sites/default/files/logo.svg";
}

function zoom5_in(){
    document.getElementById('bild5').src = 'https://img.weser-kurier.de/image/0266-119cc8d64250-a85620d5c44e-1000/1600,16-9,low,50,50,1_2000_1060_1884_1060_1_-0_0_1_-58_0/Landscapekina-pferde-rettung-mit-dem-hubschrauber.webp';
}

function zoom5_out(){
    document.getElementById('bild5').src = "https://gcm.schule/dev/gcmofficial/sites/default/files/logo.svg";
}
function zoom6_in(){
    document.getElementById('bild6').src = 'https://img.freepik.com/fotos-kostenlos/pegasus-mit-schoenen-fluegeln-in-der-natur_23-2151799630.jpg';
}

function zoom6_out(){
    document.getElementById('bild6').src = "https://gcm.schule/dev/gcmofficial/sites/default/files/logo.svg";
}

/*



*/
