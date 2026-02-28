import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ---------------- SAMPLE DATA ---------------- */

const complaints = [
  {
    id: 1,
    ward: "Karol Bagh",
    position: [28.6517, 77.1906],
    severity: "High",
    details: "Heavy water logging on main road",
  },
  {
    id: 2,
    ward: "Central Delhi",
    position: [28.6139, 77.209],
    severity: "Medium",
    details: "Slow drainage after rainfall",
  },
];

const wardsGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Karol Bagh" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [77.18, 28.65],
            [77.20, 28.65],
            [77.20, 28.66],
            [77.18, 28.66],
            [77.18, 28.65],
          ],
        ],
      },
    },
  ],
};

/* ---------------- ICON ---------------- */

const icon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [28, 28],
});

/* ---------------- COMPONENT ---------------- */

export default function LiveFloodMap() {
  return (
    <div style={{ height: "75vh", width: "100%" }}>
      <MapContainer
        center={[28.6139, 77.209]}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Base Map */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Ward Boundaries */}
        <GeoJSON
          data={wardsGeoJSON}
          style={{
            color: "#0d47a1",
            weight: 2,
            fillOpacity: 0.1,
          }}
        />

        {/* Risk Zones (Heatmap-like Circles) */}
        <Circle
          center={[28.6517, 77.1906]}
          radius={800}
          pathOptions={{ color: "red", fillOpacity: 0.25 }}
        />
        <Circle
          center={[28.6139, 77.209]}
          radius={600}
          pathOptions={{ color: "orange", fillOpacity: 0.25 }}
        />

        {/* Complaint Pins */}
        {complaints.map((c) => (
          <Marker key={c.id} position={c.position} icon={icon}>
            <Popup>
              <strong>Ward:</strong> {c.ward} <br />
              <strong>Severity:</strong> {c.severity} <br />
              <strong>Details:</strong> {c.details}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}