import { Link } from "react-router-dom";
import photo from "../assets/hero-shape.svg";
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">Places ouvertes pour septembre</span>
            {/* Image décorative volontaire : alt vide correct, ce n'est pas une erreur */}
            <img
              src={photo}
              alt=""
              aria-hidden="true"
              className="decorative-shape"
            />
            {/* Défaut volontaire : premier H1 */}
            <h1>Une crèche douce pour grandir à son rythme</h1>

            <p className="lead">
              Crèche Lumière accueille les tout-petits dans un environnement
              calme, sécurisé et chaleureux, avec une équipe attentive au rythme
              de chaque enfant.
            </p>

            <div className="hero-actions">
              <Link to="/inscription" className="btn-primary">
                Demander une place
              </Link>

              {/* Défaut volontaire : texte CTA pas très descriptif */}
              <Link to="/programme" className="btn-secondary">
                Voir
              </Link>
            </div>

            <div className="stats">
              <div className="stat">
                <strong>24</strong>
                <span>enfants accueillis</span>
              </div>
              <div className="stat">
                <strong>8</strong>
                <span>professionnelles</span>
              </div>
              <div className="stat">
                <strong>4.8/5</strong>
                <span>avis familles</span>
              </div>
            </div>
          </div>

          <div className="hero-image-card">
            {/* Défaut volontaire : image sans alt */}
            <img src="https://quellecreche.fr/wp-content/uploads/2026/02/8-bonnes-raisons-de-mettre-son-enfant-dans-une-creche.jpg" />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            {/* Défaut volontaire : deuxième H1 sur la même page */}
            <h1 className="page-title">Un quotidien pensé pour les enfants</h1>
            <p className="lead">
              Chaque journée alterne jeux libres, activités d’éveil, repas
              équilibrés, siestes respectées et temps calmes.
            </p>
          </div>

          <div className="cards">
            <article className="card">
              {/* Défaut volontaire : image sans alt */}
              <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop" />
              <h3>Éveil sensoriel</h3>
              <p>
                Des ateliers adaptés à l’âge des enfants pour explorer les
                matières, les sons, les couleurs et les premiers gestes.
              </p>
            </article>

            <article className="card">
              <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1200&auto=format&fit=crop" />
              <h3>Motricité libre</h3>
              <p>
                Un espace aménagé pour bouger, grimper, tomber, recommencer et
                gagner en confiance sans pression.
              </p>
            </article>

            <article className="card">
              <img src="https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1200&auto=format&fit=crop" />
              <h3>Repas maison</h3>
              <p>
                Des menus simples, variés et adaptés aux besoins des enfants,
                avec une attention portée aux allergies.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-columns">
          <div className="panel">
            <h2>Pourquoi les familles nous choisissent</h2>
            <ul className="list">
              <li>Accueil progressif sur plusieurs jours.</li>
              <li>Transmission quotidienne avec l’équipe.</li>
              <li>Petits groupes pour plus d’attention.</li>
              <li>Espaces lumineux et sécurisés.</li>
            </ul>
          </div>

          <div className="quote">
            <p>
              “Un lieu rassurant où notre fille arrive le matin avec le
              sourire.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
