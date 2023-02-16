import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../../scss/2-components/_contact.scss']
})
export class ContactComponent implements OnInit {
  felineForm!: FormGroup;

  constructor(private router: Router) {}

  private initForm() {
    let formName = '';
    let formEmail = '';
    let formSubject = '';
    let formDescription = '';

    this.felineForm = new FormGroup({
      'name': new FormControl(formName, Validators.required),
      'email': new FormControl(formEmail, [Validators.email, Validators.required]),
      'subject': new FormControl(formSubject, Validators.required),
      'description': new FormControl(formDescription, Validators.required),
    });
  }

  ngOnInit() {
    this.initForm();
  }

  //ngSubmit - HTML
  onSubmit() {
    console.log(this.felineForm);
  }

  onCancel() {
    this.felineForm.reset();
    this.router.navigate(['']);
  }

}
