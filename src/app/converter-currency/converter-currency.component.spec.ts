import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterCurrencyComponent } from './converter-currency.component';

describe('ConverterCurrencyComponent', () => {
  let component: ConverterCurrencyComponent;
  let fixture: ComponentFixture<ConverterCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverterCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
