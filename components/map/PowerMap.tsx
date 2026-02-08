"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { divIcon } from "leaflet";
// Fix for default marker icon missing
import L from "leaflet";

// Coordinate type
type Coordinate = [number, number];

interface Location {
    id: string;
    name: string;
    position: Coordinate;
    status: "Available" | "Limited" | "Waitlist";
    description: string;
}

const LOCATIONS: Location[] = [
    {
        id: "usa",
        name: "United States",
        position: [37.0902, -95.7129],
        status: "Available",
        description: "Hydro / Natural Gas powered facilities."
    },
    {
        id: "uae",
        name: "United Arab Emirates",
        position: [23.4241, 53.8478],
        status: "Limited",
        description: "Solar / Grid powered facilities."
    },
    {
        id: "paraguay",
        name: "Paraguay",
        position: [-23.4425, -58.4438],
        status: "Waitlist",
        description: "100% Hydroelectric power."
    },
    {
        id: "ethiopia",
        name: "Ethiopia",
        position: [9.145, 40.4897],
        status: "Available",
        description: "Low cost Hydroelectric power."
    }
];

const customIcon = (status: string) => divIcon({
    className: "custom-marker",
    html: `<div class="w-4 h-4 rounded-full border-2 border-white shadow-[0_0_10px_rgba(0,0,0,0.5)] ${status === 'Available' ? 'bg-[var(--sovereign-emerald)] shadow-[0_0_15px_var(--sovereign-emerald)]' :
            status === 'Limited' ? 'bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,1)]' :
                'bg-red-500'
        }"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
});

export default function PowerMap() {
    return (
        <MapContainer
            center={[20, 0]}
            zoom={2}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%", background: "#0B0C10" }}
            className="z-0"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            {LOCATIONS.map((loc) => (
                <Marker
                    key={loc.id}
                    position={loc.position}
                    icon={customIcon(loc.status)}
                >
                    <Popup className="custom-popup">
                        <div className="p-2">
                            <h3 className="font-bold text-sm mb-1">{loc.name}</h3>
                            <p className="text-xs text-gray-600 mb-2">{loc.description}</p>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-full text-white ${loc.status === 'Available' ? 'bg-[var(--sovereign-emerald)]' :
                                    loc.status === 'Limited' ? 'bg-yellow-500' :
                                        'bg-red-500'
                                }`}>
                                {loc.status}
                            </span>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
