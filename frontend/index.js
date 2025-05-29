class Customer {
    // Costruttore
    constructor(name, surname, email, phoneNumb){
        this.name = name
        this.surname = surname
        this.phoneNumb = phoneNumb
        this.email = email
        this.idCliente = ""
        this.saldo = 0.0
    }

    toString(){
        return this.name+","+ this.surname+ "," + this.email + "," + this.phoneNumb + "," + this.saldo
    }
}


class Book {
    // Construttore
    constructor(properties) {
       this.materia = properties[0];
       this.codice = properties[1];
       this.autore = properties[2];
       this.titolo = properties[3];
       this.proprietario = new Customer();     
       this.acquirente = new Customer();
       this.numeroSerie = "000";
       this.prezzo = Number(properties[7]);
       this.percentualeDiRivendita = 0.0;
       this.id = ""
    }

    // set setPercentuale(percentualeDiRivendita) {
    //     this.percentualeDiRivendita = percentualeDiRivendita;
    // }

    toString(){
        return this.materia + ", " + this.autore  + ", "+ this.titolo + ", " + this.proprietario.idCliente + ", " + this.prezzo;
    }
        
}


// Array contenente i libri
const initialData = [
    ["Materia/Disciplina,Codice Volume,Autore/Curatore/Traduttore,Titolo / Sottotitolo,Vol.,Tipo,Editore,Prezzo,Cons.,Classe"],
    ["STORIA,9788805076659,FELTRI FRANCESCO MARIA- BERTAZZONI MARIA MANUELA- NERI FRANCA,SCENARI 3 NOVECENTO E XXI SECOLO,3,B,SEI,35.6,No,5"],
    ["TELECOMUNICAZIONI,9788808159304,BERTAZIOLI ONELIO,CORSO DI TELECOMUNICAZIONI 1 (LMS LIBRO MISTO SCARICABILE)  RETI ELETTRICHE. FOND. ELETTRONICA DIGITALE. NOZIONI SIST. TELECOMUNICAZIONI,1,B,ZANICHELLI EDITORE,31.4,No,3"],
    ["TELECOMUNICAZIONI,9788808228628,BERTAZIOLI ONELIO,CORSO DI TELECOMUNICAZIONI 2 (LIBRO MISTO SCARICABILE) MEZZI TRASMISSIVI. ELETTRONICA PER TELECOMUNICAZIONI. RETE TELEFONICA,2,B,ZANICHELLI EDITORE,42.7,No,4"],
    ["SCIENZE INTEGRATE (SCIENZE DELLA TERRA E BIOLOGIA),9788808554055,LUPIA PALMIERI ELVIDIO- PAROTTO MAURIZIO- SARACENI S - STRUMIA G,SCIENZE NATURALI 3ED. - BIOLOGIA (LDM) DI SILVIA SARACENI E GIORGIO STRUMIA,U,B,ZANICHELLI EDITORE,22.5,No,2"],
    ["SCIENZE DELLA TERRA,9788808690913,LUPIA PALMIERI ELVIDIO- PAROTTO MAURIZIO,SCIENZE DELLA TERRA 4ED. - VOL. U (LDM),U,B,ZANICHELLI EDITORE,23.9,No,1"],
    ["TELECOMUNICAZIONI,9788808834997,BERTAZIOLI ONELIO,CORSO DI TELECOMUNICAZIONI - VOL 3 + RISORSE SCUOLABOOK PER TELECOM. RETI- SIST. E APP. TELECOMUNICAZIONI DIGITALI DI N. GENERAZIONE,3,B,ZANICHELLI EDITORE,44.6,No,5"],
    ["TECNOLOGIE INFORMATICHE,9788820372279,BOSCAINI MAURIZIO- LUGHEZZANI FLAVIA- PRINCIVALLE DANIELA,MASTERMIND PENSARE - PROGRAMMARE - CONDIVIDERE. INFORMATICA PER IL PRIMO BIENNIO,U,B,HOEPLI,24.4,No,1"],
    ["ELETTROTECNICA ED ELETTRONICA,9788820378493,CONTE GAETANO- IMPALLOMENI EMANUELE,ELETTROTECNICA- ELETTRONICA E AUTOMAZIONE NUOVA EDIZIONE OPENSCHOOL PER IL SECONDO BIENNIO DELL'INDIRIZZO TRASPORTI E LOGISTICA,U,B,HOEPLI,35.4,No,3-4-5"],
    ["MECCANICA,9788820383329,AA VV,MANUALE DEL MANUTENTORE,U,X,HOEPLI,76.9,Mon,3-4-5"],
    ["SISTEMI AUTOMATICI,9788820394844,CERRI FABRIZIO- ORTOLANI GIULIANO- VENTURI EZIO,NUOVO CORSO DI SISTEMI AUTOMATICI  PER LE ARTICOLAZIONI ELETTROTECNICA- ELETTRONICA E AUTOMAZIONE DEGLI ISTITUT,1,B,HOEPLI,31.9,No,3"],
    ["SISTEMI AUTOMATICI,9788820394851,CERRI FABRIZIO- ORTOLANI GIULIANO- VENTURI EZIO,NUOVO CORSO DI SISTEMI AUTOMATICI  PER LE ARTICOLAZIONI ELETTROTECNICA- ELETTRONICA E AUTOMAZIONE DEGLI ISTITUT,2,B,HOEPLI,31.9,No,4"],
    ["STORIA,9788822197320,BRANCATI ANTONIO- PAGLIARANI TREBI,STORIA IN MOVIMENTO LIBRO MISTO CON LIBRO DIGITALE  VOLUME 3- LAVORARE CON LA STORIA 3,3,B,LA NUOVA ITALIA EDITRICE,31.7,No,5"],
    ["ELETTROTECNICA ED ELETTRONICA,9788823342002,AMBROSINI- SPADARI,ELETTROTECNICA ED ELETTRONICA 2 CON OPENBOOK VOLUME 2 + OPENBOOK,2,B,TRAMONTANA,31.4,No,4"],
    ["ELETTROTECNICA ED ELETTRONICA,9788823346000,AMBROSINI- SPADARI,ELETTROTECNICA ED ELETTRONICA 3 CON OPENBOOK VOLUME 3 + OPENBOOK,3,B,TRAMONTANA,35.1,No,5"],
    ["TELECOMUNICAZIONI,9788823357037,AMBROSINI ENRICO- PERLASCA IPPOLITO- MAINI PIERPAOLO,TELECOMUNICAZIONI - LIBRO MISTO CON HUB LIBRO YOUNG  VOL. + HUB YOUNG + HUB KIT,U,B,TRAMONTANA,36.5,No,4"],
    ["TECNOLOGIE E PROGETTAZIONE,9788823357150,BOVE ENEA- PORTALURI GIORGIO,TECNOLOGIE E PROGETTAZIONE DI SISTEMI ELETTRICI ED ELETTRONICI - LIBRO MISTO  ART. ELETTRONICA - VOL. 1 + HUB YOUNG + HUB KIT,1,B,TRAMONTANA,37,No,3"],
    ["TECNOLOGIE E PROGETTAZIONE,9788823357983,BOVE ENEA- PORTALURI GIORGIO,TECNOLOGIE E PROGETTAZIONE DI SISTEMI ELETTRICI ED ELETTRONICI  ART. ELETTRONICA - VOL. 2 + HUB YOUNG + HUB KIT,2,B,TRAMONTANA,31.9,No,4"],
    ["TECNOLOGIE E PROGETTAZIONE,9788823357990,BOVE ENEA- PORTALURI GIORGIO,TECNOLOGIE E PROGETTAZIONE DI SISTEMI ELETTRICI ED ELETTRONICI  ART. ELETTRONICA - VOL. 3 + HUB YOUNG + HUB KIT,3,B,TRAMONTANA,31.9,No,5"],
    ["SCIENZE INTEGRATE (CHIMICA),9788823365957,CORDIOLI DORIANO,CHIMICA PRATICA - LIBRO MISTO CON LIBRO DIGITALE  VOLUME UNICO PER IL BIENNIO,U,B,TRAMONTANA,36.9,No,1-2"],
    ["DIRITTO ED ECONOMIA,9788823367739,D'AMELIO MARIA GIOVANNA,FUTURO IN TASCA (IL) - LIBRO MISTO CON LIBRO DIGITALE  CORSO DI DIRITTO ED ECONOMIA PER IL PRIMO BIENNIO - VOLUME UNICO,U,B,TRAMONTANA,25.3,No,1-2"],
    ["ELETTRONICA ED ELETTROTEC,9788823373266,AMBROSINI ENRICO- SPADARI FILIPPO,ELETTROTECNICA ED ELETTRONICA VOLUME 1,1,B,TRAMONTANA,30.2,No,3"],
    ["INFORMATICA,9788826821887,LORENZI AGOSTINO- RIZZI ANDREA,PRO.TECH B,2,B,ATLAS,28.2,No,4"],
    ["ITALIANO ANTOLOGIE E STORIA LETTERATURA,9788830206779,SAMBUGAR MARTA- SALA' GABRIELLA,CODICE LETTERARIO 2020 - LIBRO MISTO CON LIBRO DIGITALE  VOLUME 3A + VOLUME 3B + FASCICOLO 5° ANNO,3,B,LA NUOVA ITALIA EDITRICE,55.6,No,5"],
    ["ITALIANO ANTOLOGIE E STORIA LETTERATURA,9788830206793,SAMBUGAR MARTA- SALA' GABRIELLA,CODICE LETTERARIO 2020 - LIBRO MISTO CON LIBRO DIGITALE  VOL 1+LABORATORIO 3° 4° ANNO+DIVINA COMMEDIA+INVALSI,1,B,LA NUOVA ITALIA EDITRICE,43.8,No,3"],
    ["ITALIANO ANTOLOGIE E STORIA LETTERATURA,9788830212428,SAMBUGAR MARTA- SALA' GABRIELLA,CODICE LETTERARIO 2020 - LIBRO MISTO CON LIBRO DIGITALE  VOL 2 CON LEOPARDI+LABORATORIO 3° 4° ANNO,2,B,LA NUOVA ITALIA EDITRICE,45.4,No,4"],
    ["STORIA,9788835055204,GENTILE- RONGA- ROSSI,FUCINA DI VULCANO - VOLUME 1 (LA)  CORSO DI STORIA ED EDUCAZ.CIVICA,1,B,LA SCUOLA EDITRICE,25.1,No,1-2"],
    ["STORIA,9788835055211,GENTILE- RONGA- ROSSI,FUCINA DI VULCANO - VOLUME 2 (LA)  CORSO DI STORIA ED EDUCAZ.CIVICA,2,B,LA SCUOLA EDITRICE,25.1,No,2"],
    ["SISTEMI AUTOMATICI,9788836003785,CERRI FABRIZIO- ORTOLANI GIULIANO- VENTURI EZIO,NUOVO CORSO DI SISTEMI AUTOMATICI  PER L'ARTICOLAZIONE ELETTRONICA DEGLI ISTITUTI TECNICI SETTORE TECNOLOGICO,3,B,HOEPLI,32.9,No,5"],
    ["INFORMATICA,9788836007745,CAMAGNI PAOLO- NIKOLASSY RICCARDO,CORSO DI INFORMATICA SQL & PHP  PERCORSI MODULARI PER LINGUAGGI DI PROGRAMMAZIONE,U,B,HOEPLI,29.9,No,5"],
    ["LOGISTICA,9788836007943,DALLARI FABRIZIO,CORSO DI LOGISTICA E TRASPORTI  ELEMENTI DI BASE- SOLUZIONI TECNICHE E MODELLI OPERATIVI,1,B,HOEPLI,32.9,No,3"],
    ["TECNOLOGIE E PROGETTAZIONE DI SISTEMI INFO,9788836011728,CAMAGNI PAOLO- NIKOLASSY RICCARDO,TECNOLOGIE E PROGETTAZIONE DI SISTEMI INFORMATICI E DI TELECOMUNICAZION  PER L'ARTICOLAZIONE INFORMATICA DEGLI ISTITUTI TECNICI SETTORE TECNOLOGICO,1,B,HOEPLI,25.9,No,3"],
    ["LOGISTICA,9788836012275,DALLARI FABRIZIO- COSSU ELENA,CORSO DI LOGISTICA E TRASPORTI  ORGANIZZAZIONE E GESTIONE DELLA SUPPLY CHAIN E DELLA SICUREZZA,2,B,HOEPLI,32.9,No,4-5"],
    ["SCIENZE DELLA NAVIGAZIONE,9788836015221,DALLARI FABRIZIO- COSSU ELENA,CORSO DI LOGISTICA E TRASPORTI  SPEDIZIONI- NORMATIVA E COMMERCIO INTERNAZIONALE,3,B,HOEPLI,32.9,App,3"],
    ["RELIGIONE,9788839303394,CERA T- FAMA' A,STRADA CON L'ALTRO (LA) - VOLUME UNICO LEZIONI E PERCORSI + EBOOK,U,B,MARIETTI SCUOLA,19.35,No,3-4-5"],
    ["RELIGIONE,9788839303943,CERA T FAMA A- SORICE O,STRADA CON L'ALTRO - EDIZIONE VERDE (LA)  VOLUME UNICO + UDA MULTIDISCIPLINARI DI EDUCAZIONE CIVICA E IRC + EBOOK,U,B,MARIETTI SCUOLA,18.75,App,1-2"],
    ["STORIA,9788839538864,GIOVANNI DE LUNA- MARCO MERIGGI,VALORE STORIA 1 DALL'ANNO MILLE ALLA METÁ DEL SEICENTO,1,B,PARAVIA,34.9,No,3"],
    ["STORIA,9788839538871,GIOVANNI DE LUNA- MARCO MERIGGI,VALORE STORIA 2 DALLA METÁ DEL SEICENTO ALLA FINE DELL'OTTOCENTO,2,B,PARAVIA,38.3,No,4"],
    ["TECNOLOGIE E TECNICHE DI RAPPRESENT.GRAFICA,9788841651780,ZANIN ALBINO- BALDISSERI GIORGIO,TECNOGRAFICA + DISEGNO + TECNOLOGIA,U,B,PRINCIPATO,27.9,No,1-2"],
    ["INGLESE,9788844119836,ROBBA MARGHERITA- FAGGIANI MARIA LETIZIA,NEW MECHWAYS - ENGLISH FOR MECHANICS- MECHATRONICS AND ENERGY,U,B,EDISCO,25.8,No,3-4-5"],
    ["MATEMATICA,9788849422979,SASSO LEONARDO- ZOLI ENRICO,COLORI DELLA MATEMATICA - EDIZIONE VERDE VOL. 3 + EBOOK +  STATISTICA E CALCOLO DELLE PROBABILITÁ,1,B,PETRINI,41.85,No,3"],
    ["MATEMATICA,9788849422986,SASSO LEONARDO- ZOLI ENRICO,COLORI DELLA MATEMATICA - EDIZIONE VERDE VOL. 4 + EBOOK +,2,B,PETRINI,31,No,4"],
    ["MATEMATICA,9788849422993,SASSO LEONARDO- ZOLI ENRICO,COLORI DELLA MATEMATICA - EDIZIONE VERDE VOL. 5 + EBOOK +,3,B,PETRINI,28.65,No,5"],
    ["SISTEMI E RETI,9788849423266,ANELLI S- MACCHI P- ANGIANI G ZICCHIERI G,GATEWAY - SISTEMI E RETI SECONDA EDIZIONE - VOLUME 2 + EBOOK,2,B,PETRINI,21.2,No,4"],
    ["SISTEMI E RETI,9788849423273,ANELLI S- MACCHI P- ANGIANI G ZICCHIERI G,GATEWAY - SISTEMI E RETI SECONDA EDIZIONE - VOLUME 3 + EBOOK- IN PREPARAZIONE,3,B,PETRINI,22.55,No,5"],
    ["MATEMATICA,9788849425215,SASSO L ZOLI E,TUTTI I COLORI DELLA MATEMATICA - EDIZIONE VERDE - PRIMO BIENNIO  VOLUME 1 + QUADERNO DI INCLUSIONE E RECUPERO 1 + EBOOK,1,B,PETRINI,35.65,No,1"],
    ["MATEMATICA,9788849425222,SASSO L ZOLI E,TUTTI I COLORI DELLA MATEMATICA - EDIZIONE VERDE - PRIMO BIENNIO  VOLUME 2 + QUADERNO DI INCLUSIONE E RECUPERO 2 + EBOOK,2,B,PETRINI,36.2,No,2"],
    ["SISTEMI E RETI,9788849426403,ANELLI S MACCHI P,GATEWAY TERZA EDIZIONE + EBOOK VOLUME 1 PER IL III ANNO + EBOOK,1,B,PETRINI,21.5,No,3"],
    ["GEOGRAFIA,9788851187477,BIANCHI S KOEHLER R,GEOBASE-CORSO DI GEOGRAFIA GENERALE ED ECONOMICA PER IST.TECNICI PROFESS. VOLUME BASE+ EBOOK,U,B,DE AGOSTINI,13.25,No,2"],
    ["DIRITTO ED ECONOMIA,9788861603820,MARIA RITA CATTANI,NUOVO SISTEMA DIRITTO APP - DIRITTO COMMERCIALE (IL),2,B,PARAMOND,33.5,No,4"],
    ["DIRITTO ED ECONOMIA,9788861604711,CATTANI MARIA RITA- GUZZI CLAUDIO,SISTEMA DIRITTO SECONDA EDIZIONE - SECONDO BIENNIO  CORSO DI DIRITTO,U,B,PARAMOND,43.2,No,3"],
    ["INGLESE,9788861618176,SBOLOGNINI- B C BARBER- K O'MALLEY,CAREER PATHS IN TECHNOLOGY ELECTRICITY AND ELECTRONICS - INFORMATION TECHNOLOGY AND TELECOMMUNICATIONS,U,B,LANG EDIZIONI,27.7,No,3-4-5"],
    ["SCIENZE INTEGRATE (FISICA),9788863648850,WALKER,FISICA DI WALKER (LA) - VOLUME UNICO,U,B,LINX,39.1,No,1-2"],
    ["ITALIONE PROGETTO- ORGANIZZAZIONE D'IMPRESA,9788874858323,IACOBELLI CESARE- COTTONE MARIO- GAIDO ELENA,DALL'IDEA ALLA STARTUP VOLUME UNICO,U,B,JUVENILIA,29.4,No,5"],
    ["INGLESE,9788883394485,AA VV,MY VOICE A2/B1,U,B,PEARSON LONGMAN,29.9,No,1-2"],
    ["INGLESE,9788883394492,AA VV,MY VOICE B1/B1+,U,B,PEARSON LONGMAN,29.9,No,2"],
    ["INGLESE,9788883395994,AA VV,MY VOICE B2,U,B,PEARSON LONGMAN,33.9,No,3-4-5"],
    ["STRUTTURA- COSTRUZIONE- SISTEMI E IMPIANTI,9788884883148,AA VV,TECNICA DELL'AUTOMOBILE MANUALE DI TECNOLOGIA DEI VEICOLI A MOTORE,U,B,SAN MARCO,42,No,3-4-5"],
    ["DIRITTO ED ECONOMIA,9788891420091,AVOLIO ALESSANDRA,TRASPORTI LOGISTICA LEGGI E MERCATI DIRITTO ED ECONOMIA PER SECONDO BIENNIO E QUINTO ANNO ARTICOL LOGISTICA,U,B,SIMONE PER LA SCUOLA,28,App,5"],
    ["INGLESE,9788899673154,GUALANDRI- CANELLINI,ALL ABOUT LOGISTICS PLUS + CD AUDIO 50241  STORAGE & DELIVERY,U,B,TRINITY WHITEBRIDGE,18.5,No,3-4-5"],
    ["ITANO ANTOLOGIE,9788869109225,SIMONA BRENNA- DANIELE DACCO,STORIE IN TASCA - NARRATIVA CON VEDERE LE STORIE,U,B,B.MONDADORI,25.7,No,1"],
    ["ITALIANO ANTOLOGIE,9788869109263,SIMONA BRENNA- DANIELE DACCO,STORIE IN TASCA - POESIA E TEATRO CON ANTOLOGIA DEI PROMESSI SPOSI,U,B,B.MONDADORI,24.5,No,2"],
    ["ITALIANO EPICA,9788869109348,SIMONA BRENNA- DANIELE DACCO',STORIE IN TASCA - MITO ED EPICA,U,B,B.MONDADORI,13.6,No,1"],
    ["GESTIALIANO GRAMMATICA,9791254550106,SAVIGLIANO C,GRAMMATUTOR - PER PARLARE E SCRIVERE BENE  VOLUME BASE + LABORATORIO DELLE COMPETENZE + EBOOK,U,B,GARZANTI SCUOLA,28.1,No,1-2"],
];

