import { Title } from "~/components/title";

export default function InfoPage() {
    return (
        <div className="w-full p-8 mt-16 flex flex-col justify-center">

            {Title({ name: "INFORMATIONS", imageSrc: "/images/logo5.jpg", imageAlt: "info" })}

            <div className="flex flex-col items-center">


                <div className="flex flex-col md:flex-row justify-around p-12">

                    <div className="flex flex-col md:pr-48 pb-12">
                        <h2 className="text-3xl">C'EST OK ✔</h2>
                        <br />
                        <span>
                            QUE TU RAMÈNES TES PROPRES CHARMS, BIJOUX OU <br />
                            BRELOQUES QUE TU SOUHAITES POSER SUR TES ONGLES
                        </span>
                        <span>
                            QUE TU VIENNES ACCOMPAGNÉ.E
                        </span>
                        <span>
                            QUE TU UTILISES TON TÉLÉPHONE PENDANT LA
                            PRESTATION
                        </span>
                        <span>
                            QUE TU RAMÈNES UNE BOISSON
                        </span>

                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-3xl">C'EST PAS OK ❌</h2>
                        <br />
                        <span>
                            SI TU ES MINEUR.E.S
                        </span>
                        <span>
                            LE MANQUE DE RESPECT
                        </span>
                    </div>
                </div>


                <div className="flex flex-col justify-center items-center pt-8 pb-20">
                    <span>
                        ON PEUT PARLER FRANÇAIS, ANGLAIS OU ESPAGNOL
                    </span> <br />
                    <span>J'AI UN CHAT 🐈</span><br />
                    <span>TOUT MON MATÉRIEL EST DÉSINFECTÉ
                        ET STÉRILISÉ APRÈS CHAQUE
                        UTILISATION </span><br />
                    <span>SAFE PLACE</span>
                </div>
            </div>
        </div>
    );
}