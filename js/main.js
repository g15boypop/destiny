


function onlyNumber(obj, id)
{
    obj.value=obj.value.replace(/[^0-9]/,'');
    document.getElementById(id).innerHTML = obj.value;
    // console.log();
}

function onlyLetters(obj, id)
{
    obj.value=obj.value.replace(/[^a-z]/,'');
    document.getElementById(id).innerHTML = obj.value;
    // console.log();
}

// ---------------------------------mail check-------------------------------

function verifiermail(mail) {
	if ((mail.indexOf("@")>=0)&&(mail.indexOf(".")>=0)) {
    document.getElementById("errormail").style.visibility="hidden";
	} else {
      document.getElementById("errormail").style.visibility="visible";
	}
}
// ----------------------------lorem change-----------------------------------

function textTransform() {
    document.getElementById("titlepage").innerHTML = "Destiny";
    document.getElementById("leftnavbar").innerHTML = "Destiny-up";
    document.getElementById("rightnavbar").innerHTML = "Form";
    document.getElementById("titre1").innerHTML = "DESTINY";
    document.getElementById("titre2").innerHTML = "Game";
    document.getElementById("sous-titre").innerHTML = "SF FPS";
    document.getElementById("titreintro").innerHTML = "Gameplay";
    document.getElementById("textcenter").innerHTML = "Destiny est un jeu de tir à la première personne créer en 2014. Ce jeu posséde une communauté de fan assez important compte tenu de sa création récente comparé à des franchise comme GTA ou Call Of Duty qui sont présent depuis une décennie voir plus. C'est un jeu se jouant sur plusieurs planétes et donc des environnement différents, vous devez affrontez des adversaires extraterrestres de forme et puissance variées ou bien jouer en joueurs contre joueurs.";
    document.getElementById("textleft").innerHTML = "HISTOIRE : Tout a changé avec l'arrivée du Voyageur. Il insuffla une vie nouvelle aux planètes de notre système. Des pluies lavèrent la poussière de Mars. Un air neuf purifia le ciel de Vénus. Peu après, l'humanité se précipita à la conquête de ces mondes nouvellement habitables. C'était une ère de miracles, un grand Âge d'or. Vous pouvez utilisé trois personnages qui ont chacun trois game play différents ce qui fait neuf façon de jouer. Les destinations sont déblocables au fur et à mesure du jeu. Vous pouvez aller sur la terre, la lune , Vénus, mars mais aussi sur certains vaisseaux ennemis.";
    document.getElementById("textright").innerHTML ="Il y a 3 types de gardiens que vous pouvait incarner. Les chasseurs : Doigt sur la détente et couteau à portée de main, les Chasseurs arpentent les champs de bataille comme s'ils traquaient constamment leur proie. Rusés et impitoyables, ils sont assoiffés de découvertes, leurs pouvoirs guidés seulement par leur instinct. Les Titans : Ils font ployer leurs ennemis sous leurs poings électriques. Leurs armures et boucliers les rendent presques invincibles. Nous les voyons souvent comme des chevaliers anonymes qui nous protègent contre nos ennemis, mais ils sont emplis d'une force qui confine au divin. Les Arcanistes : Ayant appris à manipuler la Lumière du Voyageur comme nul autre avant eux, les Arcanistes ont su faire de leur érudition une arme. Ils ne se contentent pas d'étudier des forces théoriques. Ce sont des guerriers mystiques, capables de semer la destruction.";
    document.getElementById("newsletter").innerHTML ="Abonnez vous à notre newsletters";
    document.getElementById("textbottom").innerHTML = "Vous voulez ne rien manquer des évenements quotidiens et hebdomadaires afin d'améliorer un maximum votre personage? Inscrivez vous et faites de votre expérience destiny un tremplin vers des niveaux de lumière élevés sans perdre de temps. concrétement : L'emplacement de Xur à la tour le week-end vous sera révèlé, aussi l'heure et l'emplacement des évenements sur les planétes. Bref nous vous proposons un moyen efficace pour augmenter votre niveau rapidement et profiter au mieux de l'expérience du jeu";

}

// ---------------------------------btn hide show-------------------------------

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

// --------------------------------function envoyer----------------------------

// function("envoyerform"){
// if (document.formulaire1.varName.value == ""){
//   document.getElementById("emptyname").innerHTML = "veuillez remplir ce champ";
//   return false;
// }
// if (document.formulaire1.varGender.value == ""){
//   document.getElementById("emptygender").innerHTML = "veuillez remplir ce champ";
//   return false;
// }
// if (document.formulaire1.varCountry.value == ""){
//   document.getElementById("emptycountry").innerHTML = "veuillez remplir ce champ";
//   return false;
// }
// if (document.formulaire1.varMail.value == ""){
//   document.getElementById("emptymail").innerHTML = "veuillez remplir ce champ";
//   return false;
// }
// if (document.formulaire2.varPrenom.value == ""){
//   document.getElementById("emptyprenom").innerHTML = "veuillez remplir ce champ";
//   return false;
// }
// if (document.formulaire2.varAge.value == ""){
//   document.getElementById("emptyage").innerHTML = "veuillez remplir ce champ";
//   return false;
// }
// if (document.formulaire2.varTown.value == ""){
//   document.getElementById("emptytown").innerHTML = "veuillez remplir ce champ";
//   return false;
// }
//
//
// }
