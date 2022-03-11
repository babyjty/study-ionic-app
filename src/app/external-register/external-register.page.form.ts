import { EmailValidator, FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export class ExternalRegisterPageForm{

    private formBuilder: FormBuilder;
    private extRegisterForm: FormGroup;
    private email: String;
    private agent: String;

    constructor(email: String, agent: String, formBuilder: FormBuilder){
        this.email = email; 
        this.agent = agent;
        this.formBuilder = formBuilder;
        this.extRegisterForm = this.createForm(this.email, this.agent);
    }

    createForm(email, agent):FormGroup {
        this.extRegisterForm = this.formBuilder.group({
            email:[this.email],
            agent: [this.agent],
            username: ['', [Validators.required]],
            bio: ['', [Validators.required, Validators.maxLength(250)]],
            worklevel: ['', [Validators.required]]
        });
        return this.extRegisterForm;
    }

    getForm():FormGroup {
        return this.extRegisterForm;
    }
}
