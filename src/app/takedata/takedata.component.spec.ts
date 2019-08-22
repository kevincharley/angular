import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakedataComponent } from './takedata.component';

describe('TakedataComponent', () => {
  let component: TakedataComponent;
  let fixture: ComponentFixture<TakedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
