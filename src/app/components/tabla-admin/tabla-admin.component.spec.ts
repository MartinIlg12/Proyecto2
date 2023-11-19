import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAdminComponent } from './tabla-admin.component';

describe('TablaAdminComponent', () => {
  let component: TablaAdminComponent;
  let fixture: ComponentFixture<TablaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaAdminComponent]
    });
    fixture = TestBed.createComponent(TablaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
