import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export class RegisterPageForm{

    private formBuilder: FormBuilder;
    private registerForm: FormGroup;

    constructor(formBuilder: FormBuilder){
        this.formBuilder = formBuilder;
        this.registerForm = this.createForm();
    }

    createForm():FormGroup {
        let registerForm =  this.formBuilder.group({
            // This function receives objects that will inform the properties of the form that we want to create & also how each property will be validated 
            email:['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            cpassword: ['', [Validators.required]],
            username: ['', [Validators.required]],
            bio: ['', [Validators.required, Validators.maxLength(200)]],
            worklevel: ['',[Validators.required]],
            provider: ['LOCAL']
        });
        
        registerForm.get('cpassword').setValidators(passwordMatch(registerForm));
        return registerForm;
    }

    getForm():FormGroup {
        return this.registerForm;
    }
}

function passwordMatch(registerForm: FormGroup): ValidatorFn {
    const password = registerForm.get('password');
    const cpassword = registerForm.get('cpassword');

    const validator = () => {
        return password.value == cpassword.value ? null:{notMatch: true}
    };

    return validator;
}