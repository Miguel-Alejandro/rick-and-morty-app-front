import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public getCharacter:Array<any>;
  public dataCharacter:Array<any>;
  constructor( private dataSrv: DataService ) { }

  ngOnInit(): void {
    this.setCharacter()
    
  }

  public setCharacter(){
    this.dataSrv.getCharacter().subscribe( (res) => {
      this.dataCharacter = res.results
      console.log(res.results);
      
    })
  }

}
