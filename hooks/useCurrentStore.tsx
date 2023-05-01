import { Store } from "@/types/store";
import { useCallback } from "react";
import { mutate } from "swr";

export const CURRENT_STORE_KEY = '/current-store';

const useCurrentStore = () => {
  const setCurrentStore = useCallback((store: Store) => {
    mutate(CURRENT_STORE_KEY, store);
  }, []);

  const clearCurrentStore = useCallback(() => {
    mutate(CURRENT_STORE_KEY, null);
  }, []);

  return {
    setCurrentStore,
    clearCurrentStore,
  };
};

export default useCurrentStore;