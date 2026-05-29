import "./FixLeafletIcons";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function EstateMap() {
  const blocks = [
    {
      id: "A01",
      progress: 100,
      production: 14.8,
      color: "#22c55e",
      coordinates: [
        [2.9145, 101.5085],
        [2.9145, 101.5100],
        [2.9132, 101.5100],
        [2.9132, 101.5085],
      ],
    },
    {
      id: "A02",
      progress: 65,
      production: 9.2,
      color: "#eab308",
      coordinates: [
        [2.9145, 101.5100],
        [2.9145, 101.5115],
        [2.9132, 101.5115],
        [2.9132, 101.5100],
      ],
    },
    {
      id: "A03",
      progress: 20,
      production: 4.5,
      color: "#ef4444",
      coordinates: [
        [2.9132, 101.5085],
        [2.9132, 101.5100],
        [2.9120, 101.5100],
        [2.9120, 101.5085],
      ],
    },
    {
      id: "A04",
      progress: 45,
      production: 7.8,
      color: "#3b82f6",
      coordinates: [
        [2.9132, 101.5100],
        [2.9132, 101.5115],
        [2.9120, 101.5115],
        [2.9120, 101.5100],
      ],
    },
  ];

  return (
    <MapContainer
      center={[2.913556, 101.509806]}
      zoom={25}
      scrollWheelZoom={true}
      className="w-full h-full"
    >
      <TileLayer
        attribution="Esri"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />

      <Marker position={[2.913556, 101.509806]}>
        <Popup>
          AgroPulse Demo Location
        </Popup>
      </Marker>

      {blocks.map((block) => (
        <Polygon
          key={block.id}
          positions={block.coordinates}
          pathOptions={{
            color: block.color,
            fillColor: block.color,
            fillOpacity: 0.3,
            weight: 2,
          }}
          eventHandlers={{
            mouseover: (e) => {
              e.target.setStyle({
                fillOpacity: 0.6,
                weight: 4,
              });
            },
            mouseout: (e) => {
              e.target.setStyle({
                fillOpacity: 0.3,
                weight: 2,
              });
            },
          }}
        >
          <Popup>
            <div>
              <div className="font-bold">
                Block {block.id}
              </div>

              <div>
                Harvest Progress: {block.progress}%
              </div>

              <div>
                Production: {block.production} MT
              </div>
            </div>
          </Popup>
        </Polygon>
      ))}
    </MapContainer>
  );
}