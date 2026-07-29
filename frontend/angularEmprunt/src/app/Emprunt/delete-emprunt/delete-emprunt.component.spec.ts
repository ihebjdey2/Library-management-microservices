import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmpruntComponent } from './delete-emprunt.component';

describe('DeleteEmpruntComponent', () => {
  let component: DeleteEmpruntComponent;
  let fixture: ComponentFixture<DeleteEmpruntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmpruntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
