class validatingInput {
    constructor(name, regExp) {
        this.field = $(name);
        this.regExp = regExp;
    }

    doValidation(e) {
        if (this.regExp.test(this.field.val())){
            this.field.removeClass('input-not-valid');
        } else {
            e.preventDefault();
            this.field.addClass('input-not-valid');
        }
    }
}

let cardHolder = new validatingInput('.input_card-holder', /^[a-z]{4,}$/i);
let cardNumber1 = new validatingInput('#card-number1', /^[0-9]{4}$/);
let cardNumber2 = new validatingInput('#card-number2', /^[0-9]{4}$/);
let cardNumber3 = new validatingInput('#card-number3', /^[0-9]{4}$/);
let cardNumber4 = new validatingInput('#card-number4', /^[0-9]{4}$/);
let cardCvv = new validatingInput('.input_card-cvv', /^[0-9]{3}$/);

$('.payment__card').submit(function (e) {
    cardHolder.doValidation(e);
    cardNumber1.doValidation(e);
    cardNumber2.doValidation(e);
    cardNumber3.doValidation(e);
    cardNumber4.doValidation(e);
    cardCvv.doValidation(e);
});

