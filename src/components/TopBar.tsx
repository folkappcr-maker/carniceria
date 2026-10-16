import { Fragment } from 'react';
import { TOPBAR } from '@/data/site';

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <span className="topbar__group" aria-hidden={hidden || undefined}>
      {TOPBAR.map((item) => (
        <Fragment key={item.text}>
          {item.strong ? <b>{item.text}</b> : <span>{item.text}</span>}
          <i>✦</i>
        </Fragment>
      ))}
    </span>
  );
}

export function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
