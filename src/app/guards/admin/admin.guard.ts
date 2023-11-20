import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  let acceso = localStorage.getItem("login-admin")

  if(acceso==="true"){
    return true
  }else{
    return false
  }
};
