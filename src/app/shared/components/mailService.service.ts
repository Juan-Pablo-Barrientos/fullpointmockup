import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private apiUrl = 'https://fullpointback.vercel.app'; // Replace with your server URL

  constructor(private http: HttpClient) {}

  sendCV(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl+"/cv", formData);
  }

  sendContact(recipient: string, name:string, surname:string, phone:string, email:string, subject:string, city:string, province:string, message:string ) {
    const body = {
      recipient: recipient,
      name: name,
      surname: surname,
      phone: phone,
      email:email,
      subject,
      city,
      province,
      message
    };

    return this.http.post(`${this.apiUrl}/contact`, body, {
      responseType: 'text' // Set the expected response type to text
    });
  }
}
