import { db } from "./Db.js";

export class Ad {
  constructor(usedAds = [], adIndex = 0) {
    this.usedAds = usedAds;
    this.adIndex = adIndex;
  }

  render(size = [], isLast = false) {
    var newDiv = this.createDivWhithIdFromDb();

    console.dir(size);

    checkSize(size, newDiv);

    return newDiv;
  }

  createDivWhithIdFromDb() {
    var newDiv = document.createElement("div");
    this.adIndex++;
    newDiv.id = db.ads[0].replace("__INDEX__", this.adIndex);
    return newDiv;
  }

  used(ad) {
    if (!ad === undefined || !ad === null) {
      this.usedAds.push(ad);
    }
  }

  stats() {
    console.log(this.usedAds, this.adIndex);
  }
}
function checkSize(size, newDiv) {
  if (size.length == 0) {
    newDiv.width = 300;
    newDiv.height = 250;
  } else {
    newDiv.width = size[0];
    newDiv.height = size[1];
  }
}

