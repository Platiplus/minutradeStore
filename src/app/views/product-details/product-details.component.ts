import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { MetaService } from '@ngx-meta/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public productID;
  public fetchInfo;
  public productInfo;
  public comments;

  constructor(private route: ActivatedRoute, private afs: AngularFirestore, private readonly meta: Meta) { }

  sendComments(comments){
    this.productInfo.reviews.push(comments);
    this.afs.collection('products').doc(this.productID).set({details: this.productInfo.details, imageURL: this.productInfo.imageURL, name: this.productInfo.name, reviews: this.productInfo.reviews});
    this.comments = "";
  }

  ngOnInit() {
    this.productInfo = {};
    this.route.params.forEach((params: Params) => this.productID = params['id']);
    this.fetchInfo = this.afs.collection('products').doc(this.productID).ref.get().then((doc) => {this.productInfo = doc.data();
      this.meta.updateTag({ property: 'og:title', content: this.productInfo.name });
      this.meta.updateTag({ property: 'og:description', content: this.productInfo.details });
      this.meta.updateTag({ property: 'og:image', content: this.productInfo.imageURL });
  });
}
}
