import { Component } from '@angular/core';
import { SongInformationComponent } from '../song-information/song-information.component';
import { LibraryComponent } from '../library/library.component';
import { PlaylistComponent } from "../playlist/playlist.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SongInformationComponent, LibraryComponent, PlaylistComponent, PlaylistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
