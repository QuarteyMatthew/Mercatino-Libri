document.getElementById("page-container").innerHTML = ` 
<h1>Lista Movimenti</h1>
<div class="functionality-container">
    <form id="functionality-form" onsubmit="search(event)">
        <div class="search-content">
            <input id="searchInput" type="text" placeholder="Cerca il nome...">
            <button id="searchButton" type="submit">Cerca</button>
        </div>
        <div class="customer-button">
            <button id="sellers-list-button" type="button" ><a href="index.html">Back to Home</a></button>
        </div>
    </form>
</div>
<div id="movimenti-table-container"></div>
<div style="width:100%; display:flex; justify-content:flex-end; margin-top:10px;">
    <button id="elimina-btn">Elimina selezionato</button>
</div>
`;
const API_URL = "https://mercatino-libri.onrender.com"; // DICHIARA FUORI DALLE FUNZIONI

// Funzione per caricare e mostrare i clienti da localStorage
async function loadClienti() {
    const container = document.getElementById("movimenti-table-container");
    let tableHTML = `
        <table id="movimenti-table">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>COGNOME</th>
                    <th>EMAIL</th>
                    <th>NUMERO DI TELEFONO</th>
                    <th>SALDO</th>
                </tr>
            </thead>
            <tbody id="movimenti-table-body"></tbody>
        </table>
    `;
    container.innerHTML = tableHTML;

    const tbody = document.getElementById("movimenti-table-body");
    const response = await fetch(`${API_URL}/api/clienti`);
    const clienti = await response.json();

    clienti.forEach(cliente => {
        const tr = document.createElement("tr");
        tr.classList.add("cliente-row");
        tr.setAttribute("data-id", cliente.idCliente);

        tr.innerHTML = `
            <td>${cliente.name}</td>
            <td>${cliente.surname}</td>
            <td>${cliente.email}</td>
            <td>${cliente.phoneNumb}</td>
            <td>${cliente.saldo}</td>
        `;

        tr.addEventListener("click", async function(e) {
            // Se già selezionato, chiudi la tendina
            if (tr.classList.contains("selected")) {
                tr.classList.remove("selected");
                document.querySelectorAll(".movimenti-row").forEach(e => e.remove());
                return;
            }
            // Deseleziona tutte le altre righe e chiudi eventuali dettagli aperti
            document.querySelectorAll(".cliente-row").forEach(r => r.classList.remove("selected"));
            document.querySelectorAll(".movimenti-row").forEach(e => e.remove());
            tr.classList.add("selected");
            await mostraMovimentiCliente(cliente.idCliente, tr);
        });

        tbody.appendChild(tr);
    });

    // Collega il bottone elimina
    document.getElementById("elimina-btn").onclick = eliminaSelezionati;
}
async function mostraMovimentiCliente(idCliente, tr) {
    // Prendi tutti i libri dal server
    const respLibri = await fetch(`${API_URL}/api/libri`);
    const libri = await respLibri.json();

    // Prendi tutti i clienti (per mostrare i vecchi proprietari)
    const respClienti = await fetch(`${API_URL}/api/clienti`);
    const clienti = await respClienti.json();

    // Libri venduti da questo cliente
    const venduti = libri.filter(l => l.proprietario && l.proprietario.idCliente === idCliente);

    // Libri acquistati da questo cliente
    const acquistati = libri.filter(l => l.acquirente && l.acquirente.idCliente === idCliente);

    // Libri venduti che sono stati rivenduti
    const rivenduti = venduti.filter(l => l.acquirente && l.acquirente.idCliente && l.acquirente.idCliente !== idCliente);

    // Vecchi proprietari dei libri acquistati
    const vecchiProprietari = acquistati.map(l => l.proprietario && l.proprietario.idCliente && l.proprietario.idCliente !== idCliente
        ? clienti.find(c => c.idCliente === l.proprietario.idCliente)
        : null).filter(Boolean);

    // Crea la riga di dettaglio
    const detailTr = document.createElement("tr");
    detailTr.className = "movimenti-row";
    const td = document.createElement("td");
    td.colSpan = 6; // <-- 6 se hai la colonna elimina, 5 se non ce l'hai
    td.innerHTML = `
        <div>
            <strong>Libri venduti:</strong>
            <ul>${venduti.map(l => `<li>${l.titolo} (${l.idLibro})</li>`).join("") || "<li>Nessuno</li>"}</ul>
            <strong>Libri acquistati:</strong>
            <ul>${acquistati.map(l => `<li>${l.titolo} (${l.idLibro})</li>`).join("") || "<li>Nessuno</li>"}</ul>
            <strong>Libri venduti e poi rivenduti:</strong>
            <ul>${rivenduti.map(l => `<li>${l.titolo} (${l.idLibro})</li>`).join("") || "<li>Nessuno</li>"}</ul>
            <strong>Vecchi proprietari dei libri acquistati:</strong>
            <ul>${vecchiProprietari.map(c => `<li>${c.name} ${c.surname} (${c.idCliente})</li>`).join("") || "<li>Nessuno</li>"}</ul>
        </div>
    `;
    detailTr.appendChild(td);

    // Inserisci la riga subito dopo quella selezionata
    tr.parentNode.insertBefore(detailTr, tr.nextSibling);
}

// Funzione di ricerca (opzionale, puoi collegarla al form)
function search(event) {
    event.preventDefault();
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll("#movimenti-table tbody tr");
    rows.forEach(row => {
        if (!searchText) {
            // Se il campo è vuoto, mostra tutte le righe
            row.style.display = "";
            return;
        }
        const cells = row.querySelectorAll("td");
        let match = false;
        cells.forEach(cell => {
            if (cell.innerText.toLowerCase().includes(searchText)) {
                match = true;
            }
        });
        row.style.display = match ? "" : "none";
    });
}
async function eliminaSelezionati() {
    const selected = document.querySelector(".cliente-row.selected");
    if (!selected) {
        alert("Seleziona una riga da eliminare.");
        return;
    }
    const id = selected.getAttribute("data-id");
    if (confirm("Sei sicuro di voler eliminare questo cliente?")) {
        const res = await fetch(`${API_URL}/api/clienti/${id}`, { method: "DELETE" });
        if (res.ok) {
            await loadClienti(); // aggiorna la tabella SOLO se eliminazione riuscita
            alert("Cliente eliminato con successo.");
        } else {
            alert("Errore nell'eliminazione del cliente.");
        }
    }
}

window.onload = loadClienti;
document.getElementById("searchButton").addEventListener("click", search);