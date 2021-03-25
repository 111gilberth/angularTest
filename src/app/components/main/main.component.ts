import { Component, OnInit } from '@angular/core';
import { WordsAPIService } from 'src/app/services/words-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 
  constructor(private wordsServices: WordsAPIService) { }

  // Almacen un array de palabras
  listWords:any = [];
  
  ngOnInit(): void {     
   // Accedemos al metodo getWords() del servicio
   this.wordsServices.getWords().subscribe(data=> {
   /*  console.log(data); */
    // Asignamos los datos a la varible listWords
    this.listWords = data;
  }); 
  }

  /* 
    Metodo que asigna una nueva palabra a la 
    propiedad word
  */
  nextWordTab(word:string){
    this.wordsServices.word = word;
  }

}
