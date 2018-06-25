const helloWorldWorker: Worker = self as any;

helloWorldWorker.postMessage({message: 'Hello World'});

helloWorldWorker.addEventListener('message', (event) => {
  console.log(event);
});
