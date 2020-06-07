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
  // 콜백함수를 전달하여 브라우져에서 fetch호출하고 전달하여 값을 주는 방식임
  async fetch1(callback = () => Promise.resolve()) {
    const response =  await callback();
    console.log("fetch1", response);
  }
};

Comlink.expose(obj);
