import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // Declare global variables
  contactUsForm: FormGroup;
  submitted: boolean;
  contactUsFormControl: any;
  
  // Injecting FormBuilder API
  constructor(private contactUsFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactUsForm = this.contactUsFormBuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      message: ['', [Validators.required]],
    });
  }

  // Submit contact us form with valid inputs
  submitContactUsForm(form: FormGroup) {
    // To add formContorl's validators
    this.contactUsFormControl = form.controls
    // To check form is submitted
    this.submitted = true;
    // Check, if entered inputs are valid or not    
    if(form.valid){
      // If the form is valid then showing success prompt message
      return alert("Thank you, your enquiry has been submitted successfully");
    }
  }

}
