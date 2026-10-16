import { REVIEWS } from '@/data/site';

export function Reviews() {
  return (
    <section className="section reviews">
      <div className="wrap">
        <header className="sec-head sec-head--tight">
          <p className="kicker mono">06 — Lo que dice la clientela</p>
          <h2 className="sec-title">
            Clientela que ya sabe <em>qué pedir</em>.
          </h2>
        </header>

        <div className="reviews__grid">
          {REVIEWS.map((review, index) => (
            <figure key={review.author} className="review reveal" data-delay={index || undefined}>
              <div className="review__stars" aria-label="5 de 5">
                ★★★★★
              </div>
              <blockquote>
                <p>{review.text}</p>
              </blockquote>
              <figcaption>
                <b>{review.author}</b>
                <span className="mono">{review.meta}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
