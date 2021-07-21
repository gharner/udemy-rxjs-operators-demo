import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-reactive-form',
	templateUrl: './reactive-form.component.html',
	styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
	public exampleForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.exampleForm = this.formBuilder.group({
			exampleText1: new FormControl({ value: '', disabled: true }),
			exampleText2: new FormControl({ value: '', disabled: false }, [Validators.required]),
		});
	}

	ngOnInit(): void {
		this.exampleForm.patchValue({
			exampleText1: 'This text is added by patchValue',
		});
	}

	onSubmit(event) {
		console.log('event', event);
		console.log('exampleForm', this.exampleForm);
	}
}
