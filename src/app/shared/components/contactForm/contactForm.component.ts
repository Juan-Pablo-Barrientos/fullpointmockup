import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';
import { MailService } from '../mailService.service';

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
  sendEmailDisabled = false;

  constructor(private toastr: ToastrService, private mailService:MailService){}

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
    this.getFormValidationErrors()
    if (this.errors.length!==0){
      this.toastr.error('Falta completar campos o los ha insertado mal', 'Error al enviar')
      this.sendContactForm.markAllAsTouched();
      return
    }
        const recipient = "contacto@fullpointsrl.com.ar";
        const email = this.sendContactForm.controls.emailControl.value;
        const name = this.sendContactForm.controls.nameControl.value;
        const surname = this.sendContactForm.controls.lastNameControl.value;
        const phone = this.sendContactForm.controls.phoneControl.value;
        const subject = this.sendContactForm.controls.subjectControl.value;
        const city = this.sendContactForm.controls.cityControl.value;
        const province = this.sendContactForm.controls.provinceControl.value;
        const message = this.sendContactForm.controls.messageControl.value;
        this.mailService.sendContact(recipient, name, surname, phone, email, subject, city, province, message).subscribe({
          next:(res)=>{
            console.log(res);
            this.toastr.success('Gracias por contactarte!', 'Hemos recibido tu mensaje');
            this.sendEmailDisabled = true;
          },
          error:(err)=>{
            console.log(err);
            this.toastr.error('Ha ocurrido un error en el envio de la consulta');
          }
      })
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
