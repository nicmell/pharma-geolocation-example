

import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

import pipe from "@/Utils/pipe";

export default function createSlice(slice: any) {
  return pipe(devtools, immer)(slice)
}
