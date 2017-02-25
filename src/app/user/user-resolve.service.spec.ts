import { TestBed, inject } from '@angular/core/testing';
import { UserResolve } from './user-resolve.service';
import { UserService } from './user.service';

describe('UserResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserResolve,
        UserService
        ]
    });
  });

  it('should ...', inject([UserResolve], (service: UserResolve) => {
    expect(service).toBeTruthy();
  }));
});
