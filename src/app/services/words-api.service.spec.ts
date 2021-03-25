import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { WordsAPIService } from './words-api.service';

describe('WordsAPIService', () => {
  let service: WordsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        BrowserDynamicTestingModule,
        PipeCollector
      ],
      declarations:[WordsAPIService],
      providers: []
    });
    service = TestBed.inject(WordsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