const books = [];
const selectedBooks = [];
const users = []
let currentBalance = 0.0;
var idCliente = 0
const API_URL = "https://mercatino-libri.onrender.com";

  
// Funzione che carica i libri
async function loadInitialData() {
    const tableContainer = document.getElementById("table-container");
    const table = document.getElementById("table-content");
    const thead = document.getElementById("table-header");
    const tbody = document.getElementById("table-data");

    for (let i = 0; i < initialData.length; i++) {
        const trow = document.createElement("tr");
        trow.setAttribute("id","row"+i)
        trow.setAttribute("data-selected","false")
        trow.addEventListener("click",selectBook)

        const row = initialData[i][0].split(",");
        
        // Inserisco i libri in una lista di libri
        if (i !== 0) {
            const book = new Book(row);
            if(i<10){
                book.id = "00"+i
            }else if(i<100){
                book.id = "0"+i
            }else{
                book.id = i
            }
            books.push(book);
        }
        // Creo le celle che conterrani i dati o le header
        for (let j = 0; j < row.length; j++) {
            const tcell = document.createElement(i === 0 ? "th" : "td");
            tcell.classList.add("cell");
            tcell.innerText = row[j];
            trow.appendChild(tcell);
        }

        // Aggiungo le celle negli approrpiati tag
        if (i === 0) {
            thead.appendChild(trow);
        }
        else {
            tbody.appendChild(trow);
        }
    }

    // Aggiungio il theader e il tbody alla tabella e al contenitore della tabella
    table.appendChild(thead);
    table.appendChild(tbody);
    tableContainer.appendChild(table);
    await updateUsers();
    window.onload = () => { loadInitialData(); };
}

