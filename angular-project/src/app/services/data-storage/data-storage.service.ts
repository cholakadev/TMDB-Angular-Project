import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { IMovie } from 'src/app/interfaces/movie';
import { ITvSerie } from 'src/app/interfaces/tvseries';
import { isMovieTypeGuard } from 'src/app/interfaces/person';
import { IFirestoreMedia } from 'src/app/interfaces/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore
  ) { }

  addMediaToWatchlist(media: IMovie | ITvSerie, userId: string, callback: (error?: string) => void): void {
    const mediaDetails: IFirestoreMedia = {
      id: media.id,
      createdAt: new Date(),
      title: isMovieTypeGuard(media) ? media.title : media.original_name,
      posterPath: media.poster_path,
      isWatched: false,
      mediaType: isMovieTypeGuard(media) ? 'movie' : 'tv-show'
    }

    this
      .angularFirestore
      .doc(`Lists/${userId}`)
      .collection<IFirestoreMedia[]>('watchlist')
      .doc<IFirestoreMedia>(`${media.id}`)
      .set(mediaDetails)
      .then(success => callback())
      .catch(error => callback(error))
  }

  addMediaToFavorite(media: IMovie | ITvSerie, userId: string, callback: (error?: string) => void): void {
    const mediaDetails: IFirestoreMedia = {
      id: media.id,
      createdAt: new Date(),
      title: isMovieTypeGuard(media) ? media.title : media.original_name,
      posterPath: media.poster_path,
      isWatched: false,
      mediaType: isMovieTypeGuard(media) ? 'movie' : 'tv-show'
    }

    this
      .angularFirestore
      .doc(`Lists/${userId}`)
      .collection<IFirestoreMedia[]>('favorite')
      .doc<IFirestoreMedia>(`${media.id}`)
      .set(mediaDetails)
      .then(success => callback())
      .catch(error => callback(error))
  }
}
