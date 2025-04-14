import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logoutGuard: CanActivateFn = () => {
  
  const token = localStorage.getItem('token') || ''
  const router = inject(Router)

  if (token == '') {
    return true
  } else {
    router.navigateByUrl('/home')
    return false
  }

};
