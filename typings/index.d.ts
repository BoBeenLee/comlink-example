// typings/custom.d.ts
declare module "src/workers/counter.worker" {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}

declare module "src/workers/fetch.worker" {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}