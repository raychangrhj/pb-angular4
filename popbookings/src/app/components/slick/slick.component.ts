// npm install ng2-img-cropper --save
import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-img-cropper';
import { AccountService } from 'app/services/account.service';

@Component({
  selector: 'app-slick',
  templateUrl: './slick.component.html',
  styleUrls: ['./slick.component.css']
})
export class SlickComponent implements OnInit {
  data: any;
  cropping: boolean = false;
  cropperSettings: CropperSettings;
  croppedWidth: number;
  croppedHeight: number;
  sliderLeft: number;
  activeImageNumber: number;
  imageList: ImageData[];
  working: boolean = false;
  @ViewChild("cropper", undefined) cropper: ImageCropperComponent;
  @Input("count") inputImageCount: number;
  @Output("countChanged") outputImageCount = new EventEmitter<number>();

  constructor(
    private elementRef: ElementRef,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.data = {};

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    this.cropperSettings.width = 120;
    this.cropperSettings.height = 120;
    this.cropperSettings.croppedWidth = 120;
    this.cropperSettings.croppedHeight = 120;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 300;
    this.cropperSettings.minWidth = 100;
    this.cropperSettings.minHeight = 100;
    this.cropperSettings.rounded = false;
    this.cropperSettings.cropperDrawSettings.strokeColor = "rgba(255, 255, 255, 0.5)";
    this.cropperSettings.cropperDrawSettings.strokeWidth = 1;

    this.sliderLeft = 0;
    this.activeImageNumber = 1;
    this.imageList = [];
  }

  fileChangeListener(event) {
    var image = new Image();
    var fileReader: FileReader = new FileReader();
    var that = this;
    this.cropping = true;
    fileReader.onloadend = function(loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);
      that.elementRef.nativeElement.querySelector("#upload_image").value = "";
    };
    fileReader.readAsDataURL(event.target.files[0]);
  }

  save() {
    this.working = true;
    this.accountService.saveTalentPicture(this.data.image, this.inputImageCount + 1).subscribe(res => {
      if(res.success) {
        this.imageList.push({
          image: this.data.image,
          number: this.inputImageCount + 1
        });
        this.inputImageCount = this.imageList.length;
        this.outputImageCount.emit(this.inputImageCount);
        this.cropping = false;
      }
      this.working = false;
    });
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

}

interface ImageData {
  image: string;
  number: number;
}
