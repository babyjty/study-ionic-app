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

    // create form to specify all the required fields and the conditions surrounding these fields
    // email: user email as per obtained from angularx social login for registration
    // provider: provider of email (GOOGLE / FACEBOOK)
    // providerID: ID of user as per that unique to external provider (i.e. the unique user identifier for GOOGLE/FACEBOOK)
    createForm(email, provider, provID):FormGroup {
        console.log("CreateForm")
        this.extRegisterForm = this.formBuilder.group({
            email:[email],
            provider: [provider],
            username: ['', [Validators.required]],
            bio: ['', [Validators.required, Validators.maxLength(200)]],
            workLevel: ['', [Validators.required]],
            telegram: ['', [Validators.required]],
            providerID: [provID],
            photoURL: ['https://lh3.googleusercontent.com/PxYZd_6SRthIuCC1OvPnpNFTA5zGvyv7woU2o_g-5xrtwwhT5H6KFe4ZZYZMXjrOAyZ_1xLkOzILkw5T2HybxxliuF2l-cDqbckEFg=w600']
        });
        console.log(this.extRegisterForm.value)
        return this.extRegisterForm;
    }

    // Returns the form for access to form content
    getForm():FormGroup {
        return this.extRegisterForm;
    }
}
