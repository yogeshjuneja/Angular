import { AbstractControl } from "@angular/forms";

function forbiddennamevalidator(control: AbstractControl): { [key: string]: any } | null {
  const forbidden = /admin/.test(control.value);
  return forbidden ? { 'forbiddenname': { value: control.value } } : null;
}
