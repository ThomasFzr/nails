import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import { Hamburger } from "./hamburger";

export const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isMenuOpen]);

    return (
        <div className={`fixed top-0 left-0 w-full z-[100] text-2xl pt-1 text-black items-center transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className='flex flex-row justify-between w-full py-2 px-4'>
                <div className="w-[30%] hidden md:flex">
                    <a className="h-15" href="https://www.instagram.com/lesgriffesduz/" target="_blank" rel="noopener noreferrer">
                        <img className="w-15 hover:scale-110" src="/images/insta.png" alt="Instagram" />
                    </a>
                </div>
                <div>
                    <Link to="/">
                        <img className="w-30 hover:scale-110" src="/images/logo6.png" alt="Logo" />
                    </Link>
                </div>

                <div className="flex-row justify-around items-center w-[30%] h-15 hidden md:flex ">
                    <Link to="/price" className="hover:scale-110">PRIX</Link>
                    <Link to="/dispo" className="hover:scale-110">DISPO</Link>
                    <Link to="/info" className="hover:scale-110">INFOS</Link>
                </div>

                <div className="flex md:hidden w-[30%] justify-end" ref={menuRef}>
                    <div className="flex flex-col justify-start items-end">
                        <Hamburger isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                        {isMenuOpen && (
                            <div className="flex flex-col items-end absolute pt-8 p-4 shadow-md rounded-md">
                                <Link to="/" className="hover:scale-110" onClick={() => setIsMenuOpen(false)}>ACCUEIL</Link>
                                <Link to="/price" className="hover:scale-110" onClick={() => setIsMenuOpen(false)}>PRIX</Link>
                                <Link to="/dispo" className="hover:scale-110" onClick={() => setIsMenuOpen(false)}>DISPO</Link>
                                <Link to="/info" className="hover:scale-110" onClick={() => setIsMenuOpen(false)}>INFOS</Link>
                                <a href="https://www.instagram.com/lesgriffesduz/" target="_blank" rel="noopener noreferrer">
                                    <img className="w-15 pl-4 hover:scale-110" src="/images/insta.png" alt="Instagram" />
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
