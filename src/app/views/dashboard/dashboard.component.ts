import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../../models/productDetails.model';
import { ProductID } from '../../models/productDetails.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  productsCollection: AngularFirestoreCollection<ProductDetails>;
  products: any;
  productDoc : AngularFirestoreDocument<ProductDetails>;
  product: Observable<ProductDetails>;

  getPost(productID) {
    this.productDoc = this.afs.doc('products/'+productID);
    this.product = this.productDoc.valueChanges();
  }

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.productsCollection = this.afs.collection('products');
    this.products = this.productsCollection.snapshotChanges()
      .map(actions => {
          return actions.map(a => {
          const data = a.payload.doc.data() as ProductDetails;
          const id = a.payload.doc.id;
          return { id, data };
      });
    });
  }

}
