class Value {

    id = Math.random();

    wrapper = document.getElementById('mainPanel');
    
    Value = {
        name: '',
        type: '',
        isPrimaryKey: false
    }

    CreateValue() {

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

        const value = document.createElement('div');
        value.classList.add('value');

        const btnPrimaryKey = document.createElement('button');
        btnPrimaryKey.classList.add('primary-key');
        btnPrimaryKey.innerHTML += "<img src='img/icons8-contraseña-1-60.png'/>";
        
        btnPrimaryKey.addEventListener('click', () => {
            if (value.classList[0] === 'value') {
                value.classList = 'value-primary-key'
            }

            else {
                value.classList = 'value';
            }
        });

        const valueName = document.createElement('p');
        valueName.id = this.id
        valueName.innerText = 'value';

        this.Value.name = valueName.innerText;

        const valueType = document.createElement('select');
        valueType.classList.add('value-type');
        
        for(let i = 0; i < values.length; i++) {
            const option = document.createElement('option');
            option.value = values[i];
            option.innerHTML = values[i];

            valueType.appendChild(option);
        }

        this.Value.type = valueType.value;

        const editValue = document.createElement('button');
        editValue.classList.add('edit-value');
        editValue.innerHTML += "<img src='img/icons8-lápiz-60.png'/>"
        editValue.addEventListener('click', () => {
            this.wrapper.appendChild(new EditValueNameModal(this).ShowModal())
        })

        value.appendChild(btnPrimaryKey);
        value.appendChild(valueName);
        value.appendChild(valueType);
        value.appendChild(editValue);

        console.log(this.Value);

        return value;
    }

    EditName(input) {
        this.Value.name = input.value;
        document.getElementById(this.id).innerHTML = input.value;
    }

}