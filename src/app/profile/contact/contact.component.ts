import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  message: FormControl = new FormControl('', [Validators.required, Validators.maxLength(2048)]);
  honeypot: FormControl = new FormControl(''); // used to prevent spam
  submitted = false; // show and hide the succes message
  isLoading = false; // disable the submit button if we're loading
  responseMessage: string; // the response message to show to the user
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.responseMessage = '';
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void {
  }

  // grab all the fields and their values
  submitForm(): void {
    // tslint:disable-next-line:triple-equals
    if (this.form.status == 'VALID' && this.honeypot.value == ''){
      this.form.disable(); // disable form if it's valid to disable multiple submissions
      const formData: any = new FormData();
      formData.append('name', this.form.get('name')?.value);
      formData.append('email', this.form.get('email')?.value);
      formData.append('message', this.form.get('message')?.value);
      this.isLoading = true;
      this.submitted = false;
      // tslint:disable-next-line:max-line-length
      this.http.post('https://script.google.com/macros/s/AKfycbwCgIn8E67bxAvIE4urtjvlTzDsh8R-7mhVlDyW/exec', formData).subscribe(
        (response) => {
          this.responseMessage = 'Merci pour votre message ! Je vous recontacte dès que possible !';
          this.form.enable(); // On ré-active le formulaire après la réussite de l'envoi
          this.submitted = true;
          this.isLoading = false;
          console.log(response);
        },
        (error) => {
          this.responseMessage = 'Oups ! Une erreur est survenue, rechargez la page et réessayez.';
          this.form.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(error);
        }
      );
    }
  }
}
