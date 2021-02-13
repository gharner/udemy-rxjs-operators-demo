import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-obj-demo',
	templateUrl: './obj-demo.component.html',
	styleUrls: ['./obj-demo.component.css'],
})
export class ObjDemoComponent implements OnInit {
	public names: string[] = ['Walker', 'Greg'];

	constructor() {}

	ngOnInit(): void {
		this.sortNames(this.names);
	}

	sortNames(namesArray: string[]): string[] {
		return namesArray.sort((a, b) => a.localeCompare(b));
	}
}
