import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInComponent } from './profile-in.component';

describe('ProfileInComponent', () => {
  let component: ProfileInComponent;
  let fixture: ComponentFixture<ProfileInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
