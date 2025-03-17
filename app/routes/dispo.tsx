import Calendar from "~/components/calendar";
import { DISPO_TYPES } from "~/types/dispoTypes";

const dispos = [
{date: 17, name: DISPO_TYPES["21"]},
{date: 18, name: DISPO_TYPES["1821"]},
{date: 19, name: DISPO_TYPES["1821"]},
{date: 20, name: DISPO_TYPES["1821"]},
{date: 21, name: DISPO_TYPES["1821"]},
{date: 24, name: DISPO_TYPES["21"]},
{date: 25, name: DISPO_TYPES["full"]},
{date: 26, name: DISPO_TYPES["21"]},
{date: 27, name: DISPO_TYPES["21"]},
{date: 28, name: DISPO_TYPES["21"]},
{date: 29, name: DISPO_TYPES["21"]},
{date: 30, name: DISPO_TYPES["full"]},
{date: 31, name: DISPO_TYPES["full"]},
];

export default function DispoPage() {
    return (
        <div className="w-full p-8 mt-16 flex flex-col justify-center">

            <div className="flex flex-row items-center justify-around">
                <span className="text-4xl font-bold">MES DISPOS</span>
                <img className="w-30" src="/images/dispo.jpg" alt="dispo" />
            </div>

            <Calendar events={dispos}/>
        </div>
    );
}
