class Table {
        
    id = Math.random();

    wrapper = document.getElementById('mainPanel');

    Table = {
        name: '',
        values: []
    }

    CreateTable() {
        const table = document.createElement('div');
        table.classList.add('table');
        
        const divTableName = document.createElement('div');
        divTableName.classList.add('table-name');
        
        const btnTrash = document.createElement('i');
        btnTrash.classList.add('fas');
        btnTrash.classList.add('fa-trash');
        btnTrash.classList.add('pointer-button')
        btnTrash.addEventListener('click', () => {
            const index = tables.indexOf(this.id);
            tables.splice(index, 1);
            this.wrapper.removeChild(table);
        })

        const tableName = document.createElement('p');
        tableName.id = this.id;
        tableName.innerHTML = 'Database Name';

        const btnEditName = document.createElement('img')
        btnEditName.src = "img/icons8-editar-propiedad-50.png"
        btnEditName.classList.add('pointer-button')
        btnEditName.addEventListener('click', () =>{
            this.wrapper.appendChild(new EditTableNameModal(this).ShowModal())
        })

        divTableName.appendChild(btnTrash);
        divTableName.appendChild(tableName);
        divTableName.appendChild(btnEditName);

        const valueWrapper = document.createElement('div');
        valueWrapper.classList.add('value-wrapper');

        const divBtnAddNewValue = document.createElement('div');
        divBtnAddNewValue.classList.add('btn-value')

        const btnAddNewValue = document.createElement('button');
        btnAddNewValue.innerText = "Add New Value"
        btnAddNewValue.addEventListener('click', () => {
            this.Table.values.push(this.CreateValue());

            this.Table.values.forEach((value) => {
                valueWrapper.appendChild(value);
            })
        })

        divBtnAddNewValue.appendChild(btnAddNewValue)

        table.appendChild(divTableName)
        table.appendChild(valueWrapper);
        table.appendChild(divBtnAddNewValue);

        return table;
    }

    CreateValue() {
        const value = new Value()
        return value.CreateValue();
    }

    EditName(input) {
        this.Table.name = input.value;
        document.getElementById(this.id).innerText  = input.value;
    }
}

