import create from "zustand";
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

import createRootSlice from "@/Store/slices/createRootSlice";
import {StoreState} from "@/Typings/store";

export default create<StoreState>()(
  devtools(
    immer(
      createRootSlice
    )
  )
)

