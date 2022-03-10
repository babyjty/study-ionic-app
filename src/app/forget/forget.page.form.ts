import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class ForgetPageForm{

    private formBuilder: FormBuilder;
    private forgetForm: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
        this.forgetForm = this.createForm();
    }

    createForm():FormGroup {
        return this.forgetForm = this.formBuilder.group({
            // This function receives objects that will inform the properties of the form that we want to create & also how each property will be validated 
            email:['', [Validators.required, Validators.email]],
        });
    }

    getForm():FormGroup{
        return this.forgetForm;
    }

}