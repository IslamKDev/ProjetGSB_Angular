import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefraishorsforfaitComponent } from './listefraishorsforfait.component';

describe('ListefraishorsforfaitComponent', () => {
  let component: ListefraishorsforfaitComponent;
  let fixture: ComponentFixture<ListefraishorsforfaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListefraishorsforfaitComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefraishorsforfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
