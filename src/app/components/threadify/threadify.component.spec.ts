import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadifyComponent } from './threadify.component';

describe('ThreadifyComponent', () => {
  let component: ThreadifyComponent;
  let fixture: ComponentFixture<ThreadifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
