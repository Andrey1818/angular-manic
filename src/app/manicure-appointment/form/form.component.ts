import {Component, forwardRef, OnInit, Provider} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {MyValidators} from "./validators/my.validators";
import {Person} from "../../shared/app.interfaces";

const VALUE_ACCESSOR:Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting : forwardRef(() => FormComponent),
  multi: true
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers : [VALUE_ACCESSOR]
})
export class FormComponent implements OnInit, ControlValueAccessor {

  person: Person|undefined = {
    name: '',
    surname : '',
    numberPhone : ''
  }

  form: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      surname: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          MyValidators.ruLanguage
        ]
      ),
      phoneNumber : new FormControl('', [Validators.required, MyValidators.checkCode])
    })
  }

  private onChange = (value : any) => {}

  setState(name: string, surname: string, numberPhone: string ) {
    if(this.form.invalid){
      this.person = undefined
      this.onChange(this.person)
      return
    }
    this.person = ({
      name,
      surname,
      numberPhone
    })

    this.onChange(this.person)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }
}
