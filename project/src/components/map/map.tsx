import {useRef} from 'react';
import useMap from './useMap';
import {Icon, Marker} from 'leaflet';
import {City, Points} from '../../types/types';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT} from '../../const';

type MapProps = {
  city: City;
  points: Points;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps):JSX.Element {
  const {city, points} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  if (map) {
    points.forEach((point) => {
      const marker = new Marker({
        lat: point.lat,
        lng: point.lng
      });

      marker.setIcon(defaultCustomIcon).addTo(map);
    }
    );
  }

  return <section className={'cities__map map'} style={{height: '500px'}} ref={mapRef}></section>;
}

export default Map;
