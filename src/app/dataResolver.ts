import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs";
import {Injectable} from '@angular/core'
import { DataService } from './data.service';
interface server {
    id: number;
    name: string;
}
@Injectable()
export class DataResolver implements Resolve<server[]>
{
    constructor(private dataservice:DataService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<server[]>
     | Promise<server[]> | server[] {
        return this.dataservice.getList();
    }





}