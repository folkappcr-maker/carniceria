export function MapArt() {
  return (
    <svg viewBox="0 0 420 360" role="img" aria-label="Mapa estilizado de la ubicación de la carnicería sobre la Avenida Pedro Goyena">
              <rect width="420" height="360" fill="#E8DFCF"/>
              <g stroke="#17110F" strokeWidth="1" opacity=".18">
                <path d="M0 40h420M0 100h420M0 160h420M0 220h420M0 280h420M0 340h420"/>
                <path d="M40 0v360M100 0v360M160 0v360M220 0v360M280 0v360M340 0v360M400 0v360"/>
              </g>
              {/* manzanas */}
              <g fill="#D8CCB6" stroke="#17110F" strokeWidth="1.6" opacity=".95">
                <rect x="46" y="46" width="108" height="108" rx="3"/>
                <rect x="166" y="46" width="108" height="108" rx="3"/>
                <rect x="286" y="46" width="108" height="108" rx="3"/>
                <rect x="46" y="166" width="108" height="108" rx="3"/>
                <rect x="166" y="166" width="108" height="108" rx="3"/>
                <rect x="286" y="166" width="108" height="108" rx="3"/>
                <rect x="46" y="286" width="228" height="60" rx="3"/>
              </g>
              {/* avenida */}
              <path d="M0 160h420" stroke="#17110F" strokeWidth="14"/>
              <path d="M0 160h420" stroke="#F3EDE2" strokeWidth="1.6" strokeDasharray="12 14"/>
              {/* pin */}
              <g className="mapcard__pin">
                <path d="M320 306c0-24-16-40-16-56a16 16 0 1 1 32 0c0 16-16 32-16 56Z" transform="translate(-88,-158)"/>
                <circle cx="232" cy="148" r="6" fill="#F3EDE2"/>
              </g>
              <g className="mono" fontSize="11" fill="#17110F">
                <text x="14" y="150">AVENIDA 3</text>
                <text x="262" y="330">PARQUE FRANCIA</text>
              </g>
              <text x="300" y="120" className="mono" fontSize="11" fill="#17110F" fontWeight="700">AQUÍ</text>
            </svg>
  );
}
