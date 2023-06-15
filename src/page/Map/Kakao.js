import React, { useEffect, useState, useRef } from "react";
import markerImage from "../../images/캠핑마커.png";
import { renderToString } from "react-dom/server";
import Overlay from "./overlay";
import InfoWindow from "./infoWindow";
const { kakao } = window;

export default function KakaoMap(props) {
  const { markerPositions } = props;
  const [kakaoMap, setKakaoMap] = useState(null);
  const [, setMarkers] = useState([]);
  const mapTypeControl = new kakao.maps.MapTypeControl();
  const zoomControl = new kakao.maps.ZoomControl();
  const container = useRef();
  const imageSize = new kakao.maps.Size(35, 35);
  const image = new kakao.maps.MarkerImage(markerImage, imageSize);
   
  const offsetY = 50;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=53b64929e7fe329e9a7f25df6023e4c0&autoload=false";
    document.head.appendChild(script);

    script.onload = () => { // 지도 초기값 설정하는 역할
      kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(37.50802, 127.062835);
        const options = {
          center,
          level: 10
        };
        const map = new kakao.maps.Map(container.current, options);
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);
        map.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

        setKakaoMap(map);
      });
    };
  }, [container]);

  useEffect(() => { // 지도를 띄우는 역할
    if (kakaoMap === null) {
      return;
    }
    const center = kakaoMap.getCenter();
    container.current.style.width = `100vw`;
    container.current.style.height = `100vh`;
    kakaoMap.relayout();
    kakaoMap.setCenter(center);
  }, [kakaoMap]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    const positions = markerPositions.map(pos => new kakao.maps.LatLng(...pos));

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
        });

        const overlay = new kakao.maps.CustomOverlay({
          content: renderToString(<Overlay position={position}/>),
          map: null,
          position: marker.getPosition(),
        });

        kakao.maps.event.addListener(marker, 'mouseover', () => {
          adjustInfowindowPosition();
          infowindow.setMap(kakaoMap);
          console.log("mouseover!!")
          
        });

        kakao.maps.event.addListener(marker, 'mouseout', () => {
          infowindow.setMap(null)
          console.log("mouse out!!")
        });

        kakao.maps.event.addListener(marker, 'click', () => {
          console.log('Marker clicked');
          infowindow.setMap(null)
          overlay.setMap(kakaoMap);
        });

        kakao.maps.event.addListener(kakaoMap, 'click', () => {
          console.log('Map Unclicked');
          overlay.setMap(null);
        });

        return marker;
      });
    });

    if (positions.length > 0) {
      const bounds = positions.reduce(
        (bounds, latlng) => bounds.extend(latlng),
        new kakao.maps.LatLngBounds()
      );

      kakaoMap.setBounds(bounds);
    }
  }, [kakaoMap, markerPositions]);

  return <div id="container" ref={container} />;
}