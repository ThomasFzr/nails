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
            {Title({ name: "MES DISPOS", imageSrc: "/images/dispo.jpg", imageAlt: "dispo" })}
            <Calendar events={dispos} />
        </div>
    );
}
