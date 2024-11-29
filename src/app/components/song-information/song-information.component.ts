import { Component } from '@angular/core';
import { provideIcons, NgIcon } from '@ng-icons/core';

import { heroEllipsisHorizontal, heroXMark} from '@ng-icons/heroicons/outline';
import { heroCheckCircleSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-song-information',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [provideIcons({ heroXMark, heroEllipsisHorizontal, heroCheckCircleSolid})],
  templateUrl: './song-information.component.html',
  styleUrl: './song-information.component.scss'
})
export class SongInformationComponent {

}
