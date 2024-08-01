document.getElementById('prediction-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const numbers = document.getElementById('numbers').value;
    const something = document.getElementById('something').value;
    
    // Send a POST request to the Flask server
    const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            numbers: parseInt(numbers),
            something: parseInt(something)
        })
    });
    
    // Parse the JSON response
    const result = await response.json();
    
    // Display the prediction result
    document.getElementById('result').innerText = `Prediction: ${result.prediction}`;
});
