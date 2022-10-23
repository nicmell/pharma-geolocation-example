import useStore from "@/Hooks/useStore";


export default function useAppSettings() {
  return useStore((state) => state.appSettings)
}
