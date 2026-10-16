import { TICKER } from '@/data/site';

export function Ticker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`}>
            {item}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
