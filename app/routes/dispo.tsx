import Calendar from "~/components/calendar";
import { DISPO_TYPES } from "~/types/dispoTypes";
import { Title } from "~/components/title";

const dispos = [
    { date: 17, name: DISPO_TYPES["21"] },
    { date: 18, name: DISPO_TYPES["1821"] },
    { date: 19, name: DISPO_TYPES["1821"] },
    { date: 20, name: DISPO_TYPES["1821"] },
    { date: 21, name: DISPO_TYPES["1821"] },
    { date: 24, name: DISPO_TYPES["21"] },
    { date: 25, name: DISPO_TYPES["full"] },
    { date: 26, name: DISPO_TYPES["21"] },
    { date: 27, name: DISPO_TYPES["21"] },
    { date: 28, name: DISPO_TYPES["21"] },
    { date: 29, name: DISPO_TYPES["21"] },
    { date: 30, name: DISPO_TYPES["full"] },
    { date: 31, name: DISPO_TYPES["full"] },
];

export default function DispoPage() {
    return (
        <div className="w-full p-8 mt-16 flex flex-col justify-center">
            {Title({ name: "DISPOS", imageSrc: "/images/dispo.jpg", imageAlt: "dispo" })}
            <Calendar events={dispos} />

            <span className="w-full flex flex-col items-center text-3xl p-16">POUR PRENDRE RDV</span>
            <div className="flex flex-col items-center">
                <div className="flex flex-row items-center justify-around">
                    <span className="pr-4">EN DM INSTA</span>
                    <a href="https://www.instagram.com/lesgriffesduz/" target="_blank" rel="noopener noreferrer">
                        <img className="w-8 hover:scale-110" src="/images/insta.png" alt="Instagram" />
                    </a>
                </div>
                <span>
                    TES INSPIS (ONGLES, IMAGES, DESSINS, PHOTOS BIJOUX, IDÉES...) 💅🏼
                </span>
                <span>
                    SI TU COMPTES VENIR SEUL.E OU ACCOMPAGNÉ.E 🐆🐆
                </span>
                <span>
                    LA DATE ET L'HEURE À LAQUELLE TU SOUHAITES ÊTRE
                    PIMPÉ.E ⏱️
                </span>
                <span>
                    UNE PHOTO DE TES ONGLES NATURELS OU DE TA POSE
                    ACTUELLE EST APPRÉCIÉE MAIS PAS OBLIGATOIRE 📷
                </span>

            </div>

            <div className="flex flex-col items-center pt-4 pb-20">
                <span>            JE TE RÉPONDRAI
                </span>
                <span>
                    SI JE SUIS CAPABLE OU NON DE LE FAIRE (TOUT PROJET
                    DEMANDE DU MATÉRIEL ET DES COMPÉTENCES)                </span>
                <span>
                    COMBIEN DE TEMPS DURERA LA PRESTATION
                </span>
                <span>
                    LE PRIX DU PROJET
                </span>
            </div>


        </div>
    );
}
