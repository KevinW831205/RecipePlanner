import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
}

export const baseUrl: string =  environment.backendUrl;
