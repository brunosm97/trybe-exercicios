console.log("Log 1");

setTimeout(() => console.log("Async log"), 1000);

console.log("Log 2");
console.log("Log 3");

/* Log 1
Log 2
Log 3
Async log */

// setTimeout(() => {}, 1000)  é uma HOF que executa om codigo assincronamente após um periodo que é determinado em milisegundos.

