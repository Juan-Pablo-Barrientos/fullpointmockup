import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MailService } from '../mailService.service';
import { HttpErrorResponse } from '@angular/common/http';

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
  sendCVDisabled = false
  errors: any[]=[];

  constructor(private toastr: ToastrService, private mailService:MailService){}

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

  sendEmail() {
    this.getFormValidationErrors();
    if (this.errors.length !== 0 || !this.selectedFile) {
      this.toastr.error('Falta completar campos o los ha insertado mal', 'Error al enviar');
      this.sendCvForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('cv', this.selectedFile, this.selectedFile.name);
    formData.append('recipient', 'nmayorga@fullpointsrl.com.ar');
    formData.append('email', this.sendCvForm.controls.emailControl.value);
    formData.append('name', this.sendCvForm.controls.nameControl.value);
    formData.append('surname', this.sendCvForm.controls.lastNameControl.value);
    formData.append('phone', this.sendCvForm.controls.phoneControl.value);
    formData.append('age', this.sendCvForm.controls.ageControl.value);
    formData.append('position', this.sendCvForm.controls.sectionControl.value);

    this.mailService.sendCV(formData).subscribe({
      next: (res) => {
        console.log(res);
        this.sendCVDisabled = true;
        this.toastr.success('Gracias por postularte!', 'CV Enviado');
      },
      error: (err : HttpErrorResponse) => {
        if (err.status === 200 || err.status === 0){
          this.sendCVDisabled = true;
          this.toastr.success('Gracias por postularte!', 'CV Enviado');
        } else {
          console.log(err);
          this.sendCVDisabled = false;
          this.toastr.error('Ha ocurrido un error en el envio del CV');
        }
      }
    });
  }

  convertFileToBase64(file: File | null): Promise<string | null> {
    return new Promise((resolve, reject) => {
      if (file) {
        const fileReader = new FileReader();
        fileReader.onload = (event: any) => {
          const base64String = event.target.result?.split(',')[1]; // Extract base64 string from data URL
          resolve(base64String);
        };
        fileReader.onerror = (event: any) => {
          console.error('Error reading file:', event);
          reject(null);
        };
        fileReader.readAsDataURL(file);
      } else {
        resolve(null);
      }
    });
  }
}
