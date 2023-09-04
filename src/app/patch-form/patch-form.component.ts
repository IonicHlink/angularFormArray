import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patch-form',
  templateUrl: './patch-form.component.html',
  styleUrls: ['./patch-form.component.scss'],
})
export class PatchFormComponent {
  angularForm!: FormGroup;
  constructor(public shared: SharedService, public fb: FormBuilder) {
    this.angularForm = this.fb.group({
      question: [''],
      numberofoptions: [''],
      optionsArray: new FormArray([]),
    });
    let data = this.shared.formData;
    console.log(this.shared.formData);
    for (let i = 0; i < data.optionsArray.length; i++) {
      let group = this.fb.group({
        [`option`]: new FormControl(data.optionsArray[i].option),
        [`isRight`]: new FormControl(data.optionsArray[i].isRight),
      });
      (<FormArray>this.angularForm.get('optionsArray')).push(group);
    }
    this.angularForm.patchValue({
      question: data.question,
      numberofoptions: data.numberofoptions,
    });
  }
  getOptionsArray() {
    return <FormArray>this.angularForm.get('optionsArray');
  }
  addOption() {
    this.angularForm.controls['numberofoptions'].setValue(
      this.angularForm.value.numberofoptions + 1
    );
    let group = this.fb.group({
      [`option`]: new FormControl(''),
      [`isRight`]: new FormControl(true),
    });
    (<FormArray>this.angularForm.get('optionsArray')).push(group);
  }
  deleteOption(i: any) {
    this.angularForm.controls['numberofoptions'].setValue(
      this.angularForm.value.numberofoptions - 1
    );
    (<FormArray>this.angularForm.get('optionsArray')).removeAt(i);
  }
  submit() {
    console.log(this.angularForm.value);
  }
}
