import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sendCV',
  templateUrl: './sendCV.component.html',
  styleUrls: ['./sendCV.component.scss']
})
export class SendCVComponent implements OnInit {
  selectedFile: File | null = null;
  fileName: string = 'Seleccione archivo';
  sendCvForm:any;
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
    this.sendCvForm=new FormGroup({
      nameControl: new FormControl('',[Validators.required]),
      lastNameControl: new FormControl('',[Validators.required]),
      phoneControl: new FormControl('',[Validators.required, Validators.pattern('^[0-9]+$')]),
      ageControl: new FormControl('',[Validators.required, Validators.pattern('^[0-9]+$')]),
      emailControl: new FormControl('',[Validators.required, Validators.email]),
      sectionControl: new FormControl('',[Validators.required])
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  updateFileName(input: any) {
    this.selectedFile= input.files[0];
    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
    } else {
      this.fileName = 'Choose file';
    }
  }

  sendEmail() {
    const MAILGUN_DOMAIN = 'sandbox84d85928f2de4bcfa88d62023437858c.mailgun.org';
    const formData = new FormData();
    formData.append('from', this.sendCvForm.controls.emailControl.value);
    formData.append('to', 'vchirdo@fullpointsrl.com.ar');
    formData.append('subject', 'Juan Barrientos CV');
    formData.append('text', 'Hola mi nombre es '+this.sendCvForm.controls.nameControl.value+' '+this.sendCvForm.controls.lastNameControl.value+
    ' mi teléfono es '+this.sendCvForm.controls.phoneControl.value+' y tengo '+this.sendCvForm.controls.ageControl.value+' años'+
    ' estoy aplicando para la sección de '+this.sendCvForm.controls.sectionControl.value+
    ' te dejo mi email para contactarte conmigo '+this.sendCvForm.controls.emailControl.value);
    formData.append('attachment', this.selectedFile as Blob);
    this.getFormValidationErrors()
    if (this.errors.length!==0||this.selectedFile==null){
      this.toastr.error('Falta completar campos o los ha insertado mal', 'Error al enviar')
      this.sendCvForm.markAllAsTouched();
      return
    } else {
      this.toastr.success('Gracias por postularte!', 'CV Enviado');
    }
    axios.post(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, formData, {
      auth: {
        username: 'fullpointsrl',
        password: "50a3d0ed274a9d204b8e8d4944ac9a2b-19806d14-33ea7fae"
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
    Object.keys(this.sendCvForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.sendCvForm.get(key).errors;
      if(controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
          this.errors.push(keyError);
        });}
      }
    );
  }
}
