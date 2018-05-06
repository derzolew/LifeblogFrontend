import { Injectable } from '@angular/core';
import { ApiService, AuthorizationType } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Asset } from '../model/asset.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class AssetService {

  constructor(private apiService: ApiService) {
  }

  public uploadImage(image: File): Observable<Asset> {
    const imgData = new FormData();
    imgData.append('image', image, image.name);
    return this.apiService.post('uploads/image', AuthorizationType.BEARER, imgData, null, true);
  }

  public getImageUrl(imageName: string): string {
    return `${environment.baseURL}/uploads/image/${imageName}`;
  }
}
