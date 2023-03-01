import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { IPhoto } from 'src/app/models/photo';
import { AlbumsService } from 'src/app/service/albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  // photos: IPhoto[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  photos: any;
  albumId!: number;

  constructor(
    private photosService: AlbumsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.albumId = this.route.snapshot.params['albumId'];
    // this.photos = this.photosService.getPhotos(this.albumId);

    this.albumId = this.route.snapshot.params['id'];
    // this.albumId = this.route.snapshot.paramMap.get('id');
    this.photosService
      .getPhotos(this.albumId)
      .subscribe((data) => (this.photos = data));
  }

  goBack() {
    this.router.navigate(['/albums', this.albumId]);
  }
}
