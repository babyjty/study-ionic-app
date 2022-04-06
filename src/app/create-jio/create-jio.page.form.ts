import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { format, parseISO } from "date-fns";

export class CreateJioPageForm{

    private formBuilder: FormBuilder;
    private createJioForm: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
        this.createJioForm = this.createForm();
    }

    createForm():FormGroup {
        let jioForm1 = this.formBuilder.group({
            header: ['', [Validators.required]],
            datetime: ['', [Validators.required]],
            duration: ['', [Validators.required]],
            description: ['', [Validators.required]],
            datetimestring: [''],

            jioLocation: [''],
            jioAddress: [''],
            jioRating: [''],
            jioImage: [''],
            openingHours: [''],
            googleid: ['']
        });
        jioForm1.get('duration').setValidators(checkNumber(jioForm1))
        // jioForm1.get('datetime').setValidators(checkDate(jioForm1))
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


function checkDate2(createJioForm: FormGroup): ValidatorFn{
    let propDateTime = createJioForm.get('datetime');
    let date = new Date().toISOString;
    console.log(checkDate)
    console.log(date)
    console.log(date<=propDateTime.value)
    const validator = () => {
        return date <= propDateTime.value? null:{backward: true}
    }
    return validator;
}

function checkDate(createForm): ValidatorFn{
    const propdate = new Date(createForm.get('datetime')).getDate();
    const date = new Date().getDate();

    const validator = () => {
        return propdate < date? null:{backward: true}
    }
    return validator;
}