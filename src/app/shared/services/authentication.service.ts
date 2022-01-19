import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from "../models";
import {environment} from "../../../environments/environment";


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.getValue();
  }

  login(name: string, pass: string) {
    return this.http.post<any>(`${environment.urlLogin}/auth`, { userName: name, password: pass });
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
    this.currentUserSubject.next(null);
  }

  setUserName(username:string, token){
    localStorage.setItem('currentUser', JSON.stringify(token));
    this.currentUserSubject.next(token);
    localStorage.setItem('username', JSON.stringify(username));
  }

  getUserName(){
    return JSON.parse(<string>localStorage.getItem('username'));
  }
}
