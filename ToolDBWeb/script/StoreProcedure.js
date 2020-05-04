class StoreProcedure {
    
    constructor(name, script, parameters){
        this.name = name;
        this.script = script;
        this.parameters = parameters;
    }

    id = Math.random();

    CreateProcedure() {

        const storeProcedure = document.createElement('div');
        storeProcedure.classList.add('procedure-card');

        const procedureCardName = document.createElement('div');
        procedureCardName.classList.add('procedure-card-name');

        const procedureName = document.createElement('p');
        procedureName.id = this.id; 
        procedureName.innerText = this.name;

        procedureCardName.appendChild(procedureName);

        const procedureIcon = document.createElement('div');
        procedureIcon.classList.add('procedure-icon');

        const icon = document.createElement('img');
        icon.src = "img/icons8-flujo-de-trabajo-64.png";

        procedureIcon.appendChild(icon);

        const EditProcedure = document.createElement('div');
        EditProcedure.classList.add('btnEditProcedure');

        const btnEditProcedure = document.createElement('button');
        btnEditProcedure.innerText = "Edit Procedure";
        btnEditProcedure.addEventListener('click', () => {
            const wrapper = document.getElementById('mainPanel');
            wrapper.appendChild(new EditProcedureModal(this).ShowEditProcedureModal())
            storeProcedure.parentElement.parentElement.remove();
        })

        EditProcedure.appendChild(btnEditProcedure);

        storeProcedure.appendChild(procedureCardName);
        storeProcedure.appendChild(procedureIcon);
        storeProcedure.appendChild(EditProcedure);


        return storeProcedure;
    }
}