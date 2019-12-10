
window.onscroll = function () {
    var accueil = window.document.getElementById("accueil");
    var scrolltop = window.scrollY;
    var titre = accueil.getElementsByClassName("titre")[0];
    var titreWidth = 100 - scrolltop / 10;
    if (titreWidth < 0) {
        titreWidth = 0;
    }
    titre.style.width= titreWidth+"%" 
}
