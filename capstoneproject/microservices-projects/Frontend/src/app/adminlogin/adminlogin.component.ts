import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username :string ='';
  password : string ='';
    
  constructor(private router:Router){}
  
  adminlogin(){
    if(this.username === 'admin' && this.password === '12345'){
      console.log(this.username+" "+this.password)
        this.router.navigate(['/admin/admin_display_bus'])
    }
    else{
      this.router.navigate(['/login/adminlogin'])
    }
  }

}
