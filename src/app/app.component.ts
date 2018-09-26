import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  div1:boolean=false;
  div2:boolean=true;
  div3:boolean=true;
  user = [];
  otpid;
  error;
  constructor(public http : HttpClient) {}
  dummy=["Ahmedabad","Bangalore","Bhopal","Calcutta","Chandigarh","Chennai","Delhi","Gurgaon","Hyderabad","Kolkatta","Lucknow","Mumbai","NOIDA","Pune","Adilabad","Agartala","Agra","Ahmednagar","Aizawl","Ajmer","Aligarh","Allahabad","Ambala","Amritsar","Aurangabad","Bahadurgarh","Ballabhgarh","Bareilly","Bathinda","Bhubaneswar","Bhuj","Bikaner","Bilaspur","Bodh Gaya","Bokaro Steel City","Chhapra","Chittoor","Coimbatore","Cuttack","Daman and Diu","Darjeeling","Dehradun","Dhanbad","Dharamsala","Dharwad","Dibrugarh","Dimapur","Durgapur","Erode","Faridabad","Faridkot","Firozpur","Gandhinagar","Gangtok","Gaya","Gulbarga","Guntur","Gurdaspur","Guwahati","Gwalior","Haldia","Haridwar","Hisar","Hoshiarpur","Hospet","Hubli","Imphal","Indore","Itanagar","Itarsi","Jabalpur","Jaipur","Jaisalmer","Jalandhar","Jammu","Jamnagar","Jamshedpur","Jhansi","Jind","Jodhpur","Junagadh","Kalyan","Kanchipuram","Kannur","Kanpur","Kapurthala","Karnal","Karur","Kashipur","Kharagpur","Kochi","Kodinar","Kohima","Kolar","Kolhapur","Kollam","Kota","Kottayam","Kozhikode","Leh","Lonavla","Ludhiana","Madurai","Mangalore","Mapusa","Margao","Mathura","Medak","Meerut","Miraj","Modinagar","Mohali","Morena","Murshidabad","Mussoorie","Muzaffarnagar","Muzaffarpur","Mysore","Nagercoil","Nagpur","Nainital","Nashik","Navi Mumbai","Nellore","Neyveli","Palakkad","Palghar","Panaji","Panchkula","Panipat","Pathankot","Patiala","Patna","Pondicherry","Port Blair","Puri","Raichur","Raiganj","Raigarh","Raikot","Raipur","Rajkot","Rameshwaram","Ramngarh","Rampur","Ranchi","Raurkela","Rewa","Rewari","Rohtak","Roorkee","Saharanpur","Salem","Sangli","Satara","Shillong","Shimla","Shimoga","Silchar","Siliguri","Sivaganga","Solan","Sonipat","Srinagar","Surat","Tezpur","Thanjavur","Thiruvallur","Thiruvananthapuram","Thrissur","Tiruchirappalli","Tirupati","Udaipur","Udupi","Ujjain","Vadodara","Vapi","Varanasi","Vellore","Vijayawada","Visakhapatnam","Warangal","Wardha"];
  ngOnInit() {

    console.log(localStorage.getItem('auth_token'))

  }

  setlogin(f:NgForm) {
    console.log(f.value.tokentext);
    this.http.post('http://192.168.1.3:3000/api/login', {token:f.value.tokentext}).subscribe((result:any)=>{
      localStorage.setItem('auth_token', f.value.tokentext);
      console.log(result.message+ ' with token ' +localStorage.getItem('auth_token'))
    },(e)=>{
      console.log('unabel to login');
    })
  }
  logout() {
    this.http.get('http://192.168.1.3:3000/api/logout').subscribe((result:any)=> {
      console.log(result.message+ ' and removed  token ' +localStorage.getItem('auth_token'));
      localStorage.removeItem('auth_token');
    },(e)=>{ 
      console.log('unabel to Logout');
    })
  }


  first() {
    this.http.get("http://192.168.1.3:3000/api/insert").subscribe((resultl)=>{
      console.log(resultl);
    } ,(e)=>{
      console.log(e.error);
    })
  }
  second() {
    this.http.post('http://192.168.1.3:3000/api/second', {'name':'lalith kumar'}).subscribe((result)=>{
      console.log(result);
    },(e)=>{
      console.log(e.error);
    })
  }
  checkandinsert(form:NgForm) {
    
    // var newuser=[{
    //   'name':form.value.name,
    //   'email':form.value.email,
    //   'phone':form.value.mobile
    // }];
    // return this.http.post('/api/checkuser', {'email':form.value.email,'phone':form.value.mobile,'user':newuser})
    // .subscribe((result)=>{
    //   if(result.json().Status==="Success") {
    //     this.div1=true;
    //     this.div3=false;
    //     this.user=newuser;
    //     this.otpid=result.json().Details;
    //   } else {
    //     this.user=result.json();
    //     this.div1=true;
    //     this.div2=false;
    //   }
    // });
    
  }
  otpvalidate(form:NgForm){
    // return this.http.post('/api/otpvalid', {'sid':this.otpid,'otp':form.value.otp, 'user':this.user})
    // .subscribe((result)=>{
    //   if(result.json().done===true) {
    //     this.div3=true;
    //     this.div2=false;
    //   } else {
    //     this.error="please enter valid OTP";
    //   }
    // })
  }
  // logout(){
  //   this.div1=false;
  //   this.div2=true;
  //   this.div3=true;
  // }
}
