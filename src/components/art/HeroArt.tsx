export function HeroArt() {
  return (
    <svg className="specimen__art" viewBox="0 0 200 150" role="img" aria-label="Ilustración de un lomo de res con su capa de grasa y vetas de marmoleo">
                <ellipse className="specimen__shadow" cx="100" cy="126" rx="62" ry="9"/>
                <use href="#art-ribeye"/>
              </svg>
  );
}
