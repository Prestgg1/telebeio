import { useContext, useEffect, useState } from "react";
import { MainContext } from "../Context";
import { Card } from "./Card";
function Cards() {
    const [search, setSearch] = useState("");
    const { cards } = useContext(MainContext);
    const [universitety, setUniversitety] = useState("void");
    const [ixtisas, setIxtisas] = useState("void");
    return (
        /* 
        ! Əgər Seçenek Əlavə Etmək İstəyirsənsə Optionsları Artır. Amma elə etki yaratdığın optionsun valuesi ilə eyni olsun gələn məlumat.
        */
        <>
            <form
                className="flex flex-col items-center gap-3"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    placeholder="Nə Lazımdı..."
                    className="rounded-md mt-3 p-3 w-5/6 border-2 outline-none text-4xl"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
                {/* Burası Seçeneklerdir. */}
                <select
                    value={universitety}
                    onChange={(e) => {
                        setUniversitety(e.target.value);
                    }}
                    className="p-3 font-bold outline-none"
                >
                    <option value="void" className="text-center">
                        ---- Universitetinizi Seçin ----
                    </option>
                    <option value="Bakı Dövlət Universitet">
                        Bakı Dövlət Universitet
                    </option>
                    <option value="Azərbaycan Texniki Universitet">
                        Azərbaycan Texniki Universitet
                    </option>
                </select>
                {/* Burası İxtisaslar Olan Bölmədir. */}
                <select
                    value={ixtisas}
                    onChange={(e) => {
                        setIxtisas(e.target.value);
                    }}
                    className="p-3 font-bold outline-none"
                >
                    <option value="void" className="text-center">
                        ---- İxtisası Seçin ----
                    </option>
                    <option value="Komputer Mühəndisliyi">
                        Komputer Mühəndisliyi
                    </option>
                    <option value="Elektrik Mühəndisliyi">
                        Elektrik Mühəndisliyi
                    </option>
                </select>
            </form>
            <div className="flex m-4 gap-2 items-center justify-center flex-wrap w-full">
                {cards
                    .filter((val) => {
                        if (
                            (search == "" &&
                                universitety == "void" &&
                                ixtisas == "void") ||
                            (search == "" &&
                                universitety == val.universitet &&
                                ixtisas == "void") ||
                            (search == "" &&
                                universitety == val.universitet &&
                                ixtisas == val.faculty) ||
                            (search == "" &&
                                universitety == "void" &&
                                ixtisas == val.faculty)
                        ) {
                            return val;
                        } else if (
                            (val.title
                                .toLowerCase()
                                .includes(search.toLowerCase()) &&
                                universitety == "void" &&
                                ixtisas == "void") ||
                            (val.title
                                .toLowerCase()
                                .includes(search.toLowerCase()) &&
                                universitety == val.universitety &&
                                ixtisas == "void")
                        ) {
                            return val;
                        }
                    })
                    .map((card, index) => {
                        return <Card key={index} card={card} />;
                    })}
            </div>
        </>
    );
}

export { Cards };
