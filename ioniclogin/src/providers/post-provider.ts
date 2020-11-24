import { Injectable , Injector} from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
//import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class PostProvider {
    server: string = "http://localhost/Projects/server_api/";
 

    constructor(public http : Http){

    }

    postData(body, file){
        let type = "application/json; charset=UTF-8";
        let headers = new Headers({ 'content-Type': type});
        let options = new RequestOptions({headers: headers });
        
        return this.http.post(this.server + file, JSON.stringify(body), options)
        .map(res => res.json());
       
    }
}

