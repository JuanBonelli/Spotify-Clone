import { Injectable } from '@angular/core';
import { identity } from 'rxjs';
import { Song } from '../../types/types';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  constructor() {}

  getPlayingSong(): Song {
    let song: Song = {
      id: 1,
      durationInSeconds: 320,
      imageUrl: '',
      name: 'If I Fell - Remastered 2009',
      isPlayling: true,
      contributors: [
        {
          id: 1,
          name: 'Jhon',
          lastname: 'Lennon',
          isPrincipal: true,
          monthlyListeners: 1000000,
          role: 'ARTIST'
        },
        {
          id: 2,
          name: 'Paul',
          lastname: 'McCartney',
          isPrincipal: true,
          monthlyListeners: 1000000,
          role: 'ARTIST'
        },
        {
          id: 3,
          name: 'Ringo',
          lastname: 'Star',
          isPrincipal: true,
          monthlyListeners: 1000000,
          role: 'ARTIST'
        },
        {
          id: 4,
          name: 'George',
          lastname: 'Harrison',
          isPrincipal: true,
          monthlyListeners: 1000000,
          role: 'ARTIST'
        }
      ]
    };

    return song;
  }
}