function clearInitialData() {
    // Svuota la tabella dei libri
    const thead = document.getElementById("table-header");
    const tbody = document.getElementById("table-data");
    thead.innerHTML = "";
    tbody.innerHTML = "";
}

function createSellerTable() {

}

function loadSellerToTable(nome, cognome, telefono) {

}

function loadSellerBooksDataAndBarcode(books) {

}
  
// Funzione che estrapola il testo della ricerca una volta cliccato il bottone "cerca"
function search(event) {
    event.preventDefault(); // Previene il comportamento predefinito del form

    // Estrapolo il contenuto della casella di inserimento testo
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    // Filtra la tabella in base al testo di ricerca
    filterTable(searchText);
}
  
// Funzione che filtra la tabella in base al testo di ricerca
function filterTable(searchText) {
    const table = document.querySelector("table");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let match = false;

        for (let j = 0; j < cells.length && match == false; j++) {
            if (cells[j].innerText.toLowerCase().includes(searchText)) {
                match = true;
            }
        }

        // Mostra o nasconde la riga in base alla corrispondenza
        rows[i].style.display = match ? "" : "none";
    }
}

// Funzione per immetere nella tabella del carrello il libro selezionato
function selectBook(event) {
    const row = event.currentTarget; //identificato l'elemento a cui è stato associato il gestore eventi
    const identifier = row.getAttribute("id");
    const index = identifier.substring(3, identifier.length) - 1;

    const cart = document.getElementById("cart-book");
    const cartBookContent = document.createElement("div");
    cartBookContent.setAttribute("class", "cart-book-content");
    cartBookContent.setAttribute("id", index)

    if(row.getAttribute("data-selected") === "false"){

        row.setAttribute("data-selected","true")
        row.style.backgroundColor = "rgba(76, 175, 80, 0.3)";

        selectedBooks.push(books[index]);
        currentBalance += books[index].prezzo;
        var numeroSerie = parseInt(books[index].numeroSerie);
        numeroSerie++;
        if(numeroSerie <10){
            books[index].numeroSerie = "00" + numeroSerie
        }else if(numeroSerie <100){
            books[index].numeroSerie = "0" + numeroSerie
        }else{
            books[index].numeroSerie = numeroSerie
        }

        const titleDiv = document.createElement("div");
        titleDiv.setAttribute("class", "cart-book-title");
        const titleH3 = document.createElement("h3");
        titleDiv.appendChild(titleH3);
        titleH3.innerText = books[index].titolo;
        cartBookContent.appendChild(titleDiv);

        const subjectDiv = document.createElement("div");
        subjectDiv.setAttribute("class", "cart-book-subject");
        const subjectH3 = document.createElement("h3");
        subjectDiv.appendChild(subjectH3);
        subjectH3.innerText = books[index].materia;
        cartBookContent.appendChild(subjectDiv);

        const priceDiv = document.createElement("div");
        priceDiv.setAttribute("class", "cart-book-price");
        const priceP = document.createElement("p");
        priceDiv.appendChild(priceP);
        priceP.innerText = books[index].prezzo;
        cartBookContent.appendChild(priceDiv);

        cartBookContent.appendChild(document.createElement("hr"));
        cart.appendChild(cartBookContent);
    
    }
    else {
        deselectBook(event, index);
    }
}

