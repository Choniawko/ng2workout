import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

export const handleError = (error: Response | any) => {
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.message || JSON.stringify(body);
        errMsg = err;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
};
