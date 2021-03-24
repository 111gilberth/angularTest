import { HttpClient} from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsAPIService {

   constructor(private http:HttpClient) { }

  /* 
    Variable que recibe el valor de una palabra desde el main y 
    es recibido al component Tab
  */  
  word:string = ""; 

  /*  
  * Metodos para acceder al API  de WordsAPI
  */
  getWords() {
    
    return this.http.get('https://wordsapiv1.p.rapidapi.com/words/word/synonyms',{
      headers: {
        "x-rapidapi-key": "cc441ab037mshe2f3f8cdd9885c2p1c5db2jsnce1225cb1c13",
	      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      }
    });
  }

  
  getWord(word:string):Observable<any> {
    return this.http.get(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
      headers: {
        "x-rapidapi-key": "cc441ab037mshe2f3f8cdd9885c2p1c5db2jsnce1225cb1c13",
	      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      }
    });
  }
  
}
