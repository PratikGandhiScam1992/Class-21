function isTouching(S,f){
    if (S.x - f.x < f.width/2 + S.width/2
      && f.x - S.x < f.width/2 +S.width/2
      && S.y - f.y < f.height/2 + S.height/2
      && f.y - S.y < f.height/2 + S.height/2) {
   return true;
      }
  else {
   return false;
  }
  }