import { ImageIcon, NaverMap } from "@/types/map";
import { MAP_KEY } from "../../hooks/useMap"
import { STORE_KEY } from "../../hooks/useStore";
import useSWR from 'swr';
import { Store } from "@/types/store";
import Marker from "./Marker";

const Markers = () => {
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  const { data: stores } = useSWR<Store[]>(STORE_KEY);

  if(!map || !stores) return null;

  return (
    <>
      {stores.map((store) => {
        return (
          <Marker 
            map={map}
            coordinates={store.coordinates}
            key={store.nid}
            icon={generateStoreMarkerIcon(store.season, false)}
          />
        );
      })}
    </>
  )
};

const MARKER_HEIGHT = 64;
const MARKER_WIDTH = 54;
const NUMBER_OF_MARKER = 13;
const SCALE = 2 / 3;

const SCALED_MARKER_WIDTH = MARKER_WIDTH * SCALE;
const SCALED_MARKER_HEIGHT = MARKER_HEIGHT * SCALE;


export function generateStoreMarkerIcon(
  markerIndex: number,
  isSelected: boolean
): ImageIcon {
  /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-8-marker-retina-sprite.example.html */
  return {
    url: isSelected ? 'images/markers-selected.png' : 'images/markers.png',
    size: new naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT),
    origin: new naver.maps.Point(SCALED_MARKER_WIDTH * markerIndex, 0),
    scaledSize: new naver.maps.Size(
      SCALED_MARKER_WIDTH * NUMBER_OF_MARKER,
      SCALED_MARKER_HEIGHT
    ),
  };
}

export default Markers;