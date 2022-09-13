import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getRandomString (length = 7) {
    const pool = "abcdefghmnopqrstuvz123456789"

    let code = ""

    while (code.length < length) {
      code += pool[Math.floor(Math.random() * (pool.length))]
    }

    return code
  }

  alreadySent () {
    let n : any = sessionStorage.getItem("partecipant")
    if (n)
      n = JSON.parse(n)

    return n?.name && n?.name.length > 0
  }

  savePartecipant (name = '', sex : 'male' | 'female') {
    sessionStorage.setItem("partecipant", JSON.stringify({
      name : name,
      sex : sex
    }))
  }

  getPartecipant () {
    let p : any = sessionStorage.getItem("partecipant")
    if (p)
      p = JSON.parse(p)
    
    return p as { name : string, sex : 'male' | 'female' }
  }

  uploadToGithub (fileName : string, content : string, path : string) {
    const ghToken = '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'

    var data = JSON.stringify({
      "message": "txt file",
      "content": btoa(content)
    });

    var config = {
        method: 'put',
        url: `https://api.github.com/repos/EmanueleChr/AlfredosGraduation/contents/${path}/${fileName}.txt`,
        headers: {
            'Authorization': `Bearer ${ghToken}`,
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
      .then(function (response) {
          console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
          console.log(error);
      });
  }
}
