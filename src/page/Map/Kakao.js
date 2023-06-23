import React, { useContext, useEffect, useState, useRef } from "react";
import { renderToString } from "react-dom/server";
import Overlay from "./overlay";
import InfoWindow from "./infoWindow";
import { MarkerContext } from "../../context/MarkerInfo";
import {getDistance} from "geolib";
import AxiosApi from "../../API/TestAxios";

const { kakao } = window;

const KakaoMap = (props) => {
  const context = useContext(MarkerContext);
  const {markerLat, markerLng, zoomLev, overlayOpen, setOverlayOpen, setLocation} = context;
  const { markerPositions, campLocMarkerImg} = props;
  const [kakaoMap, setKakaoMap] = useState(null);
  const [, setMarkers] = useState([]);
  const [isCenter, setCenter] = useState(null);
  const mapTypeControl = new kakao.maps.MapTypeControl();
  const zoomControl = new kakao.maps.ZoomControl();
  const container = useRef();
  const imageSize = new kakao.maps.Size(35, 35);
  const image = new kakao.maps.MarkerImage(campLocMarkerImg, imageSize);
  const offsetY = 50;
  const MAX_MARKERS = 200;

  useEffect(() => {
        const center = new kakao.maps.LatLng(markerLat, markerLng);
        container.current.style.width = `100vw`;
        container.current.style.height = `100vh`;
        console.log(center + "center 값")
        console.log(zoomLev + "zoom 값")
    
        const options = {
          center,
          level: zoomLev,
          maxLevel: 13
        };
        const map = new kakao.maps.Map(container.current, options);

        kakao.maps.event.addListener(map, 'dragend', function() {        
          var latlng = map.getCenter(); 
          setCenter(latlng);
          setOverlayOpen(false);
      });
        setCenter(center);
        setKakaoMap(map);
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);
        map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);
      },[container, markerLat, markerLng, zoomLev]);

      

 

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }
    const sortedMarkers = markerPositions.sort((a, b) => {
        const distanceA = getDistance(
          { latitude: isCenter.getLat(), longitude: isCenter.getLng() },
          { latitude: a[0], longitude: a[1] }
        );
        const distanceB = getDistance(
          { latitude: isCenter.getLat(), longitude: isCenter.getLng() },
          { latitude: b[0], longitude: b[1] }
        );
        return distanceA - distanceB;
    });
    const nearestMarkers = sortedMarkers.slice(0, MAX_MARKERS);
    const positions = nearestMarkers.map(
      (pos) => new kakao.maps.LatLng(pos[0], pos[1])
    );

    setMarkers(markers => {
      markers.forEach(marker => marker.setMap(null));

      
      return positions.map(position => {
        const marker = new kakao.maps.Marker({
          map: kakaoMap,
          position,
          image,
          clickable: true,
        });
        
        const infowindow = new kakao.maps.CustomOverlay({
          content:  renderToString(<InfoWindow position={position}/>),
          map: null,
          position: marker.getPosition(),
          removable: true,
          clickable: true,
        });
       

        const adjustInfowindowPosition = () => {
          const markerPosition = marker.getPosition();
          const markerPixelPosition = kakaoMap.getProjection().pointFromCoords(markerPosition);
          const infowindowPosition = new kakao.maps.Point(
            markerPixelPosition.x,
            markerPixelPosition.y - offsetY
          );
          const adjustedLatLng = kakaoMap.getProjection().coordsFromPoint(infowindowPosition);

          infowindow.setPosition(adjustedLatLng);
        };

        kakao.maps.event.addListener(kakaoMap, 'zoom_changed', () => {
          adjustInfowindowPosition();
          setOverlayOpen(false);
          infowindow.setMap(null)
        });

        kakao.maps.event.addListener(marker, 'mouseover', () => {
          adjustInfowindowPosition();
          infowindow.setMap(kakaoMap);
          
        });

        kakao.maps.event.addListener(marker, 'mouseout', () => {
          infowindow.setMap(null)
        });

        kakao.maps.event.addListener(marker, 'click', () => {
          kakaoMap.setLevel(1);
          console.log('Marker clicked');
          infowindow.setMap(null)
          const xValue = position.La;
          const yValue = position.Ma;  
          setLocation([xValue, yValue]);
          setOverlayOpen(true);
          console.log("오버레이 오픈" + overlayOpen);
          
          const markerPosition = marker.getPosition();
          kakaoMap.setCenter(markerPosition);
          kakaoMap.relayout();
        });

        // const overlay = new kakao.maps.CustomOverlay({
        //   content: renderToString(<Overlay position={position}/>),
        //   map: null,
        //   position: marker.getPosition(),
        //   removable: true,
        // });

        kakao.maps.event.addListener(kakaoMap, 'click', () => {
          console.log('Map Unclicked');
          // overlay.setMap(null);
          setOverlayOpen(false);
          console.log(overlayOpen);
        });

        return marker;
      });
    });

//    if (positions.length > 0) {
//      const bounds = positions.reduce(
//        (bounds, latlng) => bounds.extend(latlng),
//        new kakao.maps.LatLngBounds()
//      );
//
//      kakaoMap.setBounds(bounds);
//    }
  }, [kakaoMap, markerPositions, isCenter, overlayOpen, setOverlayOpen]);

  

  return(
    <div id="container" ref={container} />
  );
}

export default KakaoMap;