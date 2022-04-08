import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export class RegisterPageForm{

    private formBuilder: FormBuilder;
    private registerForm: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
        this.registerForm = this.createForm();
    }

    // To create from and specifies the various fields and conditions required for each field
    createForm():FormGroup {
        let registerForm =  this.formBuilder.group({
            // This function receives objects that will inform the properties of the form that we want to create & also how each property will be validated 
            email:['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            cpassword: ['', [Validators.required]],
            username: ['', [Validators.required]],
            bio: ['', [Validators.required, Validators.maxLength(200)]],
            workLevel: ['',[Validators.required]],
            telegram: ['', [Validators.required]],
            photoURL: [''],
            provider: ['LOCAL']
        });
        
        registerForm.get('cpassword').setValidators(passwordMatch(registerForm));
        return registerForm;
    }

    getForm():FormGroup {
        return this.registerForm;
    }
}

// Function to validate if the password and compare password fields are the same
function passwordMatch(registerForm: FormGroup): ValidatorFn {
    const password = registerForm.get('password');
    const cpassword = registerForm.get('cpassword');

    const validator = () => {
        return password.value == cpassword.value ? null:{notMatch: true}
    };

    return validator;
}