import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
const sydney: [number, number] = [151.16644, -33.81487];

const MapBox = () => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || !accessToken) return;

    mapboxgl.accessToken = accessToken;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/standard",
      projection: "globe",
      center: sydney,
      zoom: 11,
      bearing: -25,
      antialias: true,
      config: {
        basemap: {
          show3dObjects: true,
          show3dBuildings: true,
        },
      },
      attributionControl: false,
    });

    mapRef.current = map;

    new mapboxgl.Marker({ color: "#7c3aed" }).setLngLat(sydney).addTo(map);

    new mapboxgl.Marker({ color: "#7C0A02" }).setLngLat([-151.182887, -33.799537]).addTo(map);

    const resizeObserver = new ResizeObserver(() => {
      map.resize();
    });

    resizeObserver.observe(mapContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  if (!accessToken) {
    return (
      <div className="bg-muted text-muted-foreground flex h-full min-h-[16rem] w-full items-end rounded-xl p-4 text-sm md:p-6">
        Map unavailable
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[16rem] w-full overflow-hidden rounded-xl">
      <div
        aria-label="Map showing Sydney, Australia"
        className="h-full w-full"
        ref={mapContainerRef}
      />
      {/*<div className="from-backgroundstart/85 pointer-events-none absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t to-transparent p-4 md:p-6">*/}
      {/*  <p className="text-foreground text-sm font-medium">Sydney, Australia</p>*/}
      {/*  <p className="text-muted-foreground text-xs">Based locally, working globally</p>*/}
      {/*</div>*/}
    </div>
  );
};

export default MapBox;
