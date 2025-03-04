function calcola() {
    const tipo = document.getElementById("tipo").value;
    const valore = parseFloat(document.getElementById("valore").value);

    if (isNaN(valore) || valore <= 0) {
        alert("Inserisci un valore valido.");
        return;
    }

    fetch("/calcola", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tipo, valore })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("risultato").textContent = data.risultato;
    })
    .catch(error => console.error("Errore:", error));
}
