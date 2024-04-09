import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactForm',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.scss']
})
export class ContactFormComponent implements OnInit {
  sendContactForm:any;
  preSetValue:any;
  preSetValue2:any;
  errors: any[]=[];

  constructor(private toastr: ToastrService){}

  @ViewChild('myInput') myInput: ElementRef | undefined;
  @ViewChild('myInput2') myInput2: ElementRef | undefined;

  ngAfterViewInit() {
    this.preSetValue = this.myInput?.nativeElement.value;
    this.preSetValue2 = this.myInput2?.nativeElement.value;
  }

  ngOnInit(): void {
    this.sendContactForm=new FormGroup({
      nameControl: new FormControl('',[Validators.required]),
      lastNameControl: new FormControl('',[Validators.required]),
      phoneControl: new FormControl('',[Validators.pattern('^[0-9]+$')]),
      emailControl: new FormControl('',[Validators.required, Validators.email]),
      subjectControl: new FormControl('',[Validators.required]),
      cityControl: new FormControl(''),
      provinceControl: new FormControl(''),
      messageControl: new FormControl('',[Validators.required]),
    });
  }

  sendEmail() {
    const MAILGUN_DOMAIN = 'sandbox84d85928f2de4bcfa88d62023437858c.mailgun.org';
    const formData = new FormData();
    formData.append('from', this.sendContactForm.controls.emailControl.value);
    formData.append('to', 'contacto@fullpointsrl.com.ar');
    formData.append('subject', this.sendContactForm.controls.subjectControl.value);
    formData.append('text', 'Hola mi nombre es '+this.sendContactForm.controls.nameControl.value+' '+this.sendContactForm.controls.lastNameControl.value)
    if (this.sendContactForm.controls.phoneControl.value){
      formData.append('text', 'Teléfono: '+this.sendContactForm.controls.phoneControl.value)
    };
    if (this.sendContactForm.controls.cityControl.value){
      formData.append('text', 'Vivo en: '+this.sendContactForm.controls.cityControl.value)
    };
    if (this.sendContactForm.controls.provinceControl.value){
      formData.append('text', this.sendContactForm.controls.provinceControl.value)
    };
    formData.append('text', 'Email: '+this.sendContactForm.controls.emailControl.value)
    formData.append('text', 'Consulta: '+this.sendContactForm.controls.messageControl.value)

    this.getFormValidationErrors()
    if (this.errors.length!==0){
      this.toastr.error('Falta completar campos requeridos', 'Error al enviar')
      this.sendContactForm.markAllAsTouched();
      return
    } else {
      this.toastr.success('Gracias por contactarte!', 'Hemos recibido tu mensaje');
    }
    axios.post(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, formData, {
      auth: {
        username: 'api',
        password: this.preSetValue+this.preSetValue2
      },
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
  }

  getFormValidationErrors() {
    this.errors=[]
    Object.keys(this.sendContactForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.sendContactForm.get(key).errors;
      if(controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
          this.errors.push(keyError);
        });}
      }
    );
  }

}
