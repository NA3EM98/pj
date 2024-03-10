import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const firstGuard: CanActivateFn = (route, state) => {
let fff= inject(Router)
  if(localStorage.getItem("eToken") != null){
    return true;
  }else{
fff.navigate(['signin'])
  return false;}
};

