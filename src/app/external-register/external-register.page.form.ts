import { EmailValidator, FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export class ExternalRegisterPageForm{

    private formBuilder: FormBuilder;
    private extRegisterForm: FormGroup;
    private email: String;
    private provider: String;
    private providerID: String;

    constructor(email: String, provider: String, providerID: String, formBuilder: FormBuilder){
        this.email = email; 
        this.provider = provider;
        this.providerID = providerID;
        this.formBuilder = formBuilder;
        this.extRegisterForm = this.createForm(this.email, this.provider, this.providerID);
    }

    createForm(email, provider, provID):FormGroup {
        console.log("CreateForm")
        this.extRegisterForm = this.formBuilder.group({
            email:[email],
            provider: [provider],
            username: ['', [Validators.required]],
            bio: ['', [Validators.required, Validators.maxLength(200)]],
            workLevel: ['', [Validators.required]],
            telegram: ['', [Validators.required]],
            providerID: [provID]
        });
        console.log(this.extRegisterForm.value)
        return this.extRegisterForm;
    }

    getForm():FormGroup {
        return this.extRegisterForm;
    }
}
