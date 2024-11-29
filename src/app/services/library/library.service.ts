import { Injectable } from '@angular/core';
import { Playlist } from '../../types/types';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor() { }
  

  getPlaylists() : Playlist[] {
    return [
      {
        id: 1,
        name: 'Tus me Gusta',
        isListening: true,
        isPinned: true,
        type: 'PLAYLIST',
        user: "Xenzze",
        imageUrl: 'https://preview.redd.it/rnqa7yhv4il71.jpg?width=640&crop=smart&auto=webp&s=819eb2bda1b35c7729065035a16e81824132e2f1'
      },
      {
        id: 2,
        name: 'Tini Tini Tini 🌹',
        isListening: false,
        isPinned: true,
        type: 'PLAYLIST',
        user: "Juan Bonelli",
        imageUrl: 'https://cdn.myportfolio.com/1fabf4ed77f805d754b14c5b7b6b7fb1/7238d42acc58c1c5f58e6ca6768bfb2352a0aa7a21016eb7d6f0dc293190f898f05ee0a79aeb4322_rw_1200.jpg?h=d73e87a9258dd65515c8148ff3930b6c'
      }, 
      {
        id: 3, 
        name: 'Todo',
        isListening: false,
        isPinned: true,
        type: 'PLAYLIST',
        user: "Juan Bonelli",
        imageUrl: 'https://img.freepik.com/premium-photo/colourful-smoke-with-music-notes-illustration-generative-ai_841229-644.jpg'
      },
      {
        id: 4,
        name: 'NAIKI',
        isListening: false,
        isPinned: false,
        type: 'ALBUM',
        user: "Nicki Nicole",
        imageUrl: 'https://i.scdn.co/image/ab67616d0000b273b124ed34e259e26f3a439f14'
      }
    ]
  } 

  getPlaylistById(playlistId: number | string)  {}
}
