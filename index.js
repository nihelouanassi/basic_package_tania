// Fonction qui retour Hello World!
// La fonction doit être exporter
function showText() {
   let text = "Hello World!";

   return text;
}


function showText1() {
   let text = "Hello World2!";

   return text;
} 
module.exports = {showText,showText1};