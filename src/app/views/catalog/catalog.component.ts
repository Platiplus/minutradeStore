import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../../models/productDetails.model';
import { ProductID } from '../../models/productDetails.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { NavbarComponent } from './../../navbar/navbar.component'



@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {

  productsCollection: AngularFirestoreCollection<ProductDetails>;
  products: any;
  productDoc : AngularFirestoreDocument<ProductDetails>;
  product: Observable<ProductDetails>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.productsCollection = this.afs.collection('products');
    this.products = this.productsCollection.snapshotChanges()
      .map(actions => {
          return actions.map(a => {
          const data = a.payload.doc.data() as ProductID;
          const id = a.payload.doc.id;
          return { id, data };
      });
    });
  }

}
