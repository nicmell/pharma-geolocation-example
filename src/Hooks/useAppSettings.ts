import store from "@/Store/store";


export default function useAppSettings() {
  return store(({appSettings}) => appSettings)
}
