import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliosComponent } from './portfolio.component';

describe('PortfolioComponent', () => {
  let component: PortfoliosComponent;
  let fixture: ComponentFixture<PortfoliosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfoliosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
