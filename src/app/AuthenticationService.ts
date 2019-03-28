import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core'
import { AuthCheck } from './AuthCheck';
@Injectable()
export class AuthService implements CanActivate
{
constructor(private check:AuthCheck,private route:Router){}

canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
:Observable<boolean>|Promise<boolean>|boolean{
return this.check.Checking().then((condition)=>
{
if(condition)
{

    return true;
    
}
else{
    this.route.navigate(['/']);
  
}
})




}

}