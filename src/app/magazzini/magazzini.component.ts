import { Magazzino } from './magazzino';
import { MagazziniService } from './magazzini.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-magazzini',
  templateUrl: './magazzini.component.html',
  styleUrls: ['./magazzini.component.scss']
})
export class MagazziniComponent implements OnInit {

  magazzino: Magazzino = new Magazzino();
  submitted = false;
  magazzini: Observable<Magazzino[]>;
constructor(private magazziniService: MagazziniService, private router: Router) { }

  ngOnInit() {

 this.magazzino.account = sessionStorage.getItem('username') ;
 this.reloadData();
  }


  onSubmit(){

       this.submitted = true;
       this.magazziniService.createMagazzino(this.magazzino)
         .subscribe(data => console.log(data), error => console.log(error));
       this.magazzino = new Magazzino();



    }

    reloadData() {
      this.magazzini = this.magazziniService.getMagazzinoByUsername(sessionStorage.getItem('username'));
    }

    deleteMagazzino(id: number) {
      this.magazziniService.deleteMagazzino(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }



  }
