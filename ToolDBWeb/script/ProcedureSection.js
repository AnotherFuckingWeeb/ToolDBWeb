class ProcedureSection {
    
    wrapper = document.getElementById('mainPanel');

    ShowProcedureSection() {
        const storeProcedureSection = document.createElement('div');
        storeProcedureSection.classList.add('procedure-section');

        const storeProcedureSectionTop = document.createElement('div');
        storeProcedureSectionTop.classList.add('procedure-section-top');

        const sectionTitle = document.createElement('div');
        sectionTitle.classList.add('section-title');

        const sectionIcon = document.createElement('div');
        sectionIcon.classList.add('section-icon');

        const icon = document.createElement('img');
        icon.src = "img/icons8-flujo-de-trabajo-64.png";

        sectionIcon.appendChild(icon);

        const modalName = document.createElement('p');
        modalName.innerText = "Store Procedures"

        const btnClose = document.createElement('button');
        btnClose.classList.add('close-button');
        btnClose.innerText = "X";
        btnClose.addEventListener('click', () => {
            this.wrapper.removeChild(storeProcedureSection);
        })

        sectionTitle.appendChild(sectionIcon);
        sectionTitle.appendChild(modalName);

        storeProcedureSectionTop.appendChild(sectionTitle);
        storeProcedureSectionTop.appendChild(btnClose);

        const procedureCardContainer = document.createElement('div');
        procedureCardContainer.classList.add('procedure-card-container');

        storeProcedures.forEach((storeProcedure) => {
            procedureCardContainer.appendChild(storeProcedure.CreateProcedure())
            console.log(storeProcedure)
        })

        const AddProcedureCard = document.createElement('div');
        AddProcedureCard.classList.add('procedure-card');
        AddProcedureCard.addEventListener('click', () => {
            this.wrapper.removeChild(storeProcedureSection);
            this.wrapper.appendChild(new StoreProcedureModal().ShowProcedureModal())
        })

        const AddProcedureContainer = document.createElement('div');
        AddProcedureContainer.classList.add('add-procedure-container');

        const plusCircle = document.createElement('div');
        plusCircle.classList.add('plus-circle');

        const plusSign = document.createElement('h1');
        plusSign.innerText = '+';

        const AddProcedureLabel = document.createElement('h3');
        AddProcedureLabel.innerText = "Add New Store Procedure";    

        plusCircle.appendChild(plusSign);
        AddProcedureContainer.appendChild(plusCircle);
        AddProcedureContainer.appendChild(AddProcedureLabel);
        AddProcedureCard.appendChild(AddProcedureContainer);

        procedureCardContainer.appendChild(AddProcedureCard);

        storeProcedureSection.appendChild(storeProcedureSectionTop);
        storeProcedureSection.appendChild(procedureCardContainer);

        return storeProcedureSection;
    }
}