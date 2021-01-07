// AutoTranslate V0.1
// Renovate Software LTD 2021

window.onload = (function(){start()}); // Only load the script on page load..
function start () {
console.log("AutoTranslate Version 0.1") // Version


let language = window.navigator.userLanguage || window.navigator.language; // Get the browser language.

// English UK
if (language == "en-GB") {
console.log(language + " - No need to change the page as it is already English!");
GerToEnglish();
}

// English US
else if (language == "en-US") {
console.log(language + " - No need to change the page as it is already English!");
GerToEnglish();
}

// German
else if (language == "de") {
EngToGerman();
}

// Not supported.
else {
console.log("Unsupported language: " + language)
}
}

// Translate German To English
function GerToEnglish() {
console.log("Translating German to English..");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Hilfe uns bauen das zukunft.","Help us build the future.");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Jetzt in sicherer entfernung.","Now at a safe distance.");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Sie befinden sich auf unserer Desktop-freundlichen Website.","You're on our desktop friendly website.");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Hallo","Hello");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("hallo","hello");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Meine","My");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("meine","my");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Brudda","Brother");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("brudda","brother");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Bauen","Build");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("bauen","build");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Das","The");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("das","the");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Zukunft","Future");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("zukunft","future");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Zuhause","Home");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("zuhause","home");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Über","About");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Über","about");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Kontakt","Contact");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("kontakt","contact");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Hilfe","Help");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("hilfe","help");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Konto","Account");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("konto","account");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Sie","You");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("sie","you");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Sicherheit","Security");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("sicherheit","security");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Mehr","More");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("mehr","more");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Uns","Us");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("uns","us");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Zum","For");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("zum","for");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Jetzt","Now");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("jetzt","now");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Beim","At");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("beim","at");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Sicher","Safe");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("sicher","safe");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Ein","A");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("ein","a");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Herzlich willkommen","Welcome");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("herzlich willkommen","welcome");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Zuruck","Back");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("zuruck","back");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Nicht","Not");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("nicht","not");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Zeichen","Sign");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("zeichen","sign");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Aus","Out");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("aus","out");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Behalten","Keep");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("behalten","keep");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Suchen","Looking");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("suchen","looking");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Wir","We");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("wir","we");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Vielleicht","Perhaps");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("vielleicht","perhaps");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Die Info","Info");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("die info","info");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Ja","Yes");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("ja","yes");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Neine","No");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("neine","no");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Ihre","Your");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("ihre","your");	
}


// Translate English to German!
function EngToGerman() {
console.log("Translating English to German..");
console.log("Diese Seite verwendet AutoTranslate Version 0.1. Ihre Seite wurde vom Englischen ins Deutsche übersetzt. Bitte erwarten Sie Probleme.")
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Help us build the future.","Hilfe uns bauen das zukunft.");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Now at a safe distance.","Jetzt in sicherer entfernung.");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("You're on our desktop friendly website.","Sie befinden sich auf unserer Desktop-freundlichen Website.");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Hello","Hallo");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("hello","hallo");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("My","Meine");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("my","meine");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Brother","Brudda");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("brother","brudda");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Build","Bauen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("build","bauen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("The","Das");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("the","das");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Future","Zukunft");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("future","zukunft");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Home","Zuhause");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("home","zuhause");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("About","Über");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("about","Über");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Contact","Kontakt");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("contact","kontakt");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Help","Hilfe");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("help","hilfe");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Account","Konto");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("account","konto");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("You","Sie");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("you","sie");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Security","Sicherheit");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("security","sicherheit");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("More","Mehr");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("more","mehr");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Us","Uns");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("us","uns");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("For","Zum");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("for","zum");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Now","Jetzt");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("now","jetzt");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("At","Beim");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("at","beim");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Safe","Sicher");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("safe","sicher");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("A","Ein");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("a","ein");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Welcome","Herzlich willkommen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("welcome","herzlich willkommen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Back","Zuruck");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("back","zuruck");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Not","Nicht");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("not","nicht");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Sign","Zeichen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("sign","zeichen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Out","Aus");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("out","aus");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Keep","Behalten");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("keep","behalten");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Looking","Suchen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("looking","suchen");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("We","Wir");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("we","wir");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Perhaps","Vielleicht");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("perhaps","vielleicht");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Info","Die Info");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("info","die info");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Yes","Ja");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("yes","ja");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("No","Neine");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("no","neine");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Your","Ihre");
document.getElementById("AutoTranslate").innerHTML = String(document.getElementById("AutoTranslate").innerHTML).replace("Your","ihre");
}