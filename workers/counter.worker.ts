import * as Comlink from "comlink";

const obj = {
  counter: 0,
  inc(increment = 1) {
    this.counter += increment;
  },
//   api: async (fetchStarwars: () => Promise<any>) => {
//     await fetchStarwars();
//     // return response;
//   },
};

Comlink.expose(obj);
export {};
