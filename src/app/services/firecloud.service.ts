import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class FirecloudService {
	constructor(private afs: AngularFirestore) {}

	getCollectionByReference(col: string, fld: string, operator: any, condition: any): Observable<any> {
		return this.afs
			.collection(col, ref => ref.where(fld, operator, condition))
			.snapshotChanges()
			.pipe(
				map(changes => {
					return changes.map(c => {
						const data = c.payload.doc.data() as any;
						data.id = c.payload.doc.id;
						return data;
					});
				})
			);
	}

	getCollection(col: string): Observable<any> {
		return this.afs
			.collection(col)
			.snapshotChanges()
			.pipe(
				map(changes => {
					return changes.map(c => {
						const data = c.payload.doc.data() as any;
						data.id = c.payload.doc.id;
						return data;
					});
				})
			);
	}
}
