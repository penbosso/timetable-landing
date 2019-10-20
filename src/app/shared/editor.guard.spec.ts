import { TestBed, async, inject } from '@angular/core/testing';

import { EditorGuard } from './editor.guard';

describe('EditorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorGuard]
    });
  });

  it('should ...', inject([EditorGuard], (guard: EditorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
