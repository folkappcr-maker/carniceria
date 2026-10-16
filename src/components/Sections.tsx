import { NOTES, PROCESS } from '@/data/site';

export function Process() {
  return (
    <section className="section process" id="proceso">
      <div className="wrap">
        <header className="sec-head">
          <p className="kicker mono">04 — Cómo trabajamos</p>
          <div className="sec-head__row">
            <h2 className="sec-title">
              De la media res <em>a tu mesa</em>.
            </h2>
            <p className="sec-lede">
              Cuatro pasos, ninguno salteado. Todo pasa en el mismo local donde atendemos.
            </p>
          </div>
        </header>

        <ol className="steps">
          {PROCESS.map((step, index) => (
            <li key={step.n} className="reveal" data-delay={index || undefined}>
              <span className="mono steps__n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <span className="mono steps__tag">{step.tag}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Notes() {
  return (
    <section className="section notes" id="notas">
      <div className="wrap">
        <header className="sec-head">
          <p className="kicker mono">05 — Consejos del carnicero</p>
          <div className="sec-head__row">
            <h2 className="sec-title">
              Tres cosas que <em>casi todos</em> hacen mal.
            </h2>
            <p className="sec-lede">
              Nos las preguntan todos los domingos. Las dejamos escritas para que no se le pase el punto.
            </p>
          </div>
        </header>

        <div className="notes__grid">
          {NOTES.map((note, index) => (
            <article key={note.n} className="note reveal" data-delay={index || undefined}>
              <span className="note__n mono">{note.n}</span>
              <h3>{note.title}</h3>
              <p>{note.text}</p>
              <p className="note__fix mono">{note.fix}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
