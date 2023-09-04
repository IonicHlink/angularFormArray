import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {
  options: any = [];
  title = 'dynamicOptionsForm';
  angularForm!: FormGroup;
  constructor(private fb: FormBuilder,public shared:SharedService,public router:Router) {
    this.angularForm = this.fb.group({
      question: [''],
      numberofoptions: [''],
      optionsArray: new FormArray([]),
    });
  }
  onOptionCountChange(event: any) {
    console.log(event.target.value);
    console.log(this.angularForm);
    (<FormArray>this.angularForm.get('optionsArray')).clear()
    for(let i = 0;i<event.target.value;i++){
      let group = this.fb.group({
        [`option`]: new FormControl(''),
        [`isRight`]: new FormControl(true),
      });
      (<FormArray>this.angularForm.get('optionsArray')).push(group);
    }
  }
  getOptionsArray() {
    return <FormArray>this.angularForm.get('optionsArray');
  }
  submit(){
    console.log(this.angularForm.value);
this.shared.formData = this.angularForm.value
this.router.navigate(['patch'])
  }
}
