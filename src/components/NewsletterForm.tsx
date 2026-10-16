'use client';

import { useState, type FormEvent } from 'react';
import { IconArrow } from './icons';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [invalid, setInvalid] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
    setInvalid(!ok);
    setMessage(ok ? 'Listo. Le llega el jueves.' : 'Revise el correo, no parece válido.');
    if (ok) setEmail('');
  };

  return (
    <>
      <form className={`news${invalid ? ' is-bad' : ''}`} onSubmit={onSubmit} noValidate>
        <label className="sr-only" htmlFor="newsEmail">
          Tu email
        </label>
        <input
          id="newsEmail"
          name="email"
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button type="submit" aria-label="Suscribirme">
          <IconArrow />
        </button>
      </form>
      <p className="news__msg mono" role="status">
        {message}
      </p>
    </>
  );
}
