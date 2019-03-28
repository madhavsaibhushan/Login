import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthCheck {
    constructor(private route:Router){}
    Authdata = [
        {
            username: "test",
            password: "test"
        },
        {
            username:"madhav",
            password:'test'
        }
    ]
    CheckValidation(username,password)
    {
        for( let i=0;i<this.Authdata.length;i++)
        {
if(this.Authdata[i].username===username&&this.Authdata[i].password===password)
{
    
    this.loggedIn();
    alert("loggedIn")
    setTimeout(()=>
    {
        this.route.navigate(['/Dashboard'])
    },800)
   
return true
}


        }
    
    }
    logcheck: boolean = false;
    Checking() {
        const prom = new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.logcheck);
            }, 1000)
        })
        return prom;

    }

    loggedIn() {
        return this.logcheck = true;
    }
    loggedOut() {
        return this.logcheck = false;
    }
}