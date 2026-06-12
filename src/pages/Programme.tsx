export default function Programme() {
  return (
    <main>
      <section className="section">
        <div className="container">
          {/* Défaut volontaire : H1 normal */}
          <h1 className="page-title">Notre programme pédagogique</h1>
          <p className="lead">
            Le projet de Crèche Lumière repose sur l’écoute, la sécurité
            affective et la découverte progressive du monde.
          </p>

          <div className="cards" style={{ marginTop: 36 }}>
            <article className="card">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop" />
              <h3>Le matin</h3>
              <p>
                Accueil individualisé, jeux libres et temps de transition doux
                pour respecter le rythme de chaque enfant.
              </p>
            </article>

            <article className="card">
              <img src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1200&auto=format&fit=crop" />
              <h3>Les activités</h3>
              <p>
                Peinture, transvasement, lecture, musique, motricité, jardinage
                et jeux d’imitation.
              </p>
            </article>

            <article className="card">
              <img src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=1200&auto=format&fit=crop" />
              <h3>Le repos</h3>
              <p>
                Les siestes sont proposées selon les besoins, sans réveil forcé,
                dans un espace calme.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container two-columns">
          <div>
            {/* Défaut volontaire : deuxième H1 sur la page */}
            <h1 className="page-title">Une pédagogie simple et humaine</h1>
            <p className="lead">
              Nous privilégions l’autonomie, l’observation et la parole posée
              plutôt que les activités trop scolaires.
            </p>
          </div>

          <div className="panel">
            <h2>Objectifs</h2>
            <ul className="list">
              <li>Favoriser la confiance en soi.</li>
              <li>Encourager l’exploration libre.</li>
              <li>Accompagner les émotions.</li>
              <li>Créer un lien régulier avec les parents.</li>
            </ul>

            {/* Défaut volontaire : lien peu descriptif */}
            <a href="#" className="btn-secondary">
              En savoir plus
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
