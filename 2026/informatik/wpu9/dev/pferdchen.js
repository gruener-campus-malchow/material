'use strict';

document.addEventListener('DOMContentLoaded', registerEvents);

function readImageList(){

    var BilderListe = [];
    /*

    fetch('https://gcm.schule/material/2026/informatik/wpu9/dev/feather/filelist.txt')
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
    */

    BilderListe = svgFiles;


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


const svgFiles = [
    "activity.svg",
"airplay.svg",
"alert-circle.svg",
"alert-octagon.svg",
"alert-triangle.svg",
"align-center.svg",
"align-justify.svg",
"align-left.svg",
"align-right.svg",
"anchor.svg",
"aperture.svg",
"archive.svg",
"arrow-down-circle.svg",
"arrow-down-left.svg",
"arrow-down-right.svg",
"arrow-down.svg",
"arrow-left-circle.svg",
"arrow-left.svg",
"arrow-right-circle.svg",
"arrow-right.svg",
"arrow-up-circle.svg",
"arrow-up-left.svg",
"arrow-up-right.svg",
"arrow-up.svg",
"at-sign.svg",
"award.svg",
"bar-chart-2.svg",
"bar-chart.svg",
"battery-charging.svg",
"battery.svg",
"bell-off.svg",
"bell.svg",
"bluetooth.svg",
"bold.svg",
"bookmark.svg",
"book-open.svg",
"book.svg",
"box.svg",
"briefcase.svg",
"calendar.svg",
"camera-off.svg",
"camera.svg",
"cast.svg",
"check-circle.svg",
"check-square.svg",
"check.svg",
"chevron-down.svg",
"chevron-left.svg",
"chevron-right.svg",
"chevrons-down.svg",
"chevrons-left.svg",
"chevrons-right.svg",
"chevrons-up.svg",
"chevron-up.svg",
"chrome.svg",
"circle.svg",
"clipboard.svg",
"clock.svg",
"cloud-drizzle.svg",
"cloud-lightning.svg",
"cloud-off.svg",
"cloud-rain.svg",
"cloud-snow.svg",
"cloud.svg",
"codepen.svg",
"codesandbox.svg",
"code.svg",
"coffee.svg",
"columns.svg",
"command.svg",
"compass.svg",
"copy.svg",
"corner-down-left.svg",
"corner-down-right.svg",
"corner-left-down.svg",
"corner-left-up.svg",
"corner-right-down.svg",
"corner-right-up.svg",
"corner-up-left.svg",
"corner-up-right.svg",
"cpu.svg",
"credit-card.svg",
"crop.svg",
"crosshair.svg",
"database.svg",
"delete.svg",
"disc.svg",
"divide-circle.svg",
"divide-square.svg",
"divide.svg",
"dollar-sign.svg",
"download-cloud.svg",
"download.svg",
"dribbble.svg",
"droplet.svg",
"edit-2.svg",
"edit-3.svg",
"edit.svg",
"external-link.svg",
"eye-off.svg",
"eye.svg",
"facebook.svg",
"fast-forward.svg",
"feather.svg",
"figma.svg",
"file-minus.svg",
"file-plus.svg",
"file.svg",
"file-text.svg",
"film.svg",
"filter.svg",
"flag.svg",
"folder-minus.svg",
"folder-plus.svg",
"folder.svg",
"framer.svg",
"frown.svg",
"gift.svg",
"git-branch.svg",
"git-commit.svg",
"github.svg",
"gitlab.svg",
"git-merge.svg",
"git-pull-request.svg",
"globe.svg",
"grid.svg",
"hard-drive.svg",
"hash.svg",
"headphones.svg",
"heart.svg",
"help-circle.svg",
"hexagon.svg",
"home.svg",
"image.svg",
"inbox.svg",
"info.svg",
"instagram.svg",
"italic.svg",
"key.svg",
"layers.svg",
"layout.svg",
"life-buoy.svg",
"link-2.svg",
"linkedin.svg",
"link.svg",
"list.svg",
"list.txt",
"loader.svg",
"lock.svg",
"log-in.svg",
"log-out.svg",
"mail.svg",
"map-pin.svg",
"map.svg",
"maximize-2.svg",
"maximize.svg",
"meh.svg",
"menu.svg",
"message-circle.svg",
"message-square.svg",
"mic-off.svg",
"mic.svg",
"minimize-2.svg",
"minimize.svg",
"minus-circle.svg",
"minus-square.svg",
"minus.svg",
"monitor.svg",
"moon.svg",
"more-horizontal.svg",
"more-vertical.svg",
"mouse-pointer.svg",
"move.svg",
"music.svg",
"navigation-2.svg",
"navigation.svg",
"octagon.svg",
"package.svg",
"paperclip.svg",
"pause-circle.svg",
"pause.svg",
"pen-tool.svg",
"percent.svg",
"phone-call.svg",
"phone-forwarded.svg",
"phone-incoming.svg",
"phone-missed.svg",
"phone-off.svg",
"phone-outgoing.svg",
"phone.svg",
"pie-chart.svg",
"play-circle.svg",
"play.svg",
"plus-circle.svg",
"plus-square.svg",
"plus.svg",
"pocket.svg",
"power.svg",
"printer.svg",
"radio.svg",
"refresh-ccw.svg",
"refresh-cw.svg",
"repeat.svg",
"rewind.svg",
"rotate-ccw.svg",
"rotate-cw.svg",
"rss.svg",
"save.svg",
"scissors.svg",
"search.svg",
"send.svg",
"server.svg",
"settings.svg",
"share-2.svg",
"share.svg",
"shield-off.svg",
"shield.svg",
"shopping-bag.svg",
"shopping-cart.svg",
"shuffle.svg",
"sidebar.svg",
"skip-back.svg",
"skip-forward.svg",
"slack.svg",
"slash.svg",
"sliders.svg",
"smartphone.svg",
"smile.svg",
"speaker.svg",
"square.svg",
"star.svg",
"stop-circle.svg",
"sunrise.svg",
"sunset.svg",
"sun.svg",
"table.svg",
"tablet.svg",
"tag.svg",
"target.svg",
"terminal.svg",
"thermometer.svg",
"thumbs-down.svg",
"thumbs-up.svg",
"toggle-left.svg",
"toggle-right.svg",
"tool.svg",
"trash-2.svg",
"trash.svg",
"trello.svg",
"trending-down.svg",
"trending-up.svg",
"triangle.svg",
"truck.svg",
"tv.svg",
"twitch.svg",
"twitter.svg",
"type.svg",
"umbrella.svg",
"underline.svg",
"unlock.svg",
"upload-cloud.svg",
"upload.svg",
"user-check.svg",
"user-minus.svg",
"user-plus.svg",
"users.svg",
"user.svg",
"user-x.svg",
"video-off.svg",
"video.svg",
"voicemail.svg",
"volume-1.svg",
"volume-2.svg",
"volume.svg",
"volume-x.svg",
"watch.svg",
"wifi-off.svg",
"wifi.svg",
"wind.svg",
"x-circle.svg",
"x-octagon.svg",
"x-square.svg",
"x.svg",
"youtube.svg",
"zap-off.svg",
"zap.svg",
"zoom-in.svg",
"zoom-out.svg"
];
