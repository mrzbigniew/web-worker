import FileDownloaderWorker from 'worker-loader!./workers/FileDownloader.worker';
import HelloWorldWorker from 'worker-loader!./workers/HelloWorld.worker';
import './assets/hubble-space-wallpapers.jpg';

const logDate = (foo: () => void) => {
  console.log(foo());
};

const worker = new HelloWorldWorker();

const downloader = new FileDownloaderWorker();

worker.postMessage({message: 'Hello'});

worker.addEventListener('message', (event) => logDate(() => event.data.message));

downloader.addEventListener('message', (event) => {
  console.log(event);
});

downloader.postMessage('/assets/hubble-space-wallpapers.jpg');
