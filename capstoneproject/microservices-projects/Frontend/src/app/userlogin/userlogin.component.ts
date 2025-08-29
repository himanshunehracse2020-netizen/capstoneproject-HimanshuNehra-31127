import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../userlogin.model';
import { UserService } from '../userlogin.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
users:User[]=[];
user: User = {id:0,username:'',password:''};

  constructor(private userservice : UserService,private router:Router){}

  ngOnInit():void{
    this.loadUsers();

  }

  loadUsers(){
    this.userservice.getusers().subscribe(data=>{this.users=data;});
  }

  userlogin(){
    this.userservice.getusers().subscribe(data=>{this.users=data;
    const found = this.users.find(u=>
          this.user.username === u.username && this.user.password === u.password);
    
    if(found){
    this.router.navigate(['/user/display_bus'])
    }
    else{
      this.router.navigate(['/login/userlogin'])
    }
  });
  }
}
