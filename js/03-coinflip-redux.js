<html>
  <head>
    <script>
      function coinFlipGame() {
        let coinFlip;
        for (let i = 0; i < 10; i++) {
          coinFlip = Math.round(Math.random());
          if (coinFlip == 0) {
            console.log("Heads");
          } else {
            console.log("Tails");
          }
        }
      }
    </script>
  </head>
  <body>
    <h3>Coin Flip Game</h3>
    <button onclick="coinFlipGame()">Start Game</button>
  </body>
</html>