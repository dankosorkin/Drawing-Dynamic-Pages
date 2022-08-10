import { Ad } from "./Ad.js";
import { db } from "./Db.js";

export class App {
  constructor(ad = new Ad(), renderedPages = [], pageIndex = 1) {
    this.ad = ad;
    this.renderedPages = renderedPages;
    this.pageIndex = pageIndex;
  }


  async renderPages(totalPages , async = false) {
    for (let i = 0; i < totalPages; i++) {
      if(async){
        await this.sleep(1000);
      }
      var newDiv = this.createDivWithDbInfo(i);
  
      this.increaseParams();
  
      var adNode = this.checkIfEvenOrOdd();
  
      var adNode = this.checkIfLastPage(i, totalPages, adNode);
      console.dir(adNode)
  
      this.ad.used(adNode);
  
      document.body.append(newDiv);
      document.body.append(adNode);
  
      this.ad.stats();
     }
   }
    
  
   


  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  createDivWithDbInfo(i) {
    var newDiv = document.createElement("div");
    var id = newDiv.appendChild(document.createElement("h1"));
    id.innerHTML = db.pageData.id.replace("__PG__", ++i);

    var title = newDiv.appendChild(document.createElement("h4"));
    title.innerHTML = db.pageData.title.replace("PG", "wow i am a good title");

    var text = newDiv.appendChild(document.createElement("p"));
    text.innerHTML = db.pageData.text.replace("PG", "wow i am a good paragraph");
    return newDiv;
  }

  increaseParams() {
    this.pageIndex++;
    this.ad.adIndex++;
  }

  checkIfLastPage(i, totalPages, adNode) {
    if (i == totalPages - 1) {
      var adNode = this.ad.render([300, 600], true);
    }
    return adNode;
  }

  checkIfEvenOrOdd() {
    if (this.ad.adIndex % 2 == 0) {
      var adNode = this.ad.render([320, 100], false);
    } else {
      var adNode = this.ad.render();
    }
    return adNode;
  }

  

}
