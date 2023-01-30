<html>
  <head>
    <script>
      function coinFlipStreakGame() 
    {
        let coinFlip = -1;
        let streak = 0;
        do {
          coinFlip = Math.round(Math.random());
          streak++;
          if (coinFlip == 0) {
            console.log("Heads");
          } else {
            console.log("Tails");
          }
        } while (coinFlip === 0);
        console.log("Streak ended at " + streak + " flips");
    }
    </script>
  </head>
  <body>
    <h3>Coin Flip Streak Game</h3>
    <button onclick="coinFlipStreakGame()">Start Game</button>
  </body>
</html>