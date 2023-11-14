
let calculateButton = document.getElementById("calculate")

calculateButton.addEventListener("click", function() {
    let lengthCount = document.getElementById("length-count").valueAsNumber
    let widthCount = document.getElementById("width-count").valueAsNumber
    let clothCount = document.getElementById("cloth-count").valueAsNumber
    let clothColour = document.getElementById("cloth-colour")
    let clothDesign = document.getElementById("cloth-design")
    let dizainoSavybe = clothDesign.options[clothDesign.selectedIndex];
    let dizainoSavybesKaina = +dizainoSavybe.dataset.price;
    

    let kvadratoKaina = 8
    let kvadratai = (lengthCount * widthCount).toFixed(2)
    let kaina = (kvadratoKaina * kvadratai) * clothCount

    if (kvadratai >= 5) {
        kaina = kaina * 0.95
    } else {
        kaina
    }

    let galutineKaina = kaina + (dizainoSavybesKaina * clothCount)

    let results = document.getElementById("results")
    results.innerHTML = `<p><strong>Rulono kv.m:</strong> ${kvadratai}</p>`
    results.innerHTML += `<p><strong>Rulono(-ų) kiekis:</strong> ${clothCount}</p>`
    results.innerHTML += `<p><strong>Rulono(-ų) spalva:</strong> ${clothColour.value}</p>`
    if (clothDesign.value == "Taškuotas" || clothDesign.value == "Dryžuotas") {
         results.innerHTML += `<p><strong>Dizainas:</strong> ${clothDesign.value}. Už jį papildomai sumokate: ${dizainoSavybesKaina * clothCount} Eur.</p>`
    } else {
        results.innerHTML += `<p><strong>Dizainas:</strong> ${clothDesign.value}.`
    }
   
    if (kvadratai >= 5) {
        results.innerHTML += `<p class = "spalva">Jums pritaikėme 5 proc. nuolaidą. Pritaikytas nuolaidos dydis: ${(((kvadratoKaina * kvadratai) * clothCount) * 0.05).toFixed(2)} Eur.</p>`
    } else {
        results.innerHTML += `<p class = "spalva">Iki nuolaidos suteikimo Jums trūksta ${(5 - kvadratai).toFixed(2)} kv.m</p>`
    }

    results.innerHTML += `<p><strong>Jūsų užsakymo kaina yra:</strong> ${galutineKaina.toFixed(2)} Eur.</p>`
})

// Klaidos aprašymas
document.getElementById("length-count").addEventListener("keyup", function (event) {
    let inputValue = event.target.valueAsNumber
    if (inputValue < 0) {
        event.target.classList.add("error")
        event.target.nextElementSibling.classList.add("show")
    } else {
        event.target.classList.remove("error")
        event.target.nextElementSibling.classList.remove("show")
    }
})
document.getElementById("width-count").addEventListener("keyup", function (event) {
    let inputValue = event.target.valueAsNumber
    if (inputValue < 0) {
        event.target.classList.add("error")
        event.target.nextElementSibling.classList.add("show")
    } else {
        event.target.classList.remove("error")
        event.target.nextElementSibling.classList.remove("show")
    }
})
document.getElementById("cloth-count").addEventListener("keyup", function (event) {
    let inputValue = event.target.valueAsNumber
    if (inputValue < 0) {
        event.target.classList.add("error")
        event.target.nextElementSibling.classList.add("show")
    } else {
        event.target.classList.remove("error")
        event.target.nextElementSibling.classList.remove("show")
    }
})

//Reset mygtukas
document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("length-count").valueAsNumber = 0
    document.getElementById("width-count").valueAsNumber = 0
    document.getElementById("cloth-count").valueAsNumber = 0
    document.getElementById("cloth-colour").value = "Juoda"
    document.getElementById("cloth-design").value = "Be dizaino"
    document.getElementById("results").innerHTML = "<p>Kol kas nieko nėra, įveskite informaciją, kad sužinotumėte kainą.</p>"

})