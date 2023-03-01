import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { IAlbum } from '../models/album';

@Injectable({ providedIn: 'root' })
export class AlbumsService {
  private URL_ALBUMS = 'https://jsonplaceholder.typicode.com/albums';
  private URL_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';
  // albums$: Observable<IAlbum[]>;

  constructor(private http: HttpClient) {}
  // constructor(private http: HttpClient) {
  //   this.albums$ = this.http.get<IAlbum[]>(this.URL_ALBUMS);
  // }

  getAlbums(): Observable<IAlbum[]> {
    return from(fetch(this.URL_ALBUMS).then((response) => response.json()));
    // return this.albums$;
  }

  getAlbumById(albumId: number): Observable<IAlbum> {
    return from(
      fetch(`${this.URL_ALBUMS}/${albumId}`).then((response) => response.json())
    );
  }

  // getAlbums(): Observable<IAlbum[]> {
  //   return this.http.get<IAlbum[]>(this.URL_ALBUMS);
  // }
  // getAlbumById(albumId: number): Observable<IAlbum> {
  //   return this.http.get<IAlbum>(this.URL_ALBUMS + `/${albumId}`);
  // }

  getPhotos(albumId: number) {
    return this.http.get(this.URL_PHOTOS + `?albumId=${albumId}`);
    // return this.http.get(this.URL_ALBUMS + `/${albumId}/photos`);
  }

  deleteAlbum(id: number) {
    // this.http.delete(this.URL_ALBUMS + `/${id}`);
    return fetch(`${this.URL_ALBUMS}/${id}`, {
      method: 'DELETE',
    });
  }

  updateAlbum(album: IAlbum): Observable<IAlbum> {
    return from(
      fetch(`${this.URL_ALBUMS}/${album.id}`, {
        method: 'PUT',
        body: JSON.stringify(album),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
    );
  }
  // updateAlbum(album: IAlbum): Observable<IAlbum> {
  //   return this.http.put<IAlbum>(this.URL_ALBUMS + `/${album.id}`, album);
  // }
}
