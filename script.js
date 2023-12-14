const cropImages = {
  'Corn': 'corn.PNG',
  'Rice': 'rice.PNG',
  'Lemon': 'lemon.PNG',
  'Apple': 'apple.PNG',
  'Banana': 'banana.PNG',
  'Pineapple': 'pineapple.PNG',
  'Wheat': 'wheat.PNG',
  'Tomato': 'tomato.PNG',
  'Grapes': 'grapes.PNG',
  'Mango': 'mango.PNG'

};


document.getElementById('recommendationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let nitrogen = parseFloat(document.getElementById('nitrogen').value);
    let phosphorus = parseFloat(document.getElementById('phosphorus').value);
    let potassium = parseFloat(document.getElementById('potassium').value);
    let temperature = parseFloat(document.getElementById('temperature').value);
    let humindity = parseFloat(document.getElementById('humidity').value);
    let rainfall = parseFloat(document.getElementById('rainfall').value);
    // Get values for other input fields in a similar manner
  
    // Perform recommendation logic based on input values
    let recommendedCrop = getRecommendedCrop(nitrogen, phosphorus, potassium, temperature, humidity);
    let imageUrl = cropImages[recommendedCrop];
    
 // Show loading screen for 5 seconds
 document.getElementById('loadingScreen').classList.remove('hidden');
 setTimeout(function() {
   document.getElementById('loadingScreen').classList.add('hidden');

    
    // Function to display the popup
function displayPopup(text, imageUrl) {
  document.getElementById('popupText').innerText = text;
  document.getElementById('cropImage').src = imageUrl;
  document.getElementById('cropImage').style.display = 'block';
  document.getElementById('popup').style.display = 'flex';
}

  document.getElementById('recommendedCrop').innerText = recommendedCrop;
  document.getElementById('resultSection').classList.remove('hidden');
  displayPopup("Your recommended crop is: " + recommendedCrop, imageUrl);}, 5000); // 5 seconds timeout



    
  });
  
  function getRecommendedCrop(nitrogen, phosphorus, potassium, temperature, humidity) {
    if (nitrogen >= 5 && phosphorus>=5 && potassium>=5 && temperature>=20  ) {
      return 'Corn';
    } else if (nitrogen <=6 && phosphorus >=5 && potassium<5 && temperature<30 ) {
      return 'Rice';
    }
    else if (nitrogen <= 5 && phosphorus> 5 && potassium <5 && temperature <23 ) {
        return 'Wheat';
      }
      else if (nitrogen <=7 && phosphorus>=3 && potassium <= 5 && temperature<20 ) {
        return 'Apple';
      } else if (nitrogen <=6 && phosphorus>=4 && potassium<=4 && temperature<=25 ) {
        return 'Tomato';
      } else if (nitrogen <=4 && phosphorus>5 && potassium<=6 && temperature<=26 ) {
        return 'Banana';
      } else if (nitrogen <=5 && phosphorus>=2 && potassium<=3 && temperature<=35 ) {
        return 'Orange';
      } else if (nitrogen <=4 && phosphorus>=1 && potassium<=7 && temperature<=29 ) {
        return 'Lemon';
      } else if (nitrogen <=6 && phosphorus>= 5 && potassium<=8 && temperature<=42 ) {
        return 'Carrot';
      } else if (nitrogen <=6 && phosphorus>=3 && potassium<=4 && temperature<=22 ) {
        return 'Cucumber';
      } else if (nitrogen <=5 && phosphorus>=2 && potassium<=4 && temperature<=35 ) {
        return 'Grapes';
      } else if (nitrogen <=7 && phosphorus>=1 && potassium<=6 && temperature<=26 ) {
        return 'Pineapple';
      } else if (nitrogen <=8 && phosphorus>=5 && potassium<=5 && temperature<=34 ) {
        return 'Peach';
      } else if (nitrogen <=6 && phosphorus>=2 && potassium<=4 && temperature<=19 ) {
        return 'Strawberry';
      } else if (nitrogen <=4 && phosphorus>=2 && potassium<=7 && temperature<=20 ) {
        return 'Watermelon';
      } else if (nitrogen <=5 && phosphorus>=5 && potassium<=4 && temperature<=40 ) {
        return 'Mango';
      } else if (nitrogen <=4 && phosphorus>=1 && potassium<=5 && temperature<=24 ) {
        return 'Papaya';
      } else if (nitrogen <=2 && phosphorus>=2 && potassium<=5 && temperature<=25 ) {
        return 'Spinach';
      } else if (nitrogen <=4 && phosphorus>=3 && potassium<=7 && temperature<=18 ) {
        return 'Bell Pepper';
      } 
    else {
      return 'No Crop Found';
    }
  }