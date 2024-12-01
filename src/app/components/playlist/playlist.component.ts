import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowDownCircle, heroArrowPath, heroListBullet } from '@ng-icons/heroicons/outline';
import { heroPauseCircleSolid, heroPlayCircleSolid } from '@ng-icons/heroicons/solid';
import { heroHashtagMini, heroClockMini } from '@ng-icons/heroicons/mini';


@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [NgIcon, NgIf],
  viewProviders: [provideIcons({ heroPlayCircleSolid, heroPauseCircleSolid , heroArrowPath, heroListBullet, heroArrowDownCircle, heroClockMini, heroHashtagMini})],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss'
})
export class PlaylistComponent {
  isPlaying: boolean = false;

  onPlayPause() {
    this.isPlaying = !this.isPlaying;
  }
}
