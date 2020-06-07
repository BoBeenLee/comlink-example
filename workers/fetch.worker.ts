import * as Comlink from "comlink";

import { fetchStarwars as starwars, HeaderParams } from "../workers/apis";

// Warning
// param에 ids: string[], headers: HeaderParams 와 같이 타입을 넣을 수 없다.
// 404 This page could not be found. 발생.
// Solution
// 타입을 넣지 않는다. default paramter로 ids = [], headers = { accessToken: "" }
// 타입을 추론?할수 있게 해준다.
const obj = {
  async fetchStarwars(ids = [], headers = { accessToken: "" }) {
    console.log(ids, headers);
    return await starwars(ids, headers);
  },
};

Comlink.expose(obj);
