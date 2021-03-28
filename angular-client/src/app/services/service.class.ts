import {environment} from '../../environments/environment';
import {HttpHeaders} from '@angular/common/http';

export abstract class Service {
  url = environment.apiUrl;
  httpHeader = new HttpHeaders({'Content-Type': 'application/JSON'});
}
