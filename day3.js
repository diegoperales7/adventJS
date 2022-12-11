function distributeGifts(packOfGifts, reindeers) {
  let boxes=0;
  let weightGift=0;
  let takeReindeer= 0;
  for(let gift of packOfGifts){
    weightGift=gift.length+weightGift;
  }
  for(let reindeer of reindeers){
    takeReindeer=(reindeer.length*2)+takeReindeer;
  }
  boxes=Math.trunc(takeReindeer/weightGift);
  return boxes
}
