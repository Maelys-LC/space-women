
// -------------------------------- Accueil------------------------------------
window.onscroll = function () {
    var accueil = window.document.getElementById("accueil");
    var scrollScreen = window.scrollY/window.innerHeight; // on divise le nombre de pixel où on a scroll par la taille en pixel de notre écran pour savoir le nombre d'écran qu'on doit a scroll
    var scrollVH = scrollScreen * 100; // on multiplie notre nombre d'écran scrollé par 100 pour l'avoir en VH
    var titre = accueil.getElementsByClassName("titre")[0];
    var titreWidth = 100 - scrollVH; // pour modifier la largeur de la div titre en fonction de combien on a scroll
    var photo1 = accueil.getElementsByClassName("photo1")[0];
    var photo1Width = 220 - scrollVH; // pour modifier la largeur de la div photo1 en fonction de combien on a scroll
    var photo2 = accueil.getElementsByClassName("photo2")[0];
    var photo2Width = 340 - scrollVH; // pour modifier la largeur de la div photo2 en fonction de combien on a scroll
    

    if (titreWidth < 0) {
        titreWidth = 0;
    }    

    if (photo1Width > 100) {
        photo1Width = 100;
    }

    if (photo1Width < 0) {
        photo1Width = 0;
    }

    
    if (photo2Width > 100) {
        photo2Width = 100;
    }

    if (photo2Width < 0) {
        photo2Width = 0;
    }

   

    if(window.innerWidth > 600) {
        titre.style.width = titreWidth + "%";
        photo1.style.width = photo1Width + "%";
        photo2.style.width = photo2Width + "%";
    } 

    // ------------------------ Menu --------------------------
    var menu = window.document.getElementById("navigation");

    if (scrollVH < 440) {
        menu.style.position = "sticky";
    } else {
        menu.style.position = "fixed";
    }
}




