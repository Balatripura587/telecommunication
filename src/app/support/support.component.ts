import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor() { }

  public content ="Tele Com is the fastet growing mobile network in USA and Australia. Now we are in your country "+
  "with some of the best prepaid and postpaid plans which are not only value for money plans but " +
  "also provides seemless connectivity. For any problem call us at (+91) 1400 456 789 (Toll Free) or "+
  "mail us at telecom.mobile@gmail.com"
  ngOnInit(): void {
  }
  public changeContent1(){
    this.content = "Tele Com  is the fastet growing mobile network in USA and Australia. Now we are in your country "+
                    "with some of the best prepaid and postpaid plans which are not only value for money plans but " +
                    "also provides seemless connectivity. For any problem call us at (+91) 1400 456 789 (Toll Free) or "+
                    "mail us at telecom.mobile@gmail.com"
  }

  public changeContent2(){
    this.content = "Tele Com  is the fastet growing landline in USA and Australia. Now we are in your country. "+
                    "We not only provide cheapest rates in the market but " +
                    "also provides seemless connectivity. For any problem call us at (+91) 1400 123 456 (Toll Free) or "+
                    "mail us at telecom.landline@gmail.com"
  }

  public changeContent4(){
    this.content = "Tele Com is the fastet growing DTH in USA and Australia. Now we are in your country "+
                    "with some of the best plans and good combination of channels for kids and youngstars which are not only value for money plans but " +
                    "also provides seemless service. For any problem call us at (+91) 1400 123 789 (Toll Free) or "+
                    "mail us at telecom.dth@gmail.com"
  }

  public changeContent3(){
    this.content = "Tele Com  is the fastet growing broadband service in USA and Australia. Now we are in your country "+
                    "with some of the best plans which are not only value for money plans but " +
                    "also provides seemless connectivity at high upload and download speeds. For any problem call us at (+91) 1400 121 789 (Toll Free) or "+
                    "mail us at telecom.fibre@gmail.com"
  }
}
