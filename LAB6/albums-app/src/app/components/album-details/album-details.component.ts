import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAlbum } from 'src/app/models/album';
import { AlbumsService } from 'src/app/service/albums.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
})
export class AlbumDetailsComponent implements OnInit {
  albumId!: number;
  album!: IAlbum;
  albumTitle!: string; // declared as optional

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumsService
  ) {}

  ngOnInit() {
    this.albumId = this.route.snapshot.params['id'];
    this.albumService.getAlbumById(this.albumId).subscribe((album) => {
      this.album = album;
      this.albumTitle = this.album.title;
    });
  }

  update() {
    if (this.album) {
      this.album.title = this.albumTitle;
      this.albumService.updateAlbum(this.album);
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }

  viewPhotos() {
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }
}
