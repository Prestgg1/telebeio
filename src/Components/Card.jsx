import { Cards } from "./Cards";
function Card({ card }) {
    return <div className="border-2 rounded-md p-4 w-full md: w-3/6">
        <b>{card.title}</b>
        <p>{card.universitet}</p>
        <p>{card.faculty}</p>
        <button className="bg-green-600 text-white rounded-md p-2 font-bold">
            <a href={card.link} download>Faylı Yülə</a></button>
        </div>;
}

export { Card };
