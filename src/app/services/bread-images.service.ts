import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BreadData } from '../model/BreadData';

export interface ImagesResponse {
  message: string[];
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreadImagesService {
  private BASE_URL: string = 'https://dog.ceo/api/breed/';

  constructor(private http: HttpClient) {}

  getBreadImages(breadData: BreadData) {
    const url: string =
      this.BASE_URL +
      breadData.bread +
      (breadData.subBread ? '/' + breadData.subBread : '') +
      '/images/random/3';

    return this.http.get<ImagesResponse>(url);
  }
}
