class Parameter {
    
    id = Math.random();

    CreateParameter() {

        const values = [
            'BIT',
            'TINYINT',
            'SMALLINT',
            'INT',
            'BIGINT',
            'DECIMAL',
            'NUMERIC',
            'FLOAT',
            'REAL',
            'DATE',
            'TIME',
            'DATETIME',
            'TIMESTAMP',
            'YEAR',
            'CHAR',
            'VARCHAR(255)',
            'VARCHAR(MAX)',
            'TEXT',
            'NCHAR',
            'NVARCHAR(255)',
            'NVARCHAR(MAX)',
            'NTEXT',
            'BINARY',
            'VARBINARY',
            'VARBINARY(MAX)',
            'IMAGE',
            'CLOB',
            'BLOB',
            'XML',
            'JSON'
        ]

        const parameter = document.createElement('div');
        parameter.classList.add('parameter-value');

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('left-button');
        btnDelete.innerText = "X";
        btnDelete.addEventListener('click', () => {
            const wrapper = parameter.parentElement;

            wrapper.removeChild(parameter);
        })

        const valueName = document.createElement('p');
        valueName.id = this.id;
        valueName.innerText = "value";

        const valueLabel = document.createElement('p');
        valueLabel.innerText = 'AS';
        
        const cmbType = document.createElement('select');
        cmbType.classList.add('parameter-type')

        for (let i = 0; i < values.length; i++) {
            const option = document.createElement('option');
            option.innerText = values[i];

            cmbType.appendChild(option);
        }

        const btnEditValueName = document.createElement('button');
        btnEditValueName.classList.add('right-button');
        btnEditValueName.innerHTML = "<img src='img/icons8-lápiz-60.png'/>";
        btnEditValueName.addEventListener('click', () => {
            let wrapper = document.getElementById('mainPanel');
            wrapper.appendChild(new EditParameterNameModal(this).ShowEditNameModal());
        })

        parameter.appendChild(btnDelete);
        parameter.appendChild(valueName);
        parameter.appendChild(valueLabel);
        parameter.appendChild(cmbType);
        parameter.appendChild(btnEditValueName);
        
        return parameter;
    }

    EditParameterName(input) {
        const valueName = document.getElementById(this.id);
        valueName.innerText = input.value;
    }

}

