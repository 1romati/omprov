// 8. Uppdatera bilinformation (3p)
// Skriv en funktion updateCarInfo som tar ett bilobjekt
// och returnerar en kopia av objektet med uppdaterad information.
// Funktionen ska tillåta att användaren skickar in ny information
// för namn, modell och hastighet för bilen. Om någon av dessa
// värden finns med som parameter, ska de ersätta de befintliga värdena i objektet.

const car = {
  name: "Tesla",
  model: "Model S",
  speed: 150,
};

const carObject = { newName: "Ford", newModel: "Focus", newSpeed: 200 };

function updateCarInfo(carObject, newName, newModel, newSpeed) {
  // Din kod här

  return { ...carObject, ...newName, ...newModel, ...newSpeed };
}

console.log(updateCarInfo(carObject));
