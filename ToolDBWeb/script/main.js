//Selectors
const btnTable = document.getElementById('btnAddNewTable');
const mainPanel = document.getElementById('mainPanel');
const btnShowDBNameModal = document.getElementById('btnShowDBNameModal');
const btnCleanData = document.getElementById('cleanData');
const btnCreateProcedure = document.getElementById('btnCreateProcedure');
const btnStoreProcedures = document.getElementById('storeProcedures');

//variables
let tables = [];
let storeProcedures = []

//Event Listeners
btnTable.addEventListener('click', CreateTable)
btnShowDBNameModal.addEventListener('click', ShowModal)
btnCleanData.addEventListener('click', CleanData);
btnStoreProcedures.addEventListener('click', ShowProcedures)



//Functions
function CreateTable() {
    const table = new Table();
    tables.push(table.CreateTable());

    tables.forEach((value) => {
        mainPanel.appendChild(value);
    })

    console.log(tables);
}

function ShowModal() {
    const modal = new EditDatabaseNameModal();
    mainPanel.appendChild(modal.ShowModal());
}

function ShowProcedure() {
    const modal = new StoreProcedureModal();
    mainPanel.appendChild(modal.ShowProcedureModal());
}

function ShowProcedures() {
    const modal = new ProcedureSection();
    mainPanel.appendChild(modal.ShowProcedureSection())
}

function CleanData() {
    
    mainPanel.textContent = '';
    
    while (tables.length || storeProcedures.length) {
        tables.pop();
        storeProcedures.pop();
    }

    console.log(tables);
}

