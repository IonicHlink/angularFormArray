import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  formData: any = {
    question: 'This is Question',
    numberofoptions: 3,
    optionsArray: [
      {
        option: 'afz',
        isRight: true,
      },
      {
        option: 'xv',
        isRight: true,
      },
      {
        option: 'wer',
        isRight: false,
      },
    ],
  };
  constructor() {}
}
