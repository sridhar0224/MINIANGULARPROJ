import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongRegistrationComponent } from './song-registration.component';

describe('SongRegistrationComponent', () => {
  let component: SongRegistrationComponent;
  let fixture: ComponentFixture<SongRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
