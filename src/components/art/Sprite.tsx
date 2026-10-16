/* Ilustraciones SVG de la casa: cada corte tiene su propio dibujo, en duotono. */
export function Sprite() {
  return (
    <svg className="sprite" aria-hidden="true" focusable="false">
    
      {/* Lomo */}
      <symbol id="art-ribeye" viewBox="0 0 200 150">
        <path d="M28 88C22 60 50 32 100 29c48-3 82 16 84 42 2 28-30 50-78 52-44 2-74-12-78-35Z" fill="#8A2B22" stroke="#17110F" strokeWidth="2.6" strokeLinejoin="round"/>
        <path d="M29 76C31 50 58 31 100 29c34-1 62 9 74 27" fill="none" stroke="#F6F0E4" strokeWidth="14" strokeLinecap="round"/>
        <path d="M29 76C31 50 58 31 100 29c34-1 62 9 74 27" fill="none" stroke="#17110F" strokeWidth="1.2" opacity=".35"/>
        <path d="M58 104c6-26 30-42 62-42 20 0 38 8 48 20" fill="none" stroke="#F6F0E4" strokeWidth="3.4" opacity=".75"/>
        <g fill="none" stroke="#F6F0E4" strokeWidth="2.3" strokeLinecap="round" opacity=".9">
          <path d="M64 86c10-7 22-9 34-7s22 8 32 6"/>
          <path d="M70 100c12 4 24 2 34-3s20-7 28-3"/>
          <path d="M78 70c8-5 18-5 26-1"/>
          <path d="M60 108c12 6 26 6 38 1"/>
          <path d="M96 46c6 12 18 20 32 24"/>
        </g>
      </symbol>
    
      {/* Posta */}
      <symbol id="art-striploin" viewBox="0 0 200 150">
        <path d="M24 74c8-24 30-38 64-40 30-2 58 6 76 22 4 4 4 10 0 14-20 20-48 32-84 34-30 2-54-8-60-22-1-3 0-6 4-8Z" fill="#8A2B22" stroke="#17110F" strokeWidth="2.6" strokeLinejoin="round"/>
        <path d="M164 56c4 4 4 10 0 14-20 20-48 32-84 34" fill="none" stroke="#F6F0E4" strokeWidth="12" strokeLinecap="round"/>
        <path d="M164 56c4 4 4 10 0 14-20 20-48 32-84 34" fill="none" stroke="#17110F" strokeWidth="1.2" opacity=".35"/>
        <g fill="none" stroke="#F6F0E4" strokeWidth="2.4" strokeLinecap="round" opacity=".9">
          <path d="M48 62c18 2 34-6 52 0s30 0 44 6"/>
          <path d="M46 84c20 2 36 8 56 4s32-2 42-8"/>
          <path d="M40 96c22 4 40 2 60-4"/>
        </g>
      </symbol>
    
      {/* Costilla de res */}
      <symbol id="art-ribs" viewBox="0 0 200 150">
        <path d="M18 46h164c6 0 10 5 9 11l-8 44c-1 6-6 10-12 10H24c-6 0-10-6-9-12l5-43c1-6 5-10 11-10Z" fill="#8A2B22" stroke="#17110F" strokeWidth="2.6" strokeLinejoin="round"/>
        <g fill="#F6F0E4" stroke="#17110F" strokeWidth="1.8">
          <rect x="34" y="62" width="26" height="40" rx="13"/>
          <rect x="84" y="62" width="26" height="40" rx="13"/>
          <rect x="134" y="62" width="26" height="40" rx="13"/>
        </g>
        <g fill="none" stroke="#F6F0E4" strokeWidth="2.4" strokeLinecap="round" opacity=".9">
          <path d="M24 54h152M26 106h150"/>
        </g>
      </symbol>
    
      {/* Bistec de res */}
      <symbol id="art-flank" viewBox="0 0 200 150">
        <path d="M22 84c26-22 60-36 100-40 22-2 42 2 58 10 4 2 5 8 2 11-24 26-58 42-102 44-24 1-46-4-62-14-3-2-2-8 4-11Z" fill="#8A2B22" stroke="#17110F" strokeWidth="2.6" strokeLinejoin="round"/>
        <path d="M22 84c26-22 60-36 100-40 22-2 42 2 58 10" fill="none" stroke="#F6F0E4" strokeWidth="11" strokeLinecap="round"/>
        <path d="M22 84c26-22 60-36 100-40 22-2 42 2 58 10" fill="none" stroke="#17110F" strokeWidth="1.4" opacity=".45"/>
        <g fill="none" stroke="#F6F0E4" strokeWidth="2.2" strokeLinecap="round" opacity=".85">
          <path d="M40 92c26-12 54-16 84-14s54 4 68 10"/>
          <path d="M44 104c26-10 52-12 80-10s50 4 62 8"/>
          <path d="M52 116c24-8 46-8 70-6"/>
        </g>
      </symbol>
    
      {/* Lomito */}
      <symbol id="art-tenderloin" viewBox="0 0 200 150">
        <path d="M24 96c22-30 48-50 82-58 26-6 50-2 66 10 4 3 4 9 0 12-20 16-40 30-62 42-24 12-52 16-80 10-6-1-9-10-6-16Z" fill="#8A2B22" stroke="#17110F" strokeWidth="2.6" strokeLinejoin="round"/>
        <path d="M24 96c22-30 48-50 82-58 26-6 50-2 66 10" fill="none" stroke="#F6F0E4" strokeWidth="8" strokeLinecap="round"/>
        <path d="M24 96c22-30 48-50 82-58 26-6 50-2 66 10" fill="none" stroke="#17110F" strokeWidth="1.4" opacity=".45"/>
        <path d="M40 90c24-22 48-36 78-42" fill="none" stroke="#F6F0E4" strokeWidth="2.2" opacity=".8"/>
        <path d="M56 100c20-16 40-26 62-30" fill="none" stroke="#F6F0E4" strokeWidth="2.2" opacity=".8"/>
      </symbol>
    
    
      {/* Chorizo criollo */}
      <symbol id="art-chorizo" viewBox="0 0 200 150">
        <g transform="rotate(-20 100 76)">
          <rect x="26" y="52" width="76" height="46" rx="23" fill="#9E3B2B" stroke="#17110F" strokeWidth="2.6"/>
          <rect x="104" y="52" width="76" height="46" rx="23" fill="#8A2B22" stroke="#17110F" strokeWidth="2.6"/>
          <g fill="none" stroke="#17110F" strokeWidth="2.2" opacity=".75">
            <path d="M98 54c-5 12-5 30 0 42M110 54c5 12 5 30 0 42"/>
          </g>
          <g fill="none" stroke="#17110F" strokeWidth="2.4" strokeLinecap="round">
            <path d="M26 75c-8 1-14-2-17-8M180 75c8 1 14-2 17-8"/>
          </g>
          <g fill="#F6F0E4" opacity=".8">
            <circle cx="52" cy="70" r="2.6"/><circle cx="70" cy="86" r="2.2"/><circle cx="62" cy="62" r="1.8"/>
            <circle cx="132" cy="72" r="2.6"/><circle cx="150" cy="86" r="2.2"/><circle cx="142" cy="62" r="1.8"/>
          </g>
        </g>
      </symbol>
    
      {/* Morcilla */}
    
      {/* Carne empanizada */}
      <symbol id="art-empanizada" viewBox="0 0 200 150">
        <path d="M24 86c2-20 20-36 48-40 30-4 60 4 78 20 9 8 10 20 2 28-16 16-48 24-80 20-28-3-42-13-48-28Z" fill="#C08A3E" stroke="#17110F" strokeWidth="2.6" strokeLinejoin="round"/>
        <path d="M24 86c2-20 20-36 48-40 30-4 60 4 78 20" fill="none" stroke="#EFD9A8" strokeWidth="9" strokeLinecap="round"/>
        <path d="M168 88c4 6 3 12-4 16-14 8-40 12-64 9" fill="none" stroke="#17110F" strokeWidth="1.4" opacity=".3"/>
        <g fill="#8A5A22" opacity=".7">
          <circle cx="50" cy="76" r="2.6"/><circle cx="64" cy="96" r="2.8"/><circle cx="82" cy="70" r="2.4"/><circle cx="96" cy="100" r="2.8"/>
          <circle cx="112" cy="72" r="2.6"/><circle cx="128" cy="94" r="2.4"/><circle cx="142" cy="78" r="2.8"/><circle cx="74" cy="108" r="2.4"/>
          <circle cx="118" cy="108" r="2.6"/><circle cx="150" cy="96" r="2.2"/><circle cx="40" cy="92" r="2.2"/><circle cx="100" cy="56" r="2.4"/>
          <circle cx="132" cy="60" r="2"/><circle cx="86" cy="88" r="2.2"/><circle cx="58" cy="108" r="2"/>
        </g>
      </symbol>
    
      {/* Pollo entero */}
      <symbol id="art-chicken" viewBox="0 0 200 150">
        <path d="M46 62c-16-6-30 2-31 14-1 9 5 15 14 15" fill="#D9A97E" stroke="#17110F" strokeWidth="2.4" strokeLinejoin="round"/>
        <path d="M44 80c0-24 24-44 54-44 34 0 56 16 56 38 0 25-26 44-58 44-30 0-52-16-52-38Z" fill="#D9A97E" stroke="#17110F" strokeWidth="2.6" strokeLinejoin="round"/>
        <path d="M150 48c14-12 28-16 36-7 6 7 2 17-8 22-9 5-20 4-25-3" fill="#C08A5E" stroke="#17110F" strokeWidth="2.4" strokeLinejoin="round"/>
        <ellipse cx="178" cy="44" rx="9" ry="7" fill="#E8B98A" stroke="#17110F" strokeWidth="2"/>
        <path d="M68 84c9-13 23-19 35-16 10 2 14 11 9 19-7 12-21 18-33 15" fill="#C08A5E" stroke="#17110F" strokeWidth="2.2" strokeLinejoin="round"/>
        <path d="M60 106c-5 13-2 25 7 28 9 3 18-4 21-16" fill="#C08A5E" stroke="#17110F" strokeWidth="2.4" strokeLinejoin="round"/>
        <path d="M92 116c0 13 7 21 15 21 9 0 15-8 15-19" fill="#C08A5E" stroke="#17110F" strokeWidth="2.4" strokeLinejoin="round"/>
        <path d="M58 96c16 9 36 11 54 6" fill="none" stroke="#17110F" strokeWidth="1.5" opacity=".3"/>
      </symbol>
    
    
    
      {/* Media res colgada (para la escena del oficio) */}
      
      <symbol id="art-rabo" viewBox="0 0 200 150">
        <g stroke="#17110F" strokeWidth={2.6} strokeLinejoin="round">
          <g transform="rotate(-8 148 76)">
            <ellipse cx="148" cy="76" rx="30" ry="27" fill="#7E241D" />
            <ellipse cx="148" cy="76" rx="12" ry="10" fill="#F6F0E4" />
            <ellipse cx="148" cy="76" rx="5" ry="4" fill="#C9B79A" strokeWidth={1.6} />
          </g>
          <g transform="rotate(-5 52 82)">
            <ellipse cx="52" cy="82" rx="31" ry="28" fill="#8A2B22" />
            <ellipse cx="52" cy="82" rx="13" ry="11" fill="#F6F0E4" />
            <ellipse cx="52" cy="82" rx="5.5" ry="4.5" fill="#C9B79A" strokeWidth={1.6} />
          </g>
          <g transform="rotate(4 100 78)">
            <ellipse cx="100" cy="78" rx="31" ry="27" fill="#8A2B22" />
            <ellipse cx="100" cy="78" rx="12.5" ry="10.5" fill="#F6F0E4" />
            <ellipse cx="100" cy="78" rx="5" ry="4" fill="#C9B79A" strokeWidth={1.6} />
          </g>
        </g>
        <g fill="none" stroke="#F6F0E4" strokeWidth={2.2} opacity=".65" strokeLinecap="round">
          <path d="M34 94c8 7 20 10 30 8M82 90c8 7 20 10 30 8M130 90c8 7 18 9 28 7" />
        </g>
      </symbol>
      <symbol id="art-chuleta" viewBox="0 0 200 150">
        {/* hueso asomando por detrás del corte */}
        <path d="M116 88c16 6 30 16 40 26" fill="none" stroke="#17110F" strokeWidth={16} strokeLinecap="round" />
        <path d="M116 88c16 6 30 16 40 26" fill="none" stroke="#F6F0E4" strokeWidth={11} strokeLinecap="round" />
        <circle cx="160" cy="118" r="9" fill="#F6F0E4" stroke="#17110F" strokeWidth={2.2} />
        {/* carne */}
        <path d="M26 80c0-22 23-40 55-42 34-2 61 14 65 34 4 22-19 40-53 42-36 2-67-12-67-34Z" fill="#C4817A" stroke="#17110F" strokeWidth={2.6} strokeLinejoin="round" />
        <path d="M31 62c9-16 29-26 53-26 26 0 48 10 58 26" fill="none" stroke="#F6F0E4" strokeWidth={10} strokeLinecap="round" />
        <path d="M31 62c9-16 29-26 53-26 26 0 48 10 58 26" fill="none" stroke="#17110F" strokeWidth={1.2} opacity=".28" />
        <g fill="none" stroke="#F6F0E4" strokeWidth={2.2} strokeLinecap="round" opacity=".8">
          <path d="M62 78c10-6 24-8 36-6s24 6 32 4" />
          <path d="M66 92c12 4 24 2 34-2" />
        </g>
      </symbol>
      <symbol id="art-chicharron" viewBox="0 0 200 150">
        <rect x="22" y="34" width="156" height="82" rx="10" fill="#C4817A" stroke="#17110F" strokeWidth={2.6} />
        <path d="M22 44a10 10 0 0 1 10-10h136a10 10 0 0 1 10 10v14H22z" fill="#D9A05B" stroke="#17110F" strokeWidth={2.4} strokeLinejoin="round" />
        <rect x="22" y="58" width="156" height="14" fill="#F6F0E4" stroke="#17110F" strokeWidth={1.8} />
        <g fill="#8A5A22" opacity=".5">
          <circle cx="46" cy="46" r="2.4" /><circle cx="72" cy="42" r="2" /><circle cx="104" cy="47" r="2.6" />
          <circle cx="134" cy="42" r="2.2" /><circle cx="160" cy="47" r="2.4" />
        </g>
        <g fill="none" stroke="#F6F0E4" strokeWidth={2} strokeLinecap="round" opacity=".7">
          <path d="M36 90c14 4 30 4 44 0M96 96c14 4 30 4 44 0" />
        </g>
        <circle cx="100" cy="18" r="6" fill="none" stroke="#17110F" strokeWidth={2.4} />
      </symbol>
      <symbol id="art-higado" viewBox="0 0 200 150">
        <path d="M30 94c-6-25 13-48 44-56 31-8 64-2 80 15 10 11 9 27-3 39-16 16-45 26-73 26-25 0-44-11-48-24Z" fill="#6E2A22" stroke="#17110F" strokeWidth={2.6} strokeLinejoin="round" />
        <path d="M40 86c5-21 23-39 49-45 23-5 45-2 59 9" fill="none" stroke="#F6F0E4" strokeWidth={2.6} strokeLinecap="round" opacity=".28" />
        <path d="M98 46c-5 19-3 39 5 58" fill="none" stroke="#4A1A15" strokeWidth={2.2} opacity=".65" />
        <path d="M58 108c14 6 30 8 45 6" fill="none" stroke="#F6F0E4" strokeWidth={2} strokeLinecap="round" opacity=".2" />
        <ellipse cx="68" cy="70" rx="11" ry="6" fill="#F6F0E4" opacity=".12" transform="rotate(-18 68 70)" />
      </symbol>
    </svg>
  );
}
