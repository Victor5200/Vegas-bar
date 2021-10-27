import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class ResponseUtil {

    static reponseToJson(response: Observable<any>) {
        return response.pipe(map((resp) => resp));
    }

}
