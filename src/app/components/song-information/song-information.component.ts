import { Component, OnInit } from '@angular/core';
import { provideIcons, NgIcon } from '@ng-icons/core';

import { heroEllipsisHorizontal, heroXMark } from '@ng-icons/heroicons/outline';
import { heroCheckCircleSolid } from '@ng-icons/heroicons/solid';
import { SongService } from '../../services/song-information/song.service';
import { of } from 'rxjs';
import { Song } from '../../types/types';

@Component({
  selector: 'app-song-information',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [
    provideIcons({ heroXMark, heroEllipsisHorizontal, heroCheckCircleSolid }),
  ],
  templateUrl: './song-information.component.html',
  styleUrl: './song-information.component.scss',
})
export class SongInformationComponent implements OnInit {
  constructor(private songService: SongService) {}

  
  ngOnInit(): void {
    let song : Song = this.songService.getPlayingSong();
  }


}