// Funzione per la deselezione di un libro
function deselectBook(event, index) {
    const row = event.currentTarget
    row.setAttribute("data-selected","false")
    row.style.backgroundColor = ''

    // TODO: SISTEMARE LA DESELECT
    const libro = books[index];
    const libroIndex = selectedBooks.indexOf(libro);
    if (libroIndex !== -1) {
        selectedBooks.splice(libroIndex, 1);
    }
    currentBalance -= libro.prezzo;

    // Aggiorna il numero di serie del libro
    let numeroSerie = parseInt(libro.numeroSerie);
    numeroSerie--;
    if (numeroSerie < 10) {
        libro.numeroSerie = "00" + numeroSerie;
    } else if (numeroSerie < 100) {
        libro.numeroSerie = "0" + numeroSerie;
    } else {
        libro.numeroSerie = numeroSerie;
    }

    // Rimuove la div del libro dal carrello
    const cart = document.getElementById("cart-book");
    const cartBookDiv = cart.querySelector(`.cart-book-content[id="${index}"]`);
    if (cartBookDiv) {
        cartBookDiv.remove();
    }
}

// Funzione che pulisce il carrello
// function clearCart() {
//     const cartContainer = document.querySelector(".cart-book-container");
//     if (cartContainer) {
//         const items = cartContainer.querySelectorAll(".cart-book-content");
//         items.forEach(item => item.remove());
//     }
// }

