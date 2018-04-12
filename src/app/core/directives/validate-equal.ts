import {Directive, forwardRef, Attribute} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appValidateEqual][formControlName],[appValidateEqual][formControl],[appValidateEqual][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true}
  ]
})
export class EqualValidator implements Validator {
  constructor(@Attribute('appValidateEqual') public validateEqual: string) {
  }

  validate(c: AbstractControl): { [key: string]: any } {
    const v = c.value;
    const e = c.root.get(this.validateEqual);
    if (e && v !== e.value) {
      return {
        validateEqual: false
      };
    }
    return null;
  }
}
