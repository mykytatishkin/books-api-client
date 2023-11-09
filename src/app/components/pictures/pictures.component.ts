import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Picture } from 'src/app/model/picture.model';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
  @Input() selectedBookId: number = 0;
  pictures: Picture[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.selectedBookId = changes['selectedBookId'].currentValue;
    console.log(this.selectedBookId);
    //if(this.selectedBookId != 0) {
      this.picService.getPictureById(this.selectedBookId).subscribe({
        next: (response) => { this.pictures = response; console.log(this.pictures); },
        error: (error) => { console.log(error) },
        complete: () => { console.log("Picture.Component.ts NgOnInit() done") }
      });
    //};
  }

  constructor(private picService: PictureService) {}
  ngOnInit(): void { }

}
