import { Title } from "~/components/title";

export default function PricePage() {
    return (
        <div className="w-full p-8 mt-16 flex flex-col justify-center">

            {Title({ name: "PRIX", imageSrc: "/images/price.jpg", imageAlt: "prix" })}

            <div className="flex flex-col md:items-start md:flex-row justify-around items-center pt-12 pb-12">
                <div className="flex flex-col w-80 p-4">
                    <h2 className="text-3xl underline">Ongles Naturels</h2>
                    <br />
                    <div className="flex justify-between">
                        <span>Manucure combinée</span> <span className="font-semibold">15€</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Semi-permanent couleur unie</span> <span className="font-semibold">15€</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Nail art (bijoux, cat eye, chrome, etc.)</span> <span className="font-semibold">20€</span>
                    </div>
                </div>

                <div className="flex flex-col w-80 p-4 ">
                    <h2 className="text-3xl underline">Capsules Gel X</h2>
                    <br />
                    <div className="flex justify-between">
                        <span>Semi-permanent couleur unie</span> <span className="font-semibold">30€</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Nail art (bijoux, 3D, cat eye, etc.)</span> <span className="font-semibold whitespace-nowrap">35€ - 45€</span>
                    </div>
                    <br />
                    <span className="italic">* Peu importe la longueur de la capsule</span>
                </div>

                <div className="flex flex-col w-80 p-4 ">
                    <h2 className="text-3xl underline">Dépose</h2>
                    <br />
                    <div className="flex justify-between">
                        <span>Dépose seule (mon travail)</span> <span className="font-semibold">5€</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Dépose seule (autre travail)</span> <span className="font-semibold">10€</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Dépose + nouvelle pose</span> <span className="font-semibold">5€</span>
                    </div>
                    <br />
                    <span className="italic break-words">* Uniquement pour le semi-permanent ou Gel X</span>
                    <span className="italic break-words">* Toute dépose inclut une manucure combinée</span>
                </div>

            </div>


            <div className="flex flex-wrap items-center justify-center gap-6 pt-24 pb-20">
                <div className="flex flex-row items-center gap-2">
                    <img className="w-20" src="/images/price.jpg" alt="dispo" />
                    <span>Espèces</span>
                </div>
                <div className="w-20">
                    <img src="/images/paymentTypes/paylib.png" alt="paylib" className="w-20" />
                </div>
                <div className="w-20">
                    <img src="/images/paymentTypes/paypal.png" alt="paypal" className="w-20" />
                </div>
                <div className="w-20">
                    <img src="/images/paymentTypes/lydia.png" alt="lydia" className="w-20" />
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img className="w-20" src="/images/price.jpg" alt="dispo" />
                    <span>Virement instantané</span>
                </div>
            </div>


        </div>
    );
}