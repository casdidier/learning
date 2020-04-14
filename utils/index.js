const perf = require('execution-time')();

const measurePerf = (fun, args) => {
  perf.start();

  fun(args);

  const results = perf.stop();
  console.log(results.time); // in milliseconds
};

const benchmark = (arrayFun, args) => {
  for (let i = 0; i < arrayFun.length; i++) {
    measurePerf(arrayFun[i], args);
  }
};

export default {
  measurePerf,
  benchmark,
};
