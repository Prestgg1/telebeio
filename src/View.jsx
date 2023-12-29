import { Cards } from "./Components/Cards";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Footer";
function View() {
    /* 
    ! Burada İsə Saytın Gələn Strukturu Görünür Saytın Seach Gölümü Cards.jsx dedir.
    */
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center justify-center">
                <h1 className="text-blue-700 text-4xl text-center mt-4">
                    Sənə lazım olan faylı seç və yüklə
                </h1>
                <Cards />
            </main>
            <Footer />
        </>
    );
}

export { View };
