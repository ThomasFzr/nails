import { Title } from "~/components/title";

export default function PricePage() {
    return (
        <div className="w-full p-8 mt-16 flex flex-col justify-center">

            {Title({ name: "MES PRIX", imageSrc: "/images/price.jpg", imageAlt: "prix" })}

            <div className="flex flex-row justify-around pt-12 pb-12">
                <div className="flex flex-col">
                    <h2 className="text-3xl">Ongles Naturels</h2>
                    <br />
                    <div className="flex justify-between w-64">
                        <span>Manucure combinée</span> <span className="font-semibold">15€</span>
                    </div>
                    <div className="flex justify-between w-64">
                        <span>Semi-permanent couleur unie</span> <span className="font-semibold">15€</span>
                    </div>
                    <div className="flex justify-between w-64">
                        <span>Nail art (bijoux, cat eye, chrome, etc.)</span> <span className="font-semibold">20€</span>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h2 className="text-3xl">Capsules Gel X</h2>
                    <br />
                    <div className="flex justify-between w-64">
                        <span>Semi-permanent couleur unie</span> <span className="font-semibold">30€</span>
                    </div>
                    <div className="flex justify-between w-64">
                        <span>Nail art (bijoux, 3D, cat eye, etc.)</span> <span className="font-semibold whitespace-nowrap">35€ - 45€</span>
                    </div>
                    <br />
                    <span className="italic">* Peu importe la longueur de la capsule</span>
                </div>

                <div className="flex flex-col">
                    <h2 className="text-3xl">Dépose</h2>
                    <br />
                    <div className="flex justify-between w-64">
                        <span>Dépose seule (mon travail)</span> <span className="font-semibold">5€</span>
                    </div>
                    <div className="flex justify-between w-64">
                        <span>Dépose seule (autre travail)</span> <span className="font-semibold">10€</span>
                    </div>
                    <div className="flex justify-between w-64">
                        <span>Dépose + nouvelle pose</span> <span className="font-semibold">5€</span>
                    </div>
                    <br />
                    <span className="italic">* Uniquement pour le semi-permanent ou Gel X</span>
                    <span className="italic">* Toute dépose inclut une manucure combinée</span>
                </div>
            </div>


            <div className="flex flex-row items-center justify-around pt-24">
                <div className="flex flex-row items-center justify-around">
                    <img className="w-20" src="/images/price.jpg" alt="dispo" />
                    Espèces
                </div>
                <img src="/images/paymentTypes/lydia.png" alt="lydia" className="w-20" />
                <img src="/images/paymentTypes/paypal.png" alt="paypal" className="w-20" />
                <img src="/images/paymentTypes/paylib.png" alt="paylib" className="w-20" />
                <div className="flex flex-row items-center justify-around">
                    <img className="w-20" src="/images/price.jpg" alt="dispo" />
                    Virement instantané
                </div>
            </div>

        </div>
    );
}