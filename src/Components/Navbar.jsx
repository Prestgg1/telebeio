import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-5 text-white font-bold flex items-start justify-between gap-10 relative h-full">
            <Link className="text-3xl" to="/">
                Tələbə.az
            </Link>
            <div
                className={` nav w-full top-full  transition-all justify-center items-center gap-5  flex ${
                    menuOpen ? "left-0" : "-left-full"
                } `}
            >
                {/* */}
                <NavLink
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                    to="/"
                >
                    Əsas səhifə
                </NavLink>
                <NavLink
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                    to="/share"
                >
                    Paylaş
                </NavLink>
                <NavLink
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                    to="/tables"
                >
                    Cədvəl
                </NavLink>
                <NavLink
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                    to="/contact"
                >
                    Əlaqə
                </NavLink>
                <NavLink
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                    to="/share"
                >
                    Xidmətlər
                </NavLink>
            </div>
            {menuOpen ? (
                <FaXmark
                    className="flex items-center justify-center text-3xl md:hidden"
                    onClick={() => {
                        setMenuOpen(false);
                    }}
                />
            ) : (
                <RxHamburgerMenu
                    onClick={() => {
                        setMenuOpen(true);
                    }}
                    className="flex items-center justify-center text-3xl md:hidden"
                />
            )}
        </nav>
    );
}

export { Navbar };
