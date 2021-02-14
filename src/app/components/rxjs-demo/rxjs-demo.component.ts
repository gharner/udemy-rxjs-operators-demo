import { Component, OnDestroy, OnInit } from '@angular/core';
import { empty, from, interval, Observable, of, range, ReplaySubject, Subscription, timer } from 'rxjs';
import { filter, map, mapTo, pluck, tap } from 'rxjs/operators';

@Component({
	selector: 'rxjs-demo',
	templateUrl: './rxjs-demo.component.html',
	styleUrls: ['./rxjs-demo.component.css'],
})
export class RxJsDemo implements OnInit, OnDestroy {
	private subscriptionIntervalExample: Subscription;
	public intervalExample = new Observable();

	/*
		rangeObservable = new Observable();
		replayRange = new ReplaySubject<any>(1);
		of_example = new Observable();
		from_example = new Observable();
		timer_example = new Observable();
		empty_example = new Observable();
		mapI_example = new Observable();
		mapII_example = new Observable();
		mapTo_example = new Observable();
		filter_example = new Observable();
		pluck_example = new Observable();
	*/

	constructor() {
		//interval
		this.intervalExample = interval(1000);

		// blocked for collapsing
		{
			/*
			//range
			this.rangeObservable = range(1, 10);
			//of
			this.of_example = of(1, 2, 3, 'four', 5);
			//from
			this.from_example = from([1, 2, 3, 'four', 5]);			
			//timer
			this.timer_example = timer(5000);
			//empty
			this.empty_example = empty();
			//map
			this.mapI_example = interval(1000);
			//mapReply
			this.mapII_example = interval(1000);
			//mapTo
			this.mapTo_example = interval(1000);
			//filter
			this.filter_example = range(1, 10);
			//pluck
			this.pluck_example = from([
				{ name: 'Joe', age: 30 },
				{ name: 'Sarah', age: 35 },
			]);
			*/
		}
	}

	ngOnInit() {
		//interval
		this.subscriptionIntervalExample = this.intervalExample.subscribe(val => {
			console.log('interval: ' + val);
		});

		// blocked for colapsing
		{
			/*
			//range
			this.subscriptionRangeObservable = this.rangeObservable.subscribe(val => {
				console.log('range: ' + val);
				this.replayRange.next(val);
			});
			//of
			this.of_example.subscribe(val => {
				console.log('of: ' + val);
			});

			//from
			this.from_example.subscribe(val => {
				console.log('from: ' + val);
			});

			//timer
			this.timer_example.subscribe(val => {
				console.log('timer: ' + val);
			});

			//empty
			this.empty_example.subscribe(
				val => {
					console.log('empty: ' + val);
				},
				error => {
					console.log('error', error);
				},
				() => {
					console.log('complete');
				}
			);

			//map I
			this.mapI_example.pipe(map((a: number) => a * 2)).subscribe(val => {
				console.log('map I: ' + val);
			});

			//map II
			this.mapII_example.pipe(map((a: number) => a * 2)).subscribe(val => {
				console.log('map II: ' + val);
			});

			//tap
			this.mapII_example
				.pipe(
					map((a: number) => a * 2),
					tap(a => console.log('tap: ' + a)),
					map((a: number) => a + 2)
				)
				.subscribe(val => {
					console.log('map,do,map: ' + val);
				});

			//interesting that this works in the console but not in the view
			this.mapTo_example.pipe(mapTo('MapTo Message')).subscribe(val => {
				console.log('mapTo: ' + val);
			});

			//filter
			this.filter_example.pipe(filter((val: any) => val % 2 === 0)).subscribe(val => {
				console.log('filter: ' + val);
			});

			//pluck
			this.pluck_example.pipe(pluck('name')).subscribe(val => {
				console.log('pluck: ' + val);
			});
			*/
		}
	}

	ngOnDestroy(): void {
		this.subscriptionIntervalExample.unsubscribe();
	}
}
