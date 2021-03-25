import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WordsAPIService } from 'src/app/services/words-api.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor(private wordapi:WordsAPIService) { 
   
  }
  
  ngOnInit(): void {
    // Recibimos el parametro que viene desde la vista main  

  }
  
  
  /* 
    Variable que almacena los datos del formulario de busqueda
  */
  searchForm = new FormGroup({
    word: new FormControl(this.wordapi.word ?? "", Validators.required),
  });

  
  listResult:any = [];

  msgAlertNotFounWord = "";

  // Metdodo para buscar una nueva palabra
  onSearchWord(word:any) {
        
    this.wordapi.getWord(word.word).subscribe( data=> {
      this.listResult = data.results;
      this.msgAlertNotFounWord  = "";
    },
    error => {
      if(error.status === 404) {
        this.msgAlertNotFounWord = "Palabra no encontrado";
      }
    })
  }
}
