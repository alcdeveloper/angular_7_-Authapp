import { Injectable } from '@angular/core';

import { Router, ActivatedRouteSnapshot, RouterStateSnapshot , CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth:AuthService) { }
	CanActivate(){
		if(this.auth.isAuthenticated()){
			console.log("Paso el Guard");
			return true;
		}else{
			console.error("Bloqueado por el Guard");
			return false;

		}
	}
}
