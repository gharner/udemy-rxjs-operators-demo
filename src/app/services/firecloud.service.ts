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

	addNodeType() {
		let payload = { mas: { nodeType: '' } };
		const accounts = this.afs.firestore.collection('mas-accounts').get();
		accounts.then(querySnapshot => {
			querySnapshot.forEach(doc => {
				const data = doc.data();
				const node = data.mas.accountSettings;
				if (node) {
					if (node.billing === 'true') {
						payload.mas.nodeType = 'parent';
					} else {
						payload.mas.nodeType = 'child';
					}
					this.afs.collection('mas-accounts').doc(doc.id).set(payload, { merge: true });
				}
			});
		});
	}
}
