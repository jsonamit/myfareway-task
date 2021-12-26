import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { UrlService } from '../../services/urlService/urlService.service';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrls: ['./deshboard.component.scss']
})
export class DeshboardComponent {
  data:any = ''; 

   constructor(private userservice: UserService,private urlService: UrlService){
    this.getToken();
   }

  getToken() {
    this.userservice.getToken().subscribe(res=>{
      localStorage.setItem('userToken',JSON.stringify(res));
      this.getPersnalInfo();
    });
   }

  getPersnalInfo(){
    const apiEndPoint = this.urlService.baseUrl();
    this.userservice.get(`${apiEndPoint.baseUrl}?MemberId=1711141`,'').subscribe(res => {
      if(res.errorcode == 0){
       this.data = res.message[0];
      }else{
        alert('Data not found.');
      }
    })
  }

}