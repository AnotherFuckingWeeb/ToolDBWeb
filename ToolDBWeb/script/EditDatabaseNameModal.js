class EditDatabaseNameModal {

    wrapper = document.getElementById('mainPanel');

    ShowModal() {

        const modal = document.createElement('div');
        modal.classList.add('modal-screen');

        const closeModal = document.createElement('div');
        closeModal.classList.add('close-modal');

        const btnClose = document.createElement('button');
        btnClose.innerText = "X"
        btnClose.addEventListener('click', () => {
            this.wrapper.removeChild(modal);
        })

        closeModal.appendChild(btnClose);

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.src = "img/icons8-burbuja-de-diálogo-con-puntos-64.png";

        imgContainer.appendChild(img);

        const formModal = document.createElement('div');
        formModal.classList.add('form-modal');

        const label = document.createElement('h3');
        label.innerText = "Edit Database name";
    

        const modalInput = document.createElement('input');
        modalInput.classList.add('modal-input');
        modalInput.placeholder = 'Edit name';

        const btnChangeName = document.createElement('button');
        btnChangeName.classList.add('btn-modal');
        btnChangeName.innerText = "Edit name";
        btnChangeName.addEventListener('click', () => {
            const name = document.getElementById('dbName');
            name.innerText = modalInput.value;
        })

        formModal.appendChild(label);
        formModal.appendChild(modalInput);
        formModal.appendChild(btnChangeName);

        modal.appendChild(closeModal);
        modal.appendChild(imgContainer);
        modal.appendChild(formModal)

        return modal;
    }
}
