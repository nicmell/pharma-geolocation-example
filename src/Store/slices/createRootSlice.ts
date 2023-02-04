import CreateAppSettingsSlice from "@/Store/slices/createAppSettingsSlice";
import createFormSlice from "@/Store/slices/createFormSlice";
import createPharmaSlice from "@/Store/slices/createPharmaSlice";
import {StoreSlice, StoreState} from "@/Typings/store";

const createRootSlice: StoreSlice<StoreState> = (...args) => {
  return {
    ...createPharmaSlice(...args),
    ...CreateAppSettingsSlice(...args),
    ...createFormSlice(...args),
    reset: function () {
      const get : () => StoreState = args[1]
      const {pharma, appSettings, form} = get()
      appSettings.reset()
      form.reset()
      pharma.fetchData()
    }
  }
}

export default createRootSlice

