import { Store } from "@/types/store"
import { useCallback } from "react"
import { mutate } from "swr"

export const STORE_KEY = '/stores';

const useStores = () => {
  const initializeStores = useCallback((stores: Store[]) => {
    mutate(STORE_KEY, stores);
  }, []);
  return {
    initializeStores,
  };
};

export default useStores