// Arrow function with default parameter and rest parameters
const log = (msg = 'No message provided', ...params) => {
  // Template strings
  console.log(`Message: ${msg}`);

  // Array destructuring
  const [first, ...rest] = params;

  console.log(first);
  console.log(rest);
};

log('Telerik Academy', 'The', 'Best', 'Academy');


