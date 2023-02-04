import create from "zustand";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

import createRootSlice from "@/Store/slices/createRootSlice";
import {StoreState} from "@/Typings/store";

const store = create<StoreState>()(
  devtools(
    immer(
      createRootSlice
    )
  )
)

export default store
