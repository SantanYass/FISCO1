const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

app.post("/calcola", (req, res) => {
    const { tipo, valore } = req.body;
    let risultato = 0;

    switch (tipo) {
        case "manutenzione":
            risultato = valore * 0.05; // Deducibilità al 5%
            break;
        case "plusvalenze":
            risultato = valore * 0.20; // Plusvalenze tassate al 20%
            break;
        case "compenso_amministratori":
            risultato = valore * 0.80; // Deducibile all’80%
            break;
        case "ammortamenti":
            risultato = valore * 0.10; // Esempio: 10% annuo
            break;
        case "rimanenze":
            risultato = valore * 0.70; // Deducibile al 70%
            break;
        case "crediti_commerciali":
            risultato = valore * 0.50; // Perdite deducibili al 50%
            break;
        default:
            return res.status(400).json({ errore: "Tipo di calcolo non valido" });
    }

    res.json({ risultato: risultato.toFixed(2) });
});

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});
