// Eco-Tip Feature
const ecoTips = [
    "Use reusable bags for shopping to reduce plastic waste.",
    "Turn off lights and electronics when not in use to save energy.",
    "Choose plant-based meals more often to reduce your carbon footprint.",
    "Use a refillable water bottle instead of buying bottled water.",
    "Compost food scraps to reduce landfill waste and create nutrient-rich soil."
];

function displayRandomEcoTip() {
    const tipElement = document.getElementById('ecoTip');
    const randomIndex = Math.floor(Math.random() * ecoTips.length);
    tipElement.textContent = ecoTips[randomIndex];
    tipElement.style.display = 'block';
}
// Click to reveal an interesting fact button
document.getElementById('revealButton').addEventListener('click', function() {
    var quote = document.getElementById('ecoQuote');
    if (quote.style.display === 'none' || quote.style.display === '') {
        quote.style.display = 'block';
        this.textContent = 'Hide eco fact';
    } else {
        quote.style.display = 'none';
        this.textContent = 'Click to reveal an interesting eco fact!';
    }
});

// Carbon Footprint Quick Calculator
function calculateFootprint(event) {
    event.preventDefault(); // Prevent form submission

    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const gas = parseFloat(document.getElementById('gas').value) || 0;
    const mileage = parseFloat(document.getElementById('mileage').value) || 0;

    // Simplified calculation
    const footprint = (electricity * 0.0005 * 12) + (gas * 0.005 * 12) + (mileage * 0.0004);
    
    const resultElement = document.getElementById('calculatorResult');
    resultElement.textContent = `Your estimated annual carbon footprint is ${footprint.toFixed(2)} metric tons of CO2.`;
    resultElement.style.display = 'block';
}

// Initialize interactive elements if they exist on the page
document.addEventListener('DOMContentLoaded', function() {
    const ecoTipButton = document.getElementById('ecoTipButton');
    if (ecoTipButton) {
        ecoTipButton.addEventListener('click', displayRandomEcoTip);
    }

    const calculatorForm = document.getElementById('carbonCalculator');
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', calculateFootprint);
    }
});

// Contact form submission 
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form.contact-form');
    const submissionMessage = document.getElementById('submissionMessage');
  
    form.addEventListener('submit', (e) => {
      submissionMessage.textContent = 'Thank you for submitting your message!';
      return false;
    });
  });