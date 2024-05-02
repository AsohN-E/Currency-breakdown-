    function breakdown() {
      var amount = parseInt(document.getElementById("amountInput").value);
      var denominations;
      if (amount > 10000) {
        denominations = [10000, 5000, 2000, 1000, 500, 100, 50, 25, 10, 5, 2, 1];
      } else if (amount > 5000) {
        denominations = [5000, 2000, 1000, 500, 100, 50, 25, 10, 5, 2, 1];
      } else if (amount > 2000) {
        denominations = [2000, 1000, 500, 100, 50, 25, 10, 5, 2, 1];
      } else if (amount > 1000) {
        denominations = [1000, 500, 100, 50, 25, 10, 5, 2, 1];
      } else if (amount > 500) {
        denominations = [500, 100, 50, 25, 10, 5, 2, 1];
      } else if (amount > 100) {
        denominations = [100, 50, 25, 10, 5, 2, 1];
      } else if (amount > 50) {
        denominations = [50, 25, 10, 5, 2, 1];
      } else {
        denominations = [10, 5, 2, 1];
      }
      var result = [];

      function breakdownRecursive(amount, denominations) {
        if (amount === 0) {
          return;
        }
        for (var i = 0; i < denominations.length; i++) {
          if (amount >= denominations[i]) {
            result.push(denominations[i]);
            return breakdownRecursive(amount - denominations[i], denominations);
          }
        }
      }

      for (var i = 0; i < denominations.length; i++) {
        var count = Math.floor(amount / denominations[i]);
        if (count > 0) {
        result.push("[" + count + " x " + denominations[i] + "]");
        amount -= count * denominations[i];
        }
      }

      var output = "Breakdown: " + result.join(", ");
      document.getElementById("result").innerHTML = output;
    }
