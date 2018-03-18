import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private productID;
  private fetchInfo;
  private productInfo;

  constructor(private route: ActivatedRoute, private afs: AngularFirestore, private readonly meta: MetaService) { }

  sendComments(comments){
    this.productInfo.reviews.push(comments);
    this.afs.collection('products').doc(this.productID).set({details: this.productInfo.details, imageURL: this.productInfo.imageURL, name: this.productInfo.name, reviews: this.productInfo.reviews});
  }

  ngOnInit() {
    this.productInfo = {};
    this.route.params.forEach((params: Params) => this.productID = params['id']);
    this.fetchInfo = this.afs.collection('products').doc(this.productID).ref.get().then((doc) => {this.productInfo = doc.data();
      this.meta.setTag('og:title', this.productInfo.name);
      this.meta.setTag('og:description', this.productInfo.details);
      this.meta.setTag('og:image', this.productInfo.imageURL);});
  }
}
