
window.onscroll = function () {
    var accueil = window.document.getElementById("accueil");
    var scrolltop = window.scrollY;
    var titre = accueil.getElementsByClassName("titre")[0];
    var titreWidth = 100 - scrolltop / 10;
    var photo1 = accueil.getElementsByClassName("photo1")[0];
    var photo1Width = 200 - scrolltop /10;
    var photo2 = accueil.getElementsByClassName("photo2")[0];
    var photo2Width = 300 - scrolltop /10;

    if (titreWidth < 0) {
        titreWidth = 0;
    }

    titre.style.width = titreWidth + "%";

    if (photo1Width > 100) {
        photo1Width = 100;
    }

    if (photo1Width < 0) {
        photo1Width = 0;
    }

    photo1.style.width = photo1Width + "%";

    if (photo2Width > 100) {
        photo2Width = 100;
    }

    if (photo2Width < 0) {
        photo2Width = 0;
    }

    photo2.style.width = photo2Width + "%";

}
