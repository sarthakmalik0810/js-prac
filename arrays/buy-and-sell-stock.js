var maxProfit = function (prices) {
  let maxProfit = 0;
  let buyPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - maxProfit);
    }
  }

  return maxProfit;
};

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = prices => {
  // Start with nothing and take every profitable opportunity from time travel
  let profit = 0;
  // Start from the second day (because that is the first day you could sell)
  for (let i = 1; i < prices.length; i++) {
    // Our Delorean only goes back 1 day, but that is all we need
    const [priceYesterday, priceToday] = [prices[i - 1], prices[i]];
    // Whenever there is profit, engage that Flux Capacitor!
    if (priceYesterday < priceToday) profit += priceToday - priceYesterday;
    // Buy yesterday; sell today
  }
  // Take every Monday off!
  return profit;
  // Time travel trading makes every weekend is a three-day weekend!
};

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
