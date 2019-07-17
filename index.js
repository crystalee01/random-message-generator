var button = $('button');
var lyricText = $("p");
button.on("click", writeLyrics);

function random(num) { // generates a random number from 0 to number+1
  return Math.floor(Math.random()*(num+1));
}

function writeLyrics(){
  var num = random(8);
  if(num==0) {
    lyricText.text("It feels so good to be so young \n And have this fun and be successful -'successful'");
  }
  else if(num==1){
    lyricText.text("Sometimes it's hard to find, find my way up into the clouds Tune it out, they can be so loud -'breathin'");
  }
  else if(num==2){
    lyricText.text("One taught me love One taught me patience And one taught me pain Now, I'm so amazing -'thank you, next'");
  }
  else if(num==3){
    lyricText.text("When life deals us cards Make everything taste like it is salt Then you come through like the sweetener you are -'sweetener'");
  }
  else if(num==4){
    lyricText.text("Nothing to prove and I'm bulletproof and Know what I'm doing -'dangerous woman'");
  }
  else if(num==5){
    lyricText.text("He just comes to visit me When I'm dreaming every now and then -'ghostin'");
  }
  else if(num==6){
    lyricText.text("I'm obsessive and I love too hard Good at overthinking with my heart How you even think it got this far? -'needy'");
  }
  else{
    lyricText.text("You're in love with a version of a person That you've created in your head That you are trying to but cannot fix -'in my head'");
  }
  console.log('button clicked!');
}
