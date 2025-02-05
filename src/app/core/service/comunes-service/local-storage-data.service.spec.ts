/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalStorageDataService } from './local-storage-data.service';

describe('Service: LocalStorageData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageDataService]
    });
  });

  it('should ...', inject([LocalStorageDataService], (service: LocalStorageDataService) => {
    expect(service).toBeTruthy();
  }));
});
