# Werner-Seelenbinder-Gedenkturnier

![!large](./galerier_stolpersteine_2026/opener.jpg)

An unserer Schule waren 25 Vereine aus ganz Nord-Ost-Mitteldeutschland zu besuch, um beim Werner-Seelenbinder-Gedenkturnier die besten Kämpfer und Vereine zu ermitteln. In den verschiedenen Gewichtsklassen der unter 14-Jährigen (über 12 Jahre alt), der unter 17-Jährigen und unter 20-Jährigen, traten ingesamt 159 Kämpfer auf vier Matten an. Alle Turnierdetails sind in der [Ringerdatenbank](https://turniere.ringerdb.de/25863) einsehbar.

Von unserer Schule und den vielen Sportlern unseres Trainingsstützpunktes wurde das Turnier zusammen mit dem [VVN-VdA](https://vvn-vda.de/) veranstaltet und vom [TUS Hellersdorf](https://tus-hellersdorf.de/ringen-3/) ausgerichtet. Wir legten dabei großen Wert auf ein Gedenken, dass dem Wirken und überlieferten Anliegen Werner Seelenbindes einerseits und den Ansprüchen eines professionellen Sportereignisses andererseits gerecht wird.


<!-- ===== Galerie: Anfang ===== -->
<div id="md-galerie" class="mdg"></div>
<style>
.mdg{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;margin:1em 0}
.mdg figure{margin:0;cursor:pointer;overflow:hidden;border-radius:6px;background:#eee;position:relative;aspect-ratio:4/3}
.mdg figure img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .25s}
.mdg figure:hover img{transform:scale(1.05)}
.mdg figcaption{position:absolute;left:0;right:0;bottom:0;padding:4px 8px;font-size:.8em;color:#fff;background:linear-gradient(transparent,rgba(0,0,0,.65))}
.mdg-lb{position:fixed;inset:0;background:rgba(0,0,0,.92);display:none;align-items:center;justify-content:center;flex-direction:column;z-index:9999}
.mdg-lb.offen{display:flex}
.mdg-lb img{max-width:92vw;max-height:82vh;object-fit:contain;border-radius:4px;user-select:none}
.mdg-lb .mdg-text{color:#eee;margin-top:12px;font-size:.95em;text-align:center;max-width:90vw}
.mdg-lb button{position:absolute;background:rgba(255,255,255,.12);color:#fff;border:0;font-size:28px;width:48px;height:48px;border-radius:50%;cursor:pointer;line-height:1}
.mdg-lb button:hover{background:rgba(255,255,255,.3)}
.mdg-lb .mdg-zu{top:16px;right:16px}
.mdg-lb .mdg-zurueck{left:16px;top:50%;transform:translateY(-50%)}
.mdg-lb .mdg-weiter{right:16px;top:50%;transform:translateY(-50%)}
</style>
<script>
(function () {
  /* ===== HIER DIE BILDER EINTRAGEN =====
     src   = Pfad oder URL zum Bild (Pflicht)
     thumb = optionales kleineres Vorschaubild (sonst wird src genutzt)
     titel = optionale Bildunterschrift                                  */
  var BILDER = [
    { src: "galerier_stolpersteine_2026/01b.jpg", titel: "Erstes Bild" },
    { src: "galerier_stolpersteine_2026/01a.jpg", titel: "Erstes Bild" },
    { src: "galerier_stolpersteine_2026/01.jpg", titel: "Erstes Bild" },
    { src: "galerier_stolpersteine_2026/02.jpg", titel: "Erstes Bild" },
    { src: "galerier_stolpersteine_2026/03.jpg", titel: "Erstes Bild" },
    { src: "galerier_stolpersteine_2026/04.jpg", titel: "Erstes Bild" },
    { src: "galerier_stolpersteine_2026/05.jpg", titel: "Erstes Bild" },
    { src: "galerier_stolpersteine_2026/07.jpg", titel: "Erstes Bild" },
    { src: "galerier_stolpersteine_2026/08.jpg", titel: "Erstes Bild" },
    { src: "galerier_stolpersteine_2026/09.jpg", titel: "Erstes Bild" },    
    { src: "galerier_stolpersteine_2026/10.jpg", titel: "Erstes Bild" },
    { src: "galerier_stolpersteine_2026/11.jpg", titel: "Erstes Bild" },
    { src: "galerier_stolpersteine_2026/12b.jpg", titel: "Erstes Bild" },
    { src: "galerier_stolpersteine_2026/13.jpg", titel: "Erstes Bild" }
  ];
  /* ===================================== */
  var box = document.getElementById("md-galerie");
  if (!box) return;
  var aktuell = 0;
  BILDER.forEach(function (b, i) {
    var fig = document.createElement("figure");
    var img = document.createElement("img");
    img.src = b.thumb || b.src;
    img.alt = b.titel || "Bild " + (i + 1);
    img.loading = "lazy";
    fig.appendChild(img);
    if (b.titel) {
      var cap = document.createElement("figcaption");
      cap.textContent = b.titel;
      fig.appendChild(cap);
    }
    fig.addEventListener("click", function () { oeffnen(i); });
    box.appendChild(fig);
  });
  var lb = document.createElement("div");
  lb.className = "mdg-lb";
  lb.innerHTML =
    '<button class="mdg-zu" aria-label="Schließen">&times;</button>' +
    '<button class="mdg-zurueck" aria-label="Vorheriges Bild">&#8249;</button>' +
    '<img alt="">' +
    '<div class="mdg-text"></div>' +
    '<button class="mdg-weiter" aria-label="Nächstes Bild">&#8250;</button>';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector("img");
  var lbText = lb.querySelector(".mdg-text");
  function zeigen(i) {
    aktuell = (i + BILDER.length) % BILDER.length;
    var b = BILDER[aktuell];
    lbImg.src = b.src;
    lbImg.alt = b.titel || "";
    lbText.textContent = (b.titel ? b.titel + " – " : "") + (aktuell + 1) + " / " + BILDER.length;
  }
  function oeffnen(i) { zeigen(i); lb.classList.add("offen"); document.body.style.overflow = "hidden"; }
  function schliessen() { lb.classList.remove("offen"); document.body.style.overflow = ""; }
  lb.querySelector(".mdg-zu").addEventListener("click", schliessen);
  lb.querySelector(".mdg-zurueck").addEventListener("click", function (e) { e.stopPropagation(); zeigen(aktuell - 1); });
  lb.querySelector(".mdg-weiter").addEventListener("click", function (e) { e.stopPropagation(); zeigen(aktuell + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) schliessen(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("offen")) return;
    if (e.key === "Escape") schliessen();
    if (e.key === "ArrowLeft") zeigen(aktuell - 1);
    if (e.key === "ArrowRight") zeigen(aktuell + 1);
  });
  var startX = null;
  lb.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) zeigen(aktuell + (dx < 0 ? 1 : -1));
    startX = null;
  });
})();
</script>
<!-- ===== Galerie: Ende ===== -->
