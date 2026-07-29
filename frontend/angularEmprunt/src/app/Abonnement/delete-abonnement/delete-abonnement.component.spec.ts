import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAbonnementComponent } from './delete-abonnement.component';

describe('DeleteAbonnementComponent', () => {
  let component: DeleteAbonnementComponent;
  let fixture: ComponentFixture<DeleteAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAbonnementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
