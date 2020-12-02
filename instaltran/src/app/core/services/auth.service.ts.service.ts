import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceTsService {

  constructor() { }

  isLogged = () => {
    return !(Math.random() < 0.5)
  }

}
