import { CanActivateFn } from '@angular/router';

export const carritoGuard: CanActivateFn = (route, state) => {
  let acceso = localStorage.getItem("login")

  if(acceso==="true"){
    return true
  }else{
    return false
  }
};
