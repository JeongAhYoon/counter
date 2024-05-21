import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: []
})
export class AddpostComponent implements OnInit {
public postForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null,[Validators.required,, Validators.minLength(6), 
       ]),
      description: new FormControl(null,[Validators.required, Validators.minLength(10),
      ])
  })

}

public onAddPost() {
  if(!this.postForm.valid) {
    return;
  }
  console.log(this.postForm.value);
}

public showDescription() :string {
  const descriptionForm = this.postForm.get('description');
  if (descriptionForm.touched && !descriptionForm.valid) { 
      if(descriptionForm.errors.required) {
        return 'Description is required';
      }
      if (descriptionForm.errors.minlength) {
        return 'Description should be min 10 characters length';
      }
    }
}
}
