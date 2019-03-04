document.getElementById('cardForm').addEventListener('submit', e => {

    class validatingInput {
        constructor(name, regExp, errorField, errorText) {
            this.value = document.getElementById(name).value;
            this.field = document.getElementById(name);
            this.regExp = regExp;
            this._doValidation();
        }

        _doValidation() {
            if (this.regExp.test(this.value)){
                this.field.classList.remove('not-valid-input');
                this.field.classList.add('valid-input');
            } else {
                e.preventDefault();
                this.field.classList.add('not-valid-input');
            }
        }
    }

    let cardHolderInput = new validatingInput('cardHolder', /^[a-zа-яё]+$/i);
    //let phoneNumInput = new validatingInput('phone', /^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/i, 'phone-error', "Номер не соответствует шаблону: [&nbsp;+7(000)000-0000&nbsp;]");
    //let mailInput = new validatingInput('mail', /^\w{2,}[.-]?\w{2,}@mail.ru$/, 'mail-error', "Некорректный формат email");
})