
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class AppService {
    constructor (private _http:Http){
    }
    showme(){
      return this._http.get("http://localhost:8000/api/test");
    }
    sendData(data){
        return this._http.post('http://localhost:8000/api/test', data);
    }
}