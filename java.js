function calculateCO2() {
    const distance = document.getElementById("distance").value;
    const carEmission = document.getElementById("carEmission").value;
    const vehicleType = document.getElementById("vehicle").value;

    if (distance && carEmission) {
        let totalCO2 = 0;

        if (vehicleType === "car") {
            totalCO2 = distance * carEmission;
        } else if (vehicleType === "bus") {
            // Példa busz szén-dioxid kibocsátás: 70g/km
            totalCO2 = distance * 70; 
        } else if (vehicleType === "bike") {
            // Bicikli nem bocsát ki CO2-t, de mondhatjuk, hogy nulla kibocsátás.
            totalCO2 = 0; 
        }

        document.getElementById("result").innerText = 
            vehicleType === "bike" ? 
            "A napi szén-dioxid kibocsátásod: 0 g CO₂ (bicikli)" :
            `A napi szén-dioxid kibocsátásod: ${totalCO2} g CO₂`;
    } else {
        document.getElementById("result").innerText = "Kérlek, töltsd ki az összes mezőt!";
    }
}

calculateCO2()