function clearCart() {
    // Deseleziona tutte le righe della tabella
    const data = document.getElementById("table-data");
    const rows = data.children;
    for (let i = 0; i < rows.length; i++) {
        rows[i].setAttribute("data-selected", "false");
    }

    // Svuota il carrello visivo
    const cartContainer = document.querySelector(".cart-book-container");
    if (cartContainer) {
        const items = cartContainer.querySelectorAll(".cart-book-content");
        items.forEach(item => item.remove());
    }

    // Svuota il carrello logico e azzera il saldo
    selectedBooks.length = 0;
    currentBalance = 0.0;
}

// Funzione per aprire il form per la registrazione di un venditore
function openSellerRegistration() {
    if (currentBalance !== 0.0) {
        document.getElementById("registration-form").style.display = "block";
        // document.body.style.overflow = "hidden";
        // document.body.style.height = "100vh";
    }
    else {
        alert("Si prega di selezionare almeno un libro");
    }
}

function open_closeNewSellerRegistration(sezioneId) {
    
    let sezioni = document.querySelectorAll(".left-search, .left-new");
    sezioni.forEach(sezione => sezione.style.display = "none");

    
    document.getElementById(sezioneId).style.display = "block";
}

// Funzione per aprire il form per la registrazione di un acquirente
function openBuyerRegistration() {
    if (currentBalance !== 0.0) {
        document.getElementById('registration-form').style.display = 'block';
        document.getElementById('modal-overlay').style.display = 'block';
        // document.body.style.overflow = "hidden";
        // document.body.style.height = "100vh";
    }
    else {
        alert("Si prega di selezionare almeno un libro");
    }
    
}

