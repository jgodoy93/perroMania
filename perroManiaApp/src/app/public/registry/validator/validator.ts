import { AbstractControl, FormGroup } from '@angular/forms';

export function passwordValidator(control: AbstractControl) {
  if (control && (control.value !== null || control.value !== undefined)) {
    const confirmPassword = control.value;
    //Toma el formGroup original declarado en card-registry-component.ts a través de root
    const passwordControl = control.root.get('password');

    if (passwordControl) {
      const password = passwordControl.value;
      if (password !== confirmPassword) {
        return {
          isError: true,
        };
      }
    }
  }
  return null;
}
