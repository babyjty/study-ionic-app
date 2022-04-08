import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { format, parseISO } from "date-fns";

export class CreateJioPageForm{

    private formBuilder: FormBuilder;
    private createJioForm: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
        this.createJioForm = this.createForm();
    }

    // Creates form and specifies the fields and conditions for each field for the form submission to be successful.
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
        return jioForm1;
    }

    // getForm to obtain form contents since createJio forms are set to private
    getForm():FormGroup {
        return this.createJioForm;
    }
}

// Checks if input duration is >= 1 hrs and input duration <= 10 hrs
function checkNumber(createJioForm: FormGroup): ValidatorFn{
    const duration = createJioForm.get('duration');
    const validator = () =>{
        return (duration.value >= 1 && duration.value <= 10)? null:{negative: true}
    }
    return validator;
}
