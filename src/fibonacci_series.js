function buildFiboonacci(fiboonacci, n){
  for(var i = 2; i <= n; i++){
      fiboonacci.push(fiboonacci[i-1] + fiboonacci[i-2]);
  }
}

function fibonacci_series(n) {
  var fiboonacci = [0,1];
  if(n > 1) {
      buildFiboonacci(fiboonacci, n);
  }

  return fiboonacci;
}

module.exports = fibonacci_series;
