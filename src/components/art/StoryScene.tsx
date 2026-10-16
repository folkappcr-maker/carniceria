export function StoryScene() {
  return (
    <svg viewBox="0 0 400 480" role="img" aria-label="Ilustración de dos medias reses colgadas en la cámara, la balanza de gancho y la tabla de desposte con la cuchilla">
              <rect width="400" height="480" fill="#E8DFCF"/>
    
              {/* riel y ganchos */}
              <path d="M0 40h400" stroke="#17110F" strokeWidth="2.8" fill="none"/>
              <g fill="#17110F">
                <rect x="88" y="32" width="8" height="14" rx="4"/>
                <rect x="214" y="32" width="8" height="14" rx="4"/>
                <rect x="347" y="32" width="8" height="14" rx="4"/>
              </g>
              <g fill="none" stroke="#17110F" strokeWidth="3" strokeLinecap="round">
                <path d="M92 46v14c0 9 6 13 14 13"/>
                <path d="M218 46v14c0 9 6 13 14 13"/>
                <path d="M351 46v16c0 9 5 13 12 13"/>
              </g>
    
              {/* media res */}
              <g transform="translate(38,58)">
                <path d="M22 22C42 8 72 8 86 22c12 16 8 50-4 80-10 30-20 60-28 90-4 18-14 30-26 28-14-2-18-28-12-58 6-32 4-64-2-92C10 52 14 32 22 22Z" fill="#8A2B22" stroke="#17110F" strokeWidth="2.8" strokeLinejoin="round"/>
                <g fill="none" stroke="#F6F0E4" strokeWidth="3.4" strokeLinecap="round" opacity=".85">
                  <path d="M32 42c18-6 34-2 42 8"/>
                  <path d="M26 86c18-6 34 0 42 10"/>
                  <path d="M24 132c16-4 28 2 34 10"/>
                </g>
              </g>
              <g transform="translate(164,58)">
                <path d="M22 22C42 8 72 8 86 22c12 16 8 50-4 80-10 30-20 60-28 90-4 18-14 30-26 28-14-2-18-28-12-58 6-32 4-64-2-92C10 52 14 32 22 22Z" fill="#7E241D" stroke="#17110F" strokeWidth="2.8" strokeLinejoin="round"/>
                <g fill="none" stroke="#F6F0E4" strokeWidth="3" strokeLinecap="round" opacity=".7">
                  <path d="M32 42c18-6 34-2 42 8"/>
                  <path d="M26 86c18-6 34 0 42 10"/>
                </g>
              </g>
    
              {/* balanza de gancho */}
              <g fill="none" stroke="#17110F" strokeWidth="2.8">
                <path d="M355 75v21"/>
                <circle cx="355" cy="128" r="32" fill="#F3EDE2"/>
                <circle cx="355" cy="128" r="24" strokeDasharray="3 5" strokeWidth="1.6"/>
                <path d="M355 128l13-14"/>
                <path d="M355 160v14c0 10 6 15 14 15"/>
              </g>
              <circle cx="355" cy="128" r="3.5" fill="#17110F"/>
              <path d="M344 190c15-7 30-1 32 12 2 13-9 25-22 25-11 0-18-9-18-20 0-7 3-13 8-17Z" fill="#8A2B22" stroke="#17110F" strokeWidth="2.4" strokeLinejoin="round"/>
    
              {/* vitrina y base */}
              <rect x="14" y="352" width="372" height="22" rx="5" fill="#17110F"/>
              <rect x="28" y="374" width="344" height="86" fill="#D8CCB6" stroke="#17110F" strokeWidth="2.4"/>
              <g stroke="#17110F" strokeWidth="1.4" opacity=".45" fill="none">
                <path d="M28 374v86M372 374v86M142 374v86M258 374v86"/>
              </g>
              <path d="M60 394h38M60 412h24M274 394h40" stroke="#17110F" strokeWidth="2" opacity=".45" fill="none"/>
    
              {/* tabla de corte */}
              <rect x="146" y="320" width="136" height="32" rx="8" fill="#C9A87C" stroke="#17110F" strokeWidth="2.8"/>
              <path d="M166 331h96M166 342h70" stroke="#17110F" strokeWidth="1.6" opacity=".35" fill="none"/>
    
              {/* cuchilla */}
              <path d="M52 312h64a7 7 0 0 1 7 7v16a7 7 0 0 1-7 7H52z" fill="#C7C2B6" stroke="#17110F" strokeWidth="2.8" strokeLinejoin="round"/>
              <circle cx="67" cy="327" r="3.4" fill="#E8DFCF" stroke="#17110F" strokeWidth="1.6"/>
              <rect x="121" y="315" width="17" height="22" rx="7" fill="#17110F"/>
    
              {/* cuchillo */}
              <path d="M298 318h46c8 0 10 5 5 9l-51 7z" fill="#C7C2B6" stroke="#17110F" strokeWidth="2.2" strokeLinejoin="round"/>
              <rect x="340" y="314" width="30" height="15" rx="7" fill="#17110F"/>
    
              {/* etiquetas */}
              <g fontFamily="JetBrains Mono, monospace" fontSize="10.5" fill="#17110F" letterSpacing="1.4">
                <text x="28" y="446">CÁMARA 2 · 2 °C</text>
                <text x="252" y="446">CORTE · 6:30 A.M.</text>
              </g>
            </svg>
  );
}