// Funzion per annullare la registrazione del cliente come venditore
function closeSellerRegistration() {
    document.getElementById('registration-form').style.display = 'none'
    document.getElementById('modal-overlay').style.display = 'none';
}

// Funzion per annullare la registrazione del cliente come aquirente
function closeBuyerRegistration() {
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('modal-overlay').style.display = 'none';
}

function openCart() {
    document.getElementById("cart-container").style.display = "block";
}

function closeCart() {
    document.getElementById("cart-container").style.display = "none";
}

// Funzioni Promesse
function waitForRegistration() {
    return new Promise((resolve) => {
        document.getElementById("seller-closeButton").addEventListener("click", resolve());
    });
}


// Funzione asincrona per registrare il venditore (attende che il bottone di conferma venga cliccato per procedere)
// Il venditore "riceve" il pagamento dei libri selezionati, incrementando il suo saldo.
// async function releaseBooks(event) {
//     event.preventDefault();

//     let primaRiga = false;

//     const name = document.forms["seller-data"]["seller-name-field"].value 
//     const surname = document.forms["seller-data"]["seller-surname-field"].value
//     const phoneNumber =  document.forms["seller-data"]["seller-phoneNumber-field"].value
//     if (currentBalance !== 0.0) {
//         openSellerRegistration(); // Apro il form per la Registrazione
//         await waitForRegistration(); // Attendo che l'utente inserisca i dati e confermi la registrazione
        
//         if (name !== "" && surname !== "" && phoneNumber !== "") {
//             var seller = new Customer(name, surname, phoneNumber);
//             if(storage.getItem(phoneNumber) === null){
//                 storage.setItem(phoneNumber,seller)
//             }


            // for (let i = 0; i < users.length - 1; i++){
            //     if(users[i].phoneNumb === seller.phoneNumb){
            //         users.pop();
            //         users[i].saldo += currentBalance;
            //         document.getElementById("proprietàV" + i + "," + 3).innerHTML = users[i].saldo;
            //         primaRiga = true;
            //     }
            // }

            // if (!primaRiga) {
            //     const row = document.getElementById("sellers-content").appendChild(document.createElement("tr"));
            //     row.setAttribute("id", "venditore" + users.length);
            //     const properties = seller.toString().split(",");

            //     for (let i = 0; i < 4; i++) { 
            //         const cella = row.appendChild(document.createElement("td"));
            //         cella.setAttribute("id", "proprietàV" + (users.length - 1) + "," + i);
            //         cella.innerHTML = properties[i];
            //     }
            //     document.getElementById("sellers-content").appendChild(row);
            // }

            // updateUsers();

            // await getBarcode(seller);
            // clearCart();


            // currentBalance = 0.0;
            // // var elenco = document.getElementById("cart-book-container")
            // // elenco.innerHTML = ""

            // for (let i = 1; i < books.length; i++) {
            //     const row = document.getElementById("row" + i);
            //     row.style.backgroundColor = "white"
            // }

            // closeSellerRegistration();
            
            // document.forms["seller-data"]["seller-name-field"].value = "";
            // document.forms["seller-data"]["seller-surname-field"].value = "";
            // document.forms["seller-data"]["seller-phoneNumber-field"].value = "";
        // }
        // else {
        //     alert("SI PREGA DI COMPILARE TUTTI I CAMPI PRE PROCEDERE!");
        // }
    // }
    // else {
    //     alert(("SI PREGA DI SELEZIONARE ALMENO UN LIBRO!"));
    // }

