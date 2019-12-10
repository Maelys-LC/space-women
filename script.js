
window.onscroll = function () {
    var accueil = window.document.getElementById("accueil");
    var scrollScreen = window.scrollY/window.innerHeight; // on divise le nombre de pixel où on a scroll par la taille en pixel de notre écran pour savoir le nombre d'écran qu'on doit a scroll
    var scrollVH = scrollScreen * 100; // on multiplie notre nombre d'écran scrollé par 100 pour l'avoir en VH
    var titre = accueil.getElementsByClassName("titre")[0];
    var titreWidth = 100 - scrollVH;
    var photo1 = accueil.getElementsByClassName("photo1")[0];
    var photo1Width = 200 - scrollVH;
    var photo2 = accueil.getElementsByClassName("photo2")[0];
    var photo2Width = 300 - scrollVH;

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
