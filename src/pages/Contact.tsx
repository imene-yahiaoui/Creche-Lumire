export default function Contact() {
  return (
    <main>
      <section className="section">
        <div className="container two-columns">
          <div>
            <h1 className="page-title">Nous contacter</h1>
            <p className="lead">
              Notre équipe vous répond du lundi au vendredi, de 8h à 18h30.
            </p>

            <div className="panel" style={{ marginTop: 28 }}>
              <h2>Crèche Lumière</h2>
              <p>12 rue des Jardins</p>
              <p>95000 Pontoise</p>
              <p>01 00 00 00 00</p>
              <p>bonjour@creche-lumiere.fr</p>

              {/* Défaut volontaire : lien # */}
              <a href="#" className="btn-secondary">
                Voir l’itinéraire
              </a>
            </div>
          </div>

          <div className="hero-image-card">
            {/* Défaut volontaire : image sans alt */}
            <img src="https://images.unsplash.com/photo-1526634332515-d56c5fd16991?q=80&w=1400&auto=format&fit=crop" />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          {/* Défaut volontaire : deuxième H1 */}
          <h1 className="page-title">Une visite est possible sur rendez-vous</h1>
          <p className="lead">
            Nous invitons les familles à venir découvrir les espaces, rencontrer
            l’équipe et poser toutes leurs questions.
          </p>
        </div>
      </section>
    </main>
  );
}
