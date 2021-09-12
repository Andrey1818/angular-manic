import {FormControl} from "@angular/forms";

export class MyValidators {
  static ruLanguage(control: FormControl):{[key:string] : boolean} | null {
    if(/[а-я]/.test(control.value)) {
      return null
    }
    return {noRu : true}
  }
  static checkCode(control: FormControl):{[key:string] : boolean} | null {
    const codes = ['039', '050', '063', '066', '067', '068', '073', '093', '095', '096', '097', '098', '099']
    if(codes.includes(control.value.slice(0, 3))){
      return null
    }
    return {falseCode : true}
  }
}
