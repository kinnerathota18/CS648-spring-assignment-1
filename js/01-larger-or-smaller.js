<html>
  <head>
    <script>
      function displayLarger() {
        let num1 = parseInt(prompt("Enter first number:"));
        let num2 = parseInt(prompt("Enter second number:"));
        let result = (num1 > num2) ? num1 : (num1 == num2) ? "The numbers are equal" : num2;
        document.getElementById("result").innerHTML = result;
      }
    </script>
  </head>
  <body>
    <h3>Larger of two numbers</h3>
    <button onclick="displayLarger()">Show Result</button>
    <div id="result"></div>
  </body>
</html>