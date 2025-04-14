import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = () => {
  
  const token = localStorage.getItem('token') || ''
  const router = inject(Router)

  if (token != '') {
    return true
  } else {
    router.navigateByUrl('')
    return false
  }

};
