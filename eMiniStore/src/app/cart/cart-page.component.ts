import { Component } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  paymentMethods = ['Credit Card', 'Debit Card', 'UPI'];
  checkoutForm: any;

  //Custom validator to block fake credit card numbers
  fakeCardValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const blockedNumbers = ['1234567890123456', '0000000000000000'];
    return blockedNumbers.includes(control.value) ? { fakeCard: true} : null;
  }; 

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    address: ['', [Validators.required, Validators.minLength(10)]],
    paymentMethod: ['', [Validators.required]],
    cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16), this.fakeCardValidator, Validators.pattern('^[0-9]*$')]]
  })
  }

  get f(){
    return this.checkoutForm.controls;
  }

// Custom input handler to allow only numbers in card number field
onCardNumberInput(event: any) {
  event.target.value = event.target.value.replace(/[^0-9]/g, '');
}

  onSubmit(){
    if (this.checkoutForm.valid){
      alert('Order placed successfully!');
      this.checkoutForm.reset();
    }
  }
}
