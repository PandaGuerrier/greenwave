import { useState } from "react";
import { Button } from '#ui/components/button'

export default function GreenWaveStepper() {
  const [index, setIndex] = useState(0);

  const steps = [
    {
      id: "presentation",
      title: "1. Présentation générale",
      summary: "Présentation de GreenWave Technologies et du contexte du projet.",
      content: (
        <>
          <p className="mb-3">
            GreenWave Technologies est une PME d’environ 50 employés, spécialisée dans le
            développement de solutions logicielles et de services SaaS. L’entreprise souhaite devenir un
            modèle de Green IT en réduisant l’impact environnemental de ses activités numériques.
          </p>
        </>
      ),
    },
    {
      id: "diagnostic",
      title: "2. Diagnostic environnemental",
      summary: "Analyse de l'infrastructure, du site web, de la méthodologie et de la communication.",
      content: (
        <>
          <h5 className="font-semibold">Infrastructure IT</h5>
          <ul className="list-disc pl-5 mb-3">
            <li>6 serveurs physiques dédiés, 45 % d’utilisation moyenne.</li>
            <li>Consommation annuelle : 6 570 kWh (22 % de la consommation totale).</li>
            <li>Aucune virtualisation et refroidissement peu efficace (~30 % de pertes).</li>
            <li>Cloud (Azure / AWS) : 10 000 kWh/an, 65 % énergie renouvelable non exploitée.</li>
            <li>Parc de 70 postes (âge moyen : 6 ans), consommation 8 400 kWh/an sans recyclage.</li>
          </ul>

          <h5 className="font-semibold">Site web et applicatifs</h5>
          <ul className="list-disc pl-5 mb-3">
            <li>Site WordPress lourd (2,3 Mo, 250 requêtes/page).</li>
            <li>3 g CO₂ par page vue → 1 080 kg CO₂/an pour 360 000 visites.</li>
            <li>Vidéos auto-play et images non compressées.</li>
            <li>Absence d’éco-conception et optimisation inexistante.</li>
          </ul>

          <h5 className="font-semibold">Méthodologie de projets</h5>
          <ul className="list-disc pl-5 mb-3">
            <li>Agile/Scrum sans prise en compte du Green IT.</li>
            <li>Outils internes produisant 350 Mo de données inutiles/projet/mois.</li>
            <li>30 % des fonctionnalités développées jamais déployées.</li>
          </ul>

          <h5 className="font-semibold">Communication</h5>
          <ul className="list-disc pl-5 mb-3">
            <li>70 e-mails/jour/employé, 35 h de visioconférences/semaine.</li>
            <li>Newsletters massives à 5 000 clients (150 kg CO₂/an).</li>
          </ul>

          <h5 className="font-semibold">Sensibilisation</h5>
          <ul className="list-disc pl-5 mb-3">
            <li>40 % des employés favorables à une démarche écoresponsable.</li>
            <li>75 % ignorent l’impact écologique du numérique.</li>
            <li>Aucun plan d’action concret malgré un objectif de -30 % d’émissions d’ici 2025.</li>
          </ul>
        </>
      ),
    },
    {
      id: "synthese",
      title: "3. Synthèse des enjeux",
      summary: "Tableau récapitulatif des principaux problèmes et enjeux Green IT.",
      content: (
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm mb-3 table-auto">
            <caption className="sr-only">Synthèse des enjeux Green IT</caption>
            <thead>
            <tr className="text-left text-xs text-gray-500 uppercase">
              <th className="py-2 pr-4">Domaine</th>
              <th className="py-2 pr-4">Problème identifié</th>
              <th className="py-2">Enjeu principal</th>
            </tr>
            </thead>
            <tbody className="divide-y">
            <tr>
              <td className="py-3">Serveurs internes</td>
              <td className="py-3">Sous-utilisation et refroidissement inefficace</td>
              <td className="py-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                    Réduction de la consommation énergétique
                  </span>
              </td>
            </tr>

            <tr>
              <td className="py-3">Cloud</td>
              <td className="py-3">Énergie partiellement verte, dépendance fournisseur</td>
              <td className="py-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    Migrer vers cloud 100 % renouvelable
                  </span>
              </td>
            </tr>

            <tr>
              <td className="py-3">Parc informatique</td>
              <td className="py-3">Matériel ancien, absence de recyclage</td>
              <td className="py-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                    Renouvellement durable et recyclage
                  </span>
              </td>
            </tr>

            <tr>
              <td className="py-3">Site web</td>
              <td className="py-3">Poids excessif, trop de requêtes, médias non optimisés</td>
              <td className="py-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                    Refonte éco-conçue et optimisation des médias
                  </span>
              </td>
            </tr>

            <tr>
              <td className="py-3">Projets</td>
              <td className="py-3">Production de données et fonctionnalités inutiles</td>
              <td className="py-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
                    Intégrer Green IT dans les sprints
                  </span>
              </td>
            </tr>

            <tr>
              <td className="py-3">Communication</td>
              <td className="py-3">Excès d'e-mails et visioconférences non optimisées</td>
              <td className="py-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
                    Sobriété numérique et bonnes pratiques
                  </span>
              </td>
            </tr>

            <tr>
              <td className="py-3">Culture interne</td>
              <td className="py-3">Sensibilisation insuffisante, objectifs non traduits en actions</td>
              <td className="py-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
                    Formation et engagement des équipes
                  </span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: "conclusion",
      title: "4. Conclusion",
      summary: "Synthèse globale et pistes d'amélioration à retenir.",
      content: (
        <>
          <p>
            L’entreprise dispose d’une base technique solide mais énergivore, et d’une culture interne encore peu
            sensibilisée à l’écologie numérique. Les axes prioritaires concernent la virtualisation, la migration vers
            des infrastructures vertes, la refonte du site web selon les principes d’éco-conception, la réduction de la
            communication numérique et la formation des collaborateurs.
          </p>
        </>
      ),
    },
    {
      id: "ameliorations",
      title: "5. Amélioration",
      summary: "Pistes d'amélioration à retenir.",
      content: (
        <>
          <p>
            Le site actuel n'est plus énergivore et lent. Une refonte complète en adoptant les principes d'éco-conception a été prise.
            Les images sont en webp, les logos en SVG.
            Le coté backend a été optimisé pour réduire les requêtes et le poids des pages.
            Le site est désormais hébergé sur un serveur alimenté à 100% par des énergies renouvelables. (Sur un serveur chez Jules Lofficial)

            <div className={"py-3"}>
              <h1 className={"text-xl font-bold text-primary"}>Les technologies utilisées</h1>
              <ul>
                <li>AdonisJS et InertiaJS (back & front, avec reactjs)</li>
                <li>TypeScript pour une meilleure maintenabilité</li>
                <li>Tailwind CSS pour un design léger et réactif</li>
                <li>Hébergement sur un serveur Maison (Jules Lofficial)</li>
                <li>Base de donnée: PostgreSQL pour la robustesse et intégration simple avec TS.</li>
              </ul>
            </div>

            <span className={"block mt-4 text-sm text-gray-500"}>
                PS (26 octobre): Par causes de coupures d'éléctricités, de coupure de connexion (en bretagne là où je suis, et où est hébergé le site), le site ne peut être hébergé. Désolé pour la gêne occasionnée.
            </span>
          </p>
        </>
      ),
    },
  ];

  const step = steps[index];

  function go(n: any) {
    const next = Math.max(0, Math.min(steps.length - 1, n));
    setIndex(next);
  }

  return (
    <div className="max-w-7xl w-full mx-auto bg-background rounded-lg shadow-md p-6 px-4 sm:px-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">GreenWave — Rapport & Stepper</h2>
          <p className="text-sm text-gray-500">
            Parcours structuré du rapport — cliquez pour naviguer entre les parties
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="text-xs text-gray-400">
            Étape {index + 1} / {steps.length}
          </div>
        </div>
      </div>

      <div
        className="w-full h-2 rounded-full mb-6 bg-gray-200 overflow-hidden"
        style={{ backgroundColor: 'var(--muted, #e6eef2)' }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${((index + 1) / steps.length) * 100}%`,
            backgroundColor: 'var(--primary, #06b6d4)',
          }}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <nav className="w-full md:w-64 flex-shrink-0">
          <ul className="space-y-2">
            {steps.map((s, i) => (
              <li key={s.id}>
                <button
                  onClick={() => go(i)}
                  className={
                    `w-full text-left px-3 py-2 rounded-md flex items-start gap-3 focus:outline-none transition-colors` +
                    ` ${i === index ? 'ring-2 ring-offset-1' : 'hover:bg-gray-50'}`
                  }
                  style={{
                    backgroundColor: i === index ? 'var(--background, #ecfeff)' : 'transparent',
                    border: i === index ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
                  }}
                >
                  <div
                    className={
                      'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold ' +
                      (i === index
                          ? 'bg-primary text-white'
                          : 'bg-gray-200 text-gray-600'
                      )
                    }
                  >
                    {i + 1}
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium truncate">{s.title}</div>
                    <div className="text-xs text-gray-500 truncate">{s.summary}</div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex-1 bg-background p-4 rounded-md min-h-[160px]">
          <header className="mb-4">
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-sm text-gray-500">{step.summary}</p>
          </header>

          <section
            className="prose max-w-none text-sm"
            style={{ color: 'var(--foreground, rgb(17,24,39))' }}
          >
            {step.content}
          </section>

          <footer className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                onClick={() => go(index - 1)}
                disabled={index === 0}
                className="px-3 py-1.5 rounded-md text-sm"
                variant={'ghost'}
              >
                Précédent
              </Button>

              <Button
                onClick={() => go(index + 1)}
                disabled={index === steps.length - 1}
                className="px-3 py-1.5 rounded-md text-sm"
              >
                Suivant
              </Button>
            </div>

            <div className="text-xs text-gray-400">
              Cliquez sur une étape pour y accéder directement
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
