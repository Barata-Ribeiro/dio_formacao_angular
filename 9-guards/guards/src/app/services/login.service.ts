import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  fromLogin() {
    localStorage.setItem(
      'token',
      'qxJJTCjV0KmSIACdX?sr8RMK2Ahco6Sx62!5Mkp8oJzzMr5OAnh4-bsyUydv7Pw?wkZ!GcCEGLJ7e2OQOc6EAogQ5nE1AJmfm5K7QDdNhzIH6OGuFP?t0!Qhjuv=q!K4ESowF-9GJt4IL0e3vLX0LezHaGPJ!vrSXlLIV3Rfkxuw!Vf?H=MD0/478=8nRR1YKGf?2o7cJtoB174vfct4YD6ak4RMZ9n/MDm!20RCJglD3P8KQ1VRO15LqWowfNO5'
    );
  }

  fromLogOut() {
    localStorage.clear();
  }
}
