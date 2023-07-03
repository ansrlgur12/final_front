import { createContext, useState } from "react";
export const MarkerContext = createContext(null);

const MarkerStore = (props) => {
    const[markerLat, setMarkerLat] = useState(37.50802);
    const[markerLng, setMarkerLng] = useState(127.062835);
    const[zoomLev, setZoomLev] = useState(10);
    const[viewOverlay, setViewOverlay] = useState(false);
    const[overlayOpen, setOverlayOpen] = useState(false);
    const[closeMenu, setCloseMenu] = useState(false);
    const[location, setLocation] = useState([0,0]);
    const[currentData, setCurrentData] = useState("normal");
    const[change, setChange] = useState(0);
    const[selectedSortBy, setSelectedSortBy] = useState('이름순');
    const[myLoc, setMyLoc] = useState([]);
    const[contentId, setContentId] = useState("");


    return(
        <MarkerContext.Provider value={{markerLat, setMarkerLat, markerLng, setMarkerLng, zoomLev, setZoomLev, viewOverlay, setViewOverlay, overlayOpen, setOverlayOpen,
            closeMenu, setCloseMenu, location, setLocation, currentData, setCurrentData, change, setChange, selectedSortBy, setSelectedSortBy, myLoc, setMyLoc, contentId, setContentId }}>
            {props.children}
        </MarkerContext.Provider>
    );
};
export default MarkerStore;