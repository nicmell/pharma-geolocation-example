import store from "@/Store/store";

export default function useForm() {
  return  store(({form}) => form)
}
