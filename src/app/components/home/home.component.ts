import { Component } from '@angular/core';
import { SongInformationComponent } from '../song-information/song-information.component';
import { LibraryComponent } from '../library/library.component';
import { RecommendationsComponent } from '../recommendations/recommendations.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SongInformationComponent , LibraryComponent, RecommendationsComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
