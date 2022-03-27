import { TestBed } from '@angular/core/testing';

import { ChatbroService } from './chatbro.service';

describe('ChatbroService', () => {
  let service: ChatbroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