async function receiveBooks(event) {
    var infoVenditori = [[]];
    event.preventDefault();

    // Blocca la pagina
    blockPage();

    try {
        let primaRiga = false;

        const name = document.forms["seller-data"]["seller-name-field"].value.trim();
        const surname = document.forms["seller-data"]["seller-surname-field"].value.trim();
        const email = document.forms["seller-data"]["seller-email-field"].value.trim();
        const phoneNumber = document.forms["seller-data"]["seller-phoneNumber-field"].value.trim();

        if (currentBalance === 0.0) {
            alert("SI PREGA DI SELEZIONARE ALMENO UN LIBRO!");
            return;
        }

        openSellerRegistration();
        await waitForRegistration();

        if (name === "" || surname === "" || phoneNumber === "") {
            alert("SI PREGA DI COMPILARE TUTTI I CAMPI PER PROCEDERE!");
            return;
        }

        const seller = new Customer(name, surname, email, phoneNumber);
      
        var trovato = false
        var key = ""
        while (trovato === false) {
            if (parseInt(idCliente) < 10) {
                key = "000" + idCliente;
            } else if (idCliente < 100) {
                key = "00" + idCliente;
            } else if (idCliente < 1000) {
                key = "0" + idCliente;
            } else {
                key = idCliente;
            }

            // Invia il nuovo cliente al server con idCliente
            seller.idCliente = key;
            await fetch(`${API_URL}/api/dati`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(seller)
            });
            trovato = true; // esci dal ciclo
        }

        // Prova a generare e scaricare tutti i barcode
        let allBarcodesDownloaded = true;
        for (let i = 0; i < selectedBooks.length; i++) {
            let libroRegistrato = selectedBooks[i];
            infoVenditori[i] = [libroRegistrato.titolo, libroRegistrato.prezzo];
            libroRegistrato.proprietario = seller;
            libroRegistrato.numeroSerie = libroRegistrato.numeroSerie;
            libroRegistrato.idLibro = libroRegistrato.id + libroRegistrato.numeroSerie;
        
            // Salva il libro sul server
            await fetch('${API_URL}/api/dati', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(libroRegistrato)
            });
        
            const datiBarcode = newBarcode(libroRegistrato.idLibro, seller.idCliente);
            try {
                await downloadAndSaveImage(datiBarcode, key + ".jpg");
            } catch (err) {
                allBarcodesDownloaded = false;
                alert("Errore nel download del barcode per il libro: " + libroRegistrato.titolo);
                break;
            }
        }

        if (!allBarcodesDownloaded) {
            alert("Operazione interrotta: non tutti i barcode sono stati scaricati. Nessun dato salvato.");
            return;
        }


        // Aggiorna saldo e utenti
        updateUsers();

        // Pulizia e reset
        clearCart();
        currentBalance = 0.0;

        for (let i = 1; i < books.length; i++) {
            const row = document.getElementById("row" + i);
            if (row) row.style.backgroundColor = "white";
        }

        closeSellerRegistration();

        document.forms["seller-data"]["seller-name-field"].value = "";
        document.forms["seller-data"]["seller-surname-field"].value = "";
        document.forms["seller-data"]["seller-email-field"].value = "";
        document.forms["seller-data"]["seller-phoneNumber-field"].value = "";

       

    } catch (error) {
        alert("Si è verificato un errore durante la registrazione: " + error.message);
    } finally {
        // Sblocca la pagina
        unBlockPage();
    }
    return infoVenditori;
}

// Funzione asincrona per registrare l'acquirente (attende che il bottone di conferma venga cliccato per procedere)
// L'acquirente "rilascia" i libri pagando, quindi il suo saldo diminuisce.
async function releaseBooks(event) {
    event.preventDefault();

    const name = document.forms["seller-data"]["seller-name-field"].value.trim();
    const surname = document.forms["seller-data"]["seller-surname-field"].value.trim();
    const email = document.forms["seller-data"]["seller-email-field"].value.trim();
    const phoneNumber = document.forms["seller-data"]["seller-phoneNumber-field"].value.trim();

    if (currentBalance === 0.0) {
        alert("SI PREGA DI SELEZIONARE ALMENO UN LIBRO!");
        return;
    }

    openSellerRegistration();
    await waitForRegistration();

    if (name === "" || surname === "" || phoneNumber === "") {
        alert("SI PREGA DI COMPILARE TUTTI I CAMPI PER PROCEDERE!");
        return;
    }

    const buyer = new Customer(name, surname, email, phoneNumber);

    // Genera un idCliente unico per l'acquirente (puoi usare timestamp o altro)
    const idAcquirente = "A" + Date.now();
    buyer.idCliente = idAcquirente;

    // Salva l'acquirente sul server
    await fetch('${API_URL}/api/clienti', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buyer)
    });

    // (Qui puoi aggiungere la logica per associare i libri acquistati all'acquirente, se necessario)

    // Pulizia e reset
    closeSellerRegistration();
    document.forms["seller-data"]["seller-name-field"].value = "";
    document.forms["seller-data"]["seller-surname-field"].value = "";
    document.forms["seller-data"]["seller-email-field"].value = "";
    document.forms["seller-data"]["seller-phoneNumber-field"].value = "";
    clearCart();
    currentBalance = 0.0;
}

