import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  /** Using 'MAT_DIALOG_DATA' injectable we can reference the 'data' object
   * reference site https://blog.angular-university.io/angular-material-dialog/
   * https://material.angular.io/components/dialog/overview
   */
  constructor(
    private fb: FormBuilder,
    public dialogref: MatDialogRef<DialogueComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.formTitle = data.title;
  }
  form: FormGroup;
  formTitle: string;
  ngOnInit() {
    this.form = this.fb.group({
      name: [name, []],
      description: [name, []]
    });
  }

  onSubmit() {
    this.dialogref.close(this.form.value);
    // console.log(this.form.value);
  }

  onClose() {
    this.dialogref.close();
  }
}
