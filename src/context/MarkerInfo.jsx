import { createContext, useState } from "react";
export const MarkerContext = createContext(null);

const MarkerStore = (props) => {
    const[markerLat, setMarkerLat] = useState(37.50802);
    const[markerLng, setMarkerLng] = useState(127.062835);
    const[zoomLev, setZoomLev] = useState(10);
    const[viewOverlay, setViewOverlay] = useState(false);
    const[overlayOpen, setOverlayOpen] = useState(false);
    const[closeMenu, setCloseMenu] = useState(false);
    const[location, setLocation] = useState([]);
    const[detailOpen, setDetailOpen] = useState(false);


    return(
        <MarkerContext.Provider value={{markerLat, setMarkerLat, markerLng, setMarkerLng, zoomLev, setZoomLev, viewOverlay, setViewOverlay, overlayOpen, setOverlayOpen,
            closeMenu, setCloseMenu, location, setLocation, detailOpen, setDetailOpen }}>
            {props.children}
        </MarkerContext.Provider>
    );
};
export default MarkerStore;