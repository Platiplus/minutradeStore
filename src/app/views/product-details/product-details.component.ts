import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private productID;
  private fetchInfo;
  private productInfo;

  constructor(private route: ActivatedRoute, private afs: AngularFirestore) { }

  sendComments(comments){
    this.productInfo.reviews.push(comments);
    this.afs.collection('products').doc(this.productID).set({details: this.productInfo.details, imageURL: this.productInfo.imageURL, name: this.productInfo.name, reviews: this.productInfo.reviews});
  }

  ngOnInit() {
    this.productInfo = {};
    this.route.params.forEach((params: Params) => this.productID = params['id']);
    this.fetchInfo = this.afs.collection('products').doc(this.productID).ref.get().then((doc) => this.productInfo = doc.data());
  }

}
