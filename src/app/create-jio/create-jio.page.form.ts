import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export class CreateJioPageForm{

    private formBuilder: FormBuilder;
    private createJioForm: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
        this.createJioForm = this.createForm();
    }

    createForm():FormGroup {
        let user_id = localStorage.getItem("userID")
        let jioForm1 = this.formBuilder.group({
            header: ['', [Validators.required]],
            datetime: ['', [Validators.required]],
            duration: ['', [Validators.required]],
            description: ['', [Validators.required]],
            userID: [user_id]

            // locationID: ['', [Validators.required]],
            // userID: ['', [Validators.required]]
        });
        jioForm1.get('duration').setValidators(checkNumber(jioForm1))
        //jioForm1.get('datetime').setValidators(checkDate(jioForm1))
        return jioForm1;
    }

    getForm():FormGroup {
        return this.createJioForm;
    }
}

function checkNumber(createJioForm: FormGroup): ValidatorFn{
    const duration = createJioForm.get('duration');
    const validator = () =>{
        return duration.value >= 1 ? null:{negative: true}
    }
    return validator;
}


function checkDate(createJioForm: FormGroup): ValidatorFn{
    const propDateTime = createJioForm.get('datetime');
    const date = new Date().toISOString;
    console.log(checkDate)
    console.log(date)
    console.log(date<=propDateTime.value)
    const validator = () => {
        return date <= propDateTime.value? null:{backward: true}
    }
    return validator;
}