import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../../../../src/app/core/services/api/api.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})

export class SettingComponent implements OnInit {
  
  layer: any = {
    name: "Name",
    keys: ""
  }

  objectKeys = Object.keys;
  keyList = { backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,pausebreak:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,leftarrow:37,uparrow:38,rightarrow:39,downarrow:40,insert:45,delete:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,leftwindowkey:91,rightwindowkey:92,selectkey:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimalpoint:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,semicolon:186,equalsign:187,comma:188,dash:189,period:190,forwardslash:191,graveaccent:192,openbracket:219,backslash:220,closebracket:221,singlequote:222};
  
  deepKeys = [
  {key: "backspace", code: 8}, {key: "space", code: 32 }, {key: "home", code: 36}, {key: "1", code: 49 },
  {key: 2, code:50}, { key: 3, code:51}, {key: 4 ,code:52}, {key: 5, code:53},
  {key: 6, code:54},{ key:7, code:55}, {key:8, code:56}, {key: 9, code:57},
  {key: 6, code:54},{ key:7, code:55}, {key:8, code:56}, {key: 9, code:57}];

  seletedDeepKey: any;
  indexDeepKey: any;
  seletedBoard: any;

  deepMacros = ["M1", "M2", "M3", "M4", "M5"]


  constructor(
    public dialog: MatDialog,
    public apiService: ApiService,
    private router : Router
  ) { }

  ngOnInit(): void {  }
  
  pressKey(key, code){    
    this.seletedBoard = key;    
    if(this.seletedDeepKey) {       
      Object.assign(this.deepKeys[this.indexDeepKey], {key, code});
    }
  }

  pressDeepKey(item, index){    
    this.seletedDeepKey = item;
    this.indexDeepKey = index;
  }

  saveLayer(){
    this.layer.keys = this.deepKeys;
    console.log(this.layer);
    this.router.navigate(['/keymap']); 
  }
}
