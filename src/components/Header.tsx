import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-icon">CL</span>
          <span>
            <strong>Crèche Lumière</strong>
            <small>Maison d’éveil & petite enfance</small>
          </span>
        </Link>

        <nav className="nav">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/programme">Programme</NavLink>
          <NavLink to="/inscription">Inscription</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {/* Défaut volontaire : lien vide / pas utile */}
          <a href="#"></a>
        </nav>

        {/* Défaut volontaire : CTA peu explicite */}
        <Link to="/inscription" className="header-cta">
          Commencer
        </Link>
      </div>
    </header>
  );
}
