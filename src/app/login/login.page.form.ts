import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageForm{

    private formBuilder: FormBuilder;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
    }

    createForm():FormGroup {
        return this.formBuilder.group({
            // This function receives objects that will inform the properties of the form that we want to create & also how each property will be validated 
            email:['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }
}