// Funzione che blocca la pagina
function blockPage() {
    document.getElementById('page-blocker').style.display = 'block';
}

// Funzione che sblocca la pagina
function unBlockPage() {
    document.getElementById('page-blocker').style.display = 'none';
}

async function downloadAndSaveImage(imageUrl, fileName) {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error(`Errore HTTP: ${response.status}`);
    const blob = await response.blob();

    const urlBlob = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = urlBlob;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(urlBlob);
    window.focus();
}

async function updateUsers() {
    users.length = 0; // Svuota l'array
    const response = await fetch(`${API_URL}/api/clienti`);
    const clienti = await response.json();
    clienti.forEach(cliente => {
        users.push(cliente.name + " " + cliente.surname);
    });
}
const dropdown = document.getElementById("dropdown-clienti")


async function updateDropdown() {
    await updateUsers();
    const query = this.value.toLowerCase().trim();
    dropdown.innerHTML = "";
    const input = document.getElementById("cliente-registrato");
    if (query) {
        const filtrati = users.filter(nome => nome.toLowerCase().includes(query));
        if (filtrati.length > 0) {
            filtrati.forEach(nome => {
                const li = document.createElement("li");
                li.textContent = nome;
                li.addEventListener("click", async () => {
                    input.value = nome;
                    dropdown.innerHTML = "";
                    // Trova il cliente selezionato dal server
                    const response = await fetch(`${API_URL}/api/clienti`);
                    const clienti = await response.json();
                    clienteAttivo = clienti.find(c => (c.name + " " + c.surname) === nome);
                });
                dropdown.appendChild(li);
            });
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }
    } else {
        dropdown.style.display = "none";
    }
}

// Così sotto il barcode vedrai, ad esempio:
// 001001 - 0001
// dove 001001 è l’idLibro e 0001 è l’idCliente.
function newBarcode(key, idCliente){
    let canvas  = document.getElementById("canvaBarcode")
    if(canvas === null){  
        canvas = document.createElement("canvas")
        canvas.id = "canvaBarcode"
        document.body.appendChild(canvas);
    }

    JsBarcode(canvas, key, {
        format: "CODE128",
        width: 2,
        text: key + " - " + idCliente, // Mostra sia idLibro che idCliente sotto il barcode
        height: 100,
        displayValue: true
    });

    // converte il contenuto di canvas (barcode) in un URL PNG a 64 bit
    return canvas.toDataURL("image/jpeg")
}


function barcodeToJPG(img,nomeFile){
    //creazione di un link temporaneo per eseguire il download del file
    const link = document.createElement("a")
    link.href = img
    link.download = nomeFile
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

}


function readBarcodeData(event){
    // Evito di bloccare la digitazione dei campi input
    if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA" || event.target.isContentEditable) {
        return;
    }

    event.preventDefault()
    let key = ""
    if(event.key){
        key += event.key
        console.log(key)
    }

}



function resetCountBooks(){
    for(let i = 0;i<books.length;i++){
        books[i].numeroSerie = 0;
    }
}

async function confermaClienteEsistente(event) {
    event.preventDefault();
    if (!clienteAttivo) {
        alert("Seleziona un cliente dalla lista!");
        return;
    }
    if (selectedBooks.length === 0) {
        alert("Seleziona almeno un libro!");
        return;
    }

    // Per ogni libro selezionato, aggiorna il proprietario e salva sul server
    for (let i = 0; i < selectedBooks.length; i++) {
        let libro = selectedBooks[i];
        libro.proprietario = clienteAttivo;
        libro.idLibro = libro.id + libro.numeroSerie;

        await fetch('${API_URL}/api/clienti', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(libro)
        });

        const datiBarcode = newBarcode(libro.idLibro, clienteAttivo.idCliente);
        try {
            await downloadAndSaveImage(datiBarcode, libro.idLibro + ".jpg");
        } catch (err) {
            alert("Errore nel download del barcode per il libro: " + libro.titolo);
            break;
        }
    }

    alert("Vendita/acquisto completato!");
    clearCart();
    currentBalance = 0.0;
    closeSellerRegistration();
    document.forms["seller-data"]["seller-name-field"].value = "";
    document.forms["seller-data"]["seller-surname-field"].value = "";
    document.forms["seller-data"]["seller-email-field"].value = "";
    document.forms["seller-data"]["seller-phoneNumber-field"].value = "";
    clienteAttivo = null;
}

document.getElementById("seller-confirmButton").addEventListener("click", confermaClienteEsistente);

//Passo a "window.onload" solo il riferimento alla funzione quindi non servono le parentesi
window.onload = async () => {
    await loadInitialData();
    await aggiornaListeClienti(); // <-- aggiorna la lista dalla base dati del server
};
document.getElementById("searchButton").addEventListener("click", search);
document.getElementById("bottoneVendita").addEventListener("click", openSellerRegistration);
document.getElementById("seller-confirm1Button").addEventListener("click", receiveBooks);
document.getElementById("cliente-registrato").addEventListener("input",updateDropdown);
document.addEventListener("keydown", readBarcodeData);


/**
* Aggiungo ai bottini un Event Listener di tipo "click" e associo il riferimento alla funzione da eseguire
* In altre parole, queste righe di codice dicono al borwser di eseguire le funzioni search e addBook
* (sono senza parentesi perché sono solo riferimenti alle funzioni) ogni volta che l'utente clicca sui bottoni corrispondeti
* alle funzioni delle funzioni
*/


