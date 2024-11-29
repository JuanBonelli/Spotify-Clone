import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongInformationComponent } from './song-information.component';

describe('SongInformationComponent', () => {
  let component: SongInformationComponent;
  let fixture: ComponentFixture<SongInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
