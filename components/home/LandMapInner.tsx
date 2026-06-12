"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  DELTA_HIGHLIGHT_STYLE,
  DELTA_OUTLINE,
  OUR_LAND_CENTER,
} from "@/data/land-map";

const ourLandIcon = L.divIcon({
  className: "",
  html: `<div style="
    width: 14px; height: 14px;
    background: #c9a84c;
    border: 2.5px solid #fff;
    border-radius: 50%;
    box-shadow: 0 1px 6px rgba(0,0,0,0.35);
  "></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

function FitBounds() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(DELTA_OUTLINE).pad(0.35);
    map.fitBounds(bounds, { padding: [20, 20], maxZoom: 10 });
  }, [map]);

  return null;
}

export default function LandMapInner() {
  return (
    <div className="relative h-full min-h-[320px] w-full">
      <MapContainer
        center={OUR_LAND_CENTER}
        zoom={9}
        className="h-full min-h-[320px] w-full rounded-lg [&_.leaflet-control-attribution]:!rounded-sm [&_.leaflet-control-attribution]:!bg-white/90 [&_.leaflet-control-attribution]:!px-2 [&_.leaflet-control-attribution]:!py-0.5 [&_.leaflet-control-attribution]:!text-[9px] [&_.leaflet-control-attribution]:!text-gray-600"
        zoomControl={false}
        scrollWheelZoom={false}
        dragging
        doubleClickZoom={false}
        touchZoom
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, SRTM | Map style &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          maxZoom={17}
        />

        <FitBounds />

        <Polygon positions={DELTA_OUTLINE} pathOptions={DELTA_HIGHLIGHT_STYLE}>
          <Popup>
            <span className="text-sm font-medium text-gray-800">
              Kavery Delta
            </span>
          </Popup>
        </Polygon>

        <Marker position={OUR_LAND_CENTER} icon={ourLandIcon}>
          <Popup>
            <div className="text-center">
              <p className="font-serif text-base font-semibold text-[#c9a84c]">
                Our Land
              </p>
              <p className="text-xs text-gray-600">Kavery Delta, Tamil Nadu</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      <div className="pointer-events-none absolute bottom-3 left-3 z-[1000] rounded-md border border-gold/20 bg-deep/85 px-3 py-2 backdrop-blur-sm">
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
          Legend
        </p>
        <ul className="space-y-1 text-[10px] text-cream/70">
          <li className="flex items-center gap-2">
            <span className="h-2.5 w-4 rounded-sm border border-dashed border-[#d93025] bg-[#d93025]/10" />
            Kavery Delta
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full border-2 border-white bg-gold" />
            Our Land
          </li>
        </ul>
      </div>
    </div>
  );
}
