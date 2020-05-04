class EditProcedureModal {

    constructor(storeProcedure) {
        this.storeProcedure = storeProcedure;
    }


    wrapper = document.getElementById('mainPanel');

    ShowEditProcedureModal() {

        let parameters = this.storeProcedure.parameters

        const modal = document.createElement('div');
        modal.classList.add('store-procedure-modal');
        
        const topBar = document.createElement('div');
        topBar.classList.add('top-bar')
        
        const procedureName = document.createElement('div');
        procedureName.classList.add('procedure-name');

        const storeProcedureName = document.createElement('h4');
        storeProcedureName.id = 'procedureName';
        storeProcedureName.innerText = this.storeProcedure.name;

        const btnEditProcedureName = document.createElement('img');
        btnEditProcedureName.src = "img/icons8-editar-archivo-48.png";
        btnEditProcedureName.classList.add('pointer-button')
        btnEditProcedureName.addEventListener('click', () => {
            this.wrapper.appendChild(new EditProcedureNameModal().ShowModal());
        });

        const btnClose = document.createElement('button');
        btnClose.classList.add('close-button');
        btnClose.classList.add('pointer-button')
        btnClose.innerText = 'X';
        btnClose.addEventListener('click', () => {
            let wrapper = document.getElementById('mainPanel');
            wrapper.removeChild(modal);
        })

        procedureName.appendChild(storeProcedureName);
        procedureName.appendChild(btnEditProcedureName);

        topBar.appendChild(procedureName);
        topBar.appendChild(btnClose);

        const scriptContainer = document.createElement('div');
        scriptContainer.classList.add('script-container');

        const procedureScript = document.createElement('div');
        procedureScript.classList.add('procedure-script');
        
        const procedureLabel = document.createElement('h3');
        procedureLabel.innerText = 'Type your script here';

        const txtScript = document.createElement('textarea');
        txtScript.innerText = this.storeProcedure.script;

        const parameterContainer = document.createElement('div');
        parameterContainer.classList.add('parameter-container');

        const parameterLabel = document.createElement('h3');
        parameterLabel.innerText = "Parameters";

        const parametersContainer = document.createElement('div');
        parametersContainer.classList.add('parameters-container');

        const parameter = document.createElement('div');
        parameter.classList.add('parameter');

        for (let i = 0; i < parameters.length; i++) {
            parameter.appendChild(parameters[i])
        }

        const btnAddParameter = document.createElement('button');
        btnAddParameter.classList.add('btnAddParameter');
        btnAddParameter.classList.add('pointer-button');
        btnAddParameter.innerText = "Add New Parameter";
        btnAddParameter.addEventListener('click', () => {
            parameters.push(this.CreateParameter());

            parameters.forEach((param) => {
                parameter.appendChild(param);
            })
        })

        const btnDivAddStoreProcedure = document.createElement('div');
        btnDivAddStoreProcedure.classList.add('btnAddStoreProcedure')

        const btnEditStoreProcedure = document.createElement('button');
        btnEditStoreProcedure.innerText = "Edit Store Procedure"
        btnEditStoreProcedure.addEventListener('click', () => {
            const index = storeProcedures.indexOf(this.storeProcedure.id);
            storeProcedures.splice(index, 1);
            storeProcedures.push(new StoreProcedure(storeProcedureName.innerText, txtScript.value, parameters));
        })

        procedureScript.appendChild(procedureLabel);
        procedureScript.appendChild(txtScript);
        
        parametersContainer.appendChild(parameter);
        parametersContainer.appendChild(btnAddParameter);

        parameterContainer.appendChild(parameterLabel);
        parameterContainer.appendChild(parametersContainer);
    
        scriptContainer.appendChild(procedureScript);
        scriptContainer.appendChild(parameterContainer);

        btnDivAddStoreProcedure.appendChild(btnEditStoreProcedure);

        modal.appendChild(topBar);
        modal.appendChild(scriptContainer);
        modal.appendChild(btnDivAddStoreProcedure);

        return modal;
    }

    CreateParameter() {
        const parameter = new Parameter();

        return parameter.CreateParameter();
    }
}