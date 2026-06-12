export default function Inscription() {
  return (
    <main className="section">
      <div className="container two-columns">
        <div>
          <h1 className="page-title">Pré-inscription</h1>
          <p className="lead">
            Remplissez ce formulaire pour être recontacté par notre équipe.
            Nous vous proposerons ensuite un rendez-vous de découverte.
          </p>

          <div className="notice" style={{ marginTop: 24 }}>
            {/* Défaut volontaire : contraste faible */}
            <p className="bad-contrast-text">
              Les places sont limitées. Une demande ne garantit pas une place
              immédiate dans la crèche.
            </p>
          </div>
        </div>

        <form
          className="panel form"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Demande envoyée");
          }}
        >
          {/* Défauts volontaires : plusieurs champs sans label */}
          <input className="field" placeholder="Nom du parent" />
          <input className="field" placeholder="Email" type="email" />
          <input className="field" placeholder="Téléphone" type="tel" />
          <input className="field" placeholder="Prénom de l’enfant" />
          <input className="field" placeholder="Date de naissance" type="date" />

          <select className="field">
            <option>Type d’accueil souhaité</option>
            <option>Temps plein</option>
            <option>Temps partiel</option>
            <option>Occasionnel</option>
          </select>

          <textarea
            className="field"
            placeholder="Votre message"
            rows={5}
          />

          <div>
            <input type="checkbox" />
            <span className="form-note">
              J’accepte d’être recontacté par la crèche.
            </span>
          </div>

          {/* Défaut volontaire : bouton submit avec texte très générique */}
          <button className="btn-primary" type="submit">
            Valider
          </button>
        </form>
      </div>
    </main>
  );
}
