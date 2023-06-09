import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import {NavigationControl, geolocateControl, fullscreenControl} from 'react-map-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import { FullscreenControl } from 'react-map-gl';
import { GeolocateControl } from 'react-map-gl';
import { MapMouseEvent } from 'react-map-gl/dist/esm/types';

export default function Map(){
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(126.9784147);
  const [lat, setLat] = useState(37.5666);
  const [zoom, setZoom] = useState(14);
  const [API_KEY, setAPI_KEY] = useState('MzpXje8LGpw5MKR1IUOu');
  const [MAP_STYLE, setMAP_STYLE] = useState('55293a5d-07f7-441e-a7b8-255e76919805');
  const [currentMap, setCurrentMap] = useState(0);
  const [hovered, setHovered] = useState(false);


  useEffect(() => {
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/${MAP_STYLE}/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    map.current.addControl(new maplibregl.GeolocateControl(), 'top-right');
    map.current.addControl(new maplibregl.FullscreenControl(), 'top-right');

    const marker = new maplibregl.Marker({ color: '#FF0000'}) // 핀 박기
      .setLngLat([127.0331, 37.4994])
      .addTo(map.current)
    
    const popupContent = `
      <h1>KH 정보교육원</h1>
      <h3>3층 G강의장</h3>
      <button>이동</button>
    `;

    const miniPopupContent = `
    <span>KH정보교육원</span>
    `

    const popup = new maplibregl.Popup({
        closeOnClick: false,  // 랜더링 시 팝업 뜨는 오류 수정
        closeButton: false,  // 랜더링 시 팝업 뜨는 오류 수정
        anchor: 'bottom', // 팝업 메시지 위치 (top, bottom, left, right 중 선택)
        offset: 30, // 팝업 메시지의 위치를 조정하는 값
        className: 'custom-popup' // 팝업 메시지의 클래스 이름 (CSS 스타일링에 사용)
      });


    marker.getElement().addEventListener("mouseenter", () => { // 마우스 호버 이벤트
      setHovered(true);
      popup.setLngLat(marker.getLngLat()).setHTML(`${miniPopupContent}`).addTo(map.current);
    });

    marker.getElement().addEventListener("mouseleave", () => { // 마우스 호버 풀림
      setHovered(false);
      popup.remove();
    });

    marker.getElement().addEventListener("click", () => { // 핀 클릭시
        setHovered(false);
        popup.remove();
        map.current.flyTo({ center: marker.getLngLat(), zoom: zoom + 2 }); // 클릭시 가운데로 이동, 확대
      });

    marker.setPopup(new maplibregl.Popup().setHTML(popupContent)); // 클릭시 나오는 메인 팝업
    

    return () => {
        marker.remove();
        map.current.remove();
      };
    }, [MAP_STYLE]);
    

    const changeMapStyle = () => { // 맵스타일 변경
        if (currentMap == 0) {
            setMAP_STYLE("0411a18a-9f70-44d9-af58-3b0aa94f1b01")
            setCurrentMap(1)
        }
        else {
            setMAP_STYLE("55293a5d-07f7-441e-a7b8-255e76919805")
            setCurrentMap(0)
        }
        console.log("맵 변경 클릭")
        console.log(MAP_STYLE)
    }

    const handleMoveEnd = () => { // 지도 이동 완료 시 상태 업데이트
        const { lng, lat } = map.current.getCenter();
        const zoom = map.current.getZoom();
        setLng(lng);
        setLat(lat);
        setZoom(zoom);
    };

    useEffect(() => {
        if (map.current) {
            map.current.on("moveend", handleMoveEnd);
        }
    }, [MAP_STYLE]);
  
  return (
    <>
    <>
      <div className="map-wrap">
        <div ref={mapContainer} className="map"/>
        <button className='mapChange' onClick={changeMapStyle}>맵 스타일 변경</button>
      </div>
      
    </>
    </>
  );
}