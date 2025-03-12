function calculateCO2() {
    const tav = document.getElementById("tavolsag").value;
    const auto = document.getElementById("kibocsat").value;
    const tipus = document.getElementById("jarmu").value;

    if (tav && auto) {
        let totalCO2 = 0;

        if (tipus === "car") {
            totalCO2 = tav * auto;
        } else if (tipus === "bus") {
            // Példa busz szén-dioxid kibocsátás: 70g/km
            totalCO2 = tav * 70; 
        } else if (tipus === "bike") {
            // Bicikli nem bocsát ki CO2-t, de mondhatjuk, hogy nulla kibocsátás.
            totalCO2 = 0; 
        }

        document.getElementById("result").innerText = 
            tipus === "bike" ? 
            "A napi szén-dioxid kibocsátásod: 0 g CO₂ (bicikli)" :
            `A napi szén-dioxid kibocsátásod: ${totalCO2} g CO₂`;
    } else {
        document.getElementById("result").innerText = "Kérlek, töltsd ki az összes mezőt!";
    }
}

calculateCO2()