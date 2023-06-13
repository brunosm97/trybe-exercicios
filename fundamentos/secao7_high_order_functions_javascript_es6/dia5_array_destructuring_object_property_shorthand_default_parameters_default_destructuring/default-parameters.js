const greeting1 = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
    console.log(`Welcome ${userDisplay}!`);
  };
  
  greeting1(); // Welcome pessoa usuária!

  const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome pessoa usuária!

const multiply = (number, value = 2) => number * value;
  
  console.log(multiply(8));
  