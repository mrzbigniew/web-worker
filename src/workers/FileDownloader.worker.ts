const downloaderWorker: Worker = self as any;

downloaderWorker.addEventListener('message', async (event) => {
  const request = new Request(event.data);
  const data = await fetch(request, {mode: 'no-cors'});
  const blob = await data.arrayBuffer();
  downloaderWorker.postMessage({image: event.data, blob});
});
