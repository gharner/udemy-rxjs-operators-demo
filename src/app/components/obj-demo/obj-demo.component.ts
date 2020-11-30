import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-obj-demo',
	templateUrl: './obj-demo.component.html',
	styleUrls: ['./obj-demo.component.css'],
})
export class ObjDemoComponent implements OnInit {
	names = ['Walker', 'Greg'];

	constructor() {}

	ngOnInit(): void {
		const obj = {
			name: this.names,
			doSort: function () {
				return this.name.sort((a, b) => a.localeCompare(b));
			},
		};
		console.log(obj.doSort());
		this.sayHello();
	}

	sayHello() {
		console.log(`Greetings ${this.names}`);
	}
}
