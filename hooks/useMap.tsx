import { NaverMap } from '@/types/map';
import { Coordinates } from '@/types/store';
import { useCallback } from 'react';
import { mutate } from 'swr';

export const INITIAL_CENTER: Coordinates = [37.5262411, 126.99289439];
export const INITIAL_ZOOM = 10;
export const MAP_KEY = '/map'

const useMap = () => {
  const initializeMap = useCallback((map: NaverMap) => {
    mutate(MAP_KEY, map);
  }, []);

  return {
    initializeMap,
  };
};

export default useMap;