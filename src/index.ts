import Worker from 'worker-loader!./workers/HelloWorld.worker';

const worker = new Worker();

worker.postMessage({message: 'Hello'});

worker.addEventListener('message', (event) => {
  console.log(event);
});
