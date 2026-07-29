import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLivreComponent } from './delete-livre.component';

describe('DeleteLivreComponent', () => {
  let component: DeleteLivreComponent;
  let fixture: ComponentFixture<DeleteLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLivreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
