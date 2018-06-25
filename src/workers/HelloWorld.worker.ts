const ctx: Worker = self as any;

ctx.postMessage({message: 'Hello World'});

ctx.addEventListener('message', (event) => {
  console.log(event);
});
