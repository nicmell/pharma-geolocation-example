import create from "zustand";



import createAppSettingsSlice from "@/Store/slices/createAppSettingsSlice";
import createFormSlice from "@/Store/slices/createFormSlice";
import createPharmaSlice from "@/Store/slices/createPharmaSlice";
import {StoreState} from "@/Typings/store";



export default create<StoreState>()((...args) => {
  return {
    ...createPharmaSlice(...args),
    ...createAppSettingsSlice(...args),
    ...createFormSlice(...args)
  }
})

