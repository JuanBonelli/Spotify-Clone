import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroListBullet, heroArrowRight, heroBars4, heroMagnifyingGlass, heroPlus } from '@ng-icons/heroicons/outline';
import { heroSpeakerWaveSolid, heroStarSolid } from '@ng-icons/heroicons/solid';
import { LibraryService } from '../../services/library/library.service';
import { Playlist, SidebarWidth } from '../../types/types';
import { Utils } from '../../shared/pipes/utils';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [NgIcon, NgFor, NgIf],
  viewProviders: [provideIcons({ heroBars4, heroPlus, heroArrowRight, heroListBullet, heroMagnifyingGlass, heroStarSolid, heroSpeakerWaveSolid})],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent implements OnInit {

  playlists : Playlist[] = [];
  sidebarWidth: SidebarWidth = 'WIDE';
  isSearching: boolean = false;
  
  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.playlists = this.getPlaylists();
  }

  getPlaylists() : Playlist[] {
    let playlists = this.libraryService.getPlaylists();
    playlists.forEach((playlist: Playlist) => playlist.type = Utils.getFormattedPlaylistType(playlist.type))
    return playlists;
  }

  toggleSidebarSize() {
    if(this.sidebarWidth === 'WIDE') this.sidebarWidth = 'NARROW';
    else this.sidebarWidth = 'WIDE';

    console.log(this.sidebarWidth);
  }

  onSearch() {
    this.isSearching = !this.isSearching;
  }
}
