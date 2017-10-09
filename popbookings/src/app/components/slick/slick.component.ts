import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slick',
  templateUrl: './slick.component.html',
  styleUrls: ['./slick.component.css']
})
export class SlickComponent implements OnInit {
  sliderLeft: number;
  activeImageNumber: number;
  imageList: ImageData[];
  @Input("count") inputImageCount: number;
  @Output('countChanged') outputImageCount = new EventEmitter<number>();

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.sliderLeft = 0;
    this.activeImageNumber = 1;
    this.imageList = [];
  }

  slideToLeft() {
    if(this.sliderLeft < 0) this.sliderLeft += 220;
  }

  slideToRight() {
    if(this.inputImageCount * 220 + this.sliderLeft > 220) this.sliderLeft -= 220;
  }

  setActivated(number) {
    this.activeImageNumber = number;
  }

  changeLister(event) {
    var reader = new FileReader();
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(event.target.files[0]);
  }

  handleReaderLoaded(event) {
    this.imageList.push({
      image: event.target.result,
      number: this.inputImageCount + 1
    });
    this.inputImageCount = this.imageList.length;
    this.outputImageCount.emit(this.inputImageCount);
    this.elementRef.nativeElement.querySelector("#upload_image").value = "";
  }

}
interface ImageData {
  image: string;
  number: number;
}
