import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export class JioFormForm{

    private formBuilder: FormBuilder;
    private createJioForm: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
        this.createJioForm = this.createForm();
    }

    createForm():FormGroup {
        let jioForm = this.formBuilder.group({
            locationID: ['', [Validators.required]],
            date: ['', [Validators.required]],
            startTime: ['', [Validators.required]],
            endTime: ['', [Validators.required]],
            userID: ['', [Validators.required]],
        });
        return this.createJioForm;
    }

    getForm():FormGroup {
        return this.createJioForm;
    }
}

function checkTime(registerForm: FormGroup): ValidatorFn{

    const validator = () => {
        return 
    }

    return;
}