/* JavaScript code for memory card game - TP8-JS */

 cardsClicked = 0;

 function cardClicked(what) {
   
   if ( !what.classList.contains("matched") ) {
     
    if ( what.classList.contains("clicked") ) {
      what.classList.remove("clicked");
      cardsClicked--; 
        } else {
          what.classList.add("clicked");
          cardsClicked++;
        
          if(cardsClicked == 2) {
           cardCompare();
        }
    
      }
    }
    
 }

function cardCompare() {
   clickedCards = document.querySelectorAll(".clicked");
   matched = false;
  
   if (clickedCards[0].classList.contains("pic1") && clickedCards[1].classList.contains("pic1") ) {
     matched = true;
     
   } else if (clickedCards[0].classList.contains("pic2") && clickedCards[1].classList.contains("pic2") ) {
     matched = true;
     
   } else if (clickedCards[0].classList.contains("pic3") && clickedCards[1].classList.contains("pic3") ) {
     matched = true;
     
   }else if (clickedCards[0].classList.contains("pic4") && clickedCards[1].classList.contains("pic4") ) {
     matched = true;
     
   }
  
   if (matched) {
     removeCards(clickedCards[0], clickedCards[1]);
    
   } else {
     unflipCards(clickedCards[0], clickedCards[1]);
    
   }
  
 }

 function removeCards(cardA, cardB) {
   
   pause = setTimeout(function() {
    cardA.classList.remove("clicked");
    cardB.classList.remove("clicked");
     
    cardA.classList.add("matched");
    cardB.classList.add("matched");
     
    cardsClicked = 0;
     
    checkWinning();
     
   }, 1000);
  
 }

 function unflipCards(cardA, cardB) {
   
   pause = setTimeout(function() {
   cardA.classList.remove("clicked");
   cardB.classList.remove("clicked");
     
   cardsClicked = 0;
   }, 1000);
     
 }

 function checkWinning() {
   remainingCards = document.querySelectorAll(".card");
   countCards = remainingCards.length;
   
   for(c = 0; c < remainingCards.length; c++ ) {
     if ( !remainingCards[c].classList.contains("matched") ) {
      return;
     }
     
   } 
   
   document.getElementById("mainTable").innerHTML = "You won!";
 }

function shuffleCards() {
  table = document.querySelector("#mainTable");
  cardCount = table.children.length;
  
  cardToMove = table.children[0];
  table.appendChild( cardToMove );
  
  for (c=0; c < cardCount; c++) {
    randomCard = Math.floor( Math.random() * cardCount);
    cardToMove = table.children[randomCard];
    table.appendChild( cardToMove);
  }
  
}


window.onload = function() {
  
  shuffleCards();
  
  cardList = document.querySelectorAll(".card"); // collection of cards
  
  cardCount = cardList.length; //how many cards are on the table
  
  for (c = 0; c < cardCount; c++) {
    cardList[c].onclick = function() {
      
      cardClicked(this);

      
    }
  }
  
}

  
  // cardcounter = 0;

    /* if (!this.classList.contains("cardRemoved")) {
      // this.classList.toggle("clicked");
      
      if (cardcounter == 0 ) {
        clickedcardA = this.classList;
        // clickedcardA.toggle("clicked");
        cardcounter = 1;
        
        } else {
          
          if (clickedcardA.contains("pic1") && this.classList.contains("pic1")){
           clickedcardA.toggle("clicked");
           // this.classList.toggle("clicked");
            pause = setTimeout(function() {
           this.classList.remove("clicked");
           clickedcardA.add("cardRemoved");
           this.classList.add("cardRemoved");
              }, 500);
    
          } else if (clickedcardA.contains("pic2") && this.classList.contains("pic2")){
           clickedcardA.toggle("clicked");
           this.classList.toggle("clicked");
           clickedcardA.add("cardRemoved");
           this.classList.add("cardRemoved");
    
         } else if (clickedcardA.contains("pic3") && this.classList.contains("pic3")){
           clickedcardA.toggle("clicked");
           this.classList.toggle("clicked");
           clickedcardA.add("cardRemoved");
           this.classList.add("cardRemoved");
    
         } else if (clickedcardA.contains("pic4") && this.classList.contains("pic4")){
           clickedcardA.toggle("clicked");
           this.classList.toggle("clicked");
           clickedcardA.add("cardRemoved");
           this.classList.add("cardRemoved");
    
         } else {
           this.classList.toggle("clicked");
           // clickedcardA.toggle("clicked");
           pause = setTimeout(function() {
            clickedcardA.toggle("clicked");
            this.classList.toggle("clicked");
           // printf(cardcounter);
           }, 500);
           
         }
          cardcounter = 0;
      }
        
       } */
      
      // cardsClicked(this);