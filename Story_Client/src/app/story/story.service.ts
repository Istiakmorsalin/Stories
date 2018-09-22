import { Injectable } from '@angular/core';
import { Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpQueryEncoderService } from '../core/service/http/http-query-encoder.service';
import { HttpRequestService } from '../core/service/http/http-service.service';

import { environment } from './../../environments/environment';

import 'rxjs/Rx';

@Injectable()
export class StoryService {

  constructor(
    private http: HttpRequestService,
    ) { }

  public createStory(storyData): Observable<any> {

    return this.http
      .post(`${environment.api.dev}/api/stories`, storyData)
      .map((response: any) => response.json())
      .catch(this.handleAuthError);
  }
  
  private handleAuthError(error: Response): Observable<any> {
    return Observable.throw(error);
  }
}
