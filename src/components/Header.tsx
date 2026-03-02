import {Search } from "lucide-react";
import type { FC, ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";


const Header: FC = () => {
    const [open, setOpen] = useState(false);


    /* ---------- searchHiding ---------- */

    const location = useLocation();

    const hiddenPart = ["/", "/about"]

    const showSearch = !hiddenPart.includes(location.pathname)


    /* ---------- NavItem ---------- */

    interface NavItemLinkProps {
        to: string;
        children: ReactNode;
        onClick?: () => void;
    }

    const NavItemLink: FC<NavItemLinkProps> = ({ to, children, onClick }) => {
        return (
            <NavLink
                to={to}
                onClick={onClick}
                className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition
            ${isActive
                        ? "bg-accent text-white"
                        : "text-text hover:bg-accent hover:text-white"
                    }`
                }
            >
                {children}
            </NavLink>
        );
    };

      const { t } = useTranslation();

    return (

        <header className="w-full bg-gradient-to-r from-primary to-accent px-3 sm:px-6 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Left */}
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-accent" />
                    </div>

                    {/* Nav */}
                    <nav className="hidden  lg:flex items-center gap-2">
                        <NavItemLink to="/">{t("home")}</NavItemLink>
                        <NavItemLink to="/places">{t("places")}</NavItemLink>
                        <NavItemLink to="/events">{t("events")}</NavItemLink>
                        <NavItemLink to="/about">{t("about")}</NavItemLink>
                    </nav>

                    {/* Mobile Menu */}
                    <div
                        className={`lg:hidden fixed inset-0 z-40 bg-black/40 transition-opacity
                     ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                        onClick={() => setOpen(false)}
                    >
                        <div className={`absolute right-0 top-0 h-full w-72 bg-bg p-6 flex flex-col justify-between  gap-3  transition-transform
                      ${open ? "translate-x-0" : "translate-x-full"}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <nav className="flex flex-col gap-2">
                                <NavItemLink to="/" onClick={() => setOpen(false)}>
                                    {t("home")}
                                </NavItemLink>
                                <NavItemLink to="/places" onClick={() => setOpen(false)}>
                                    {t("places")}
                                </NavItemLink>
                                <NavItemLink to="/events" onClick={() => setOpen(false)}>
                                    {t("events")}
                                </NavItemLink>
                                <NavItemLink to="/about" onClick={() => setOpen(false)}>
                                    {t("about")}
                                </NavItemLink>
                            </nav>
                            <div className="flex justify-between h-10 w-full ">
                                <LanguageSwitcher/>
                                <ThemeToggle />
                            </div>

                        </div>
                    </div>


                </div>

                {/* Right */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Search */}
                    {
                        showSearch && (
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-50 sm:w-64 rounded-lg bg-transparent py-1 sm:py-2  pl-8 sm:pl-9 pr-2 sm:pr-3   md:text-sm text-text placeholder-text outline-none ring-1 ring-primary/70 focus:bg-primary/70 shadow shadow-bg "
                                />
                            </div>
                        )}




                    {/* Bell */}
                    {/* <button
                        type="button"
                        className="hidden lg:blok rounded-lg p-2 text-text hover:bg-accent hover:text-white"
                    >
                        <Bell className="h-5 w-5" />
                    </button> */}

                    {/* Burger button (mobile) */}
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="lg:hidden rounded-lg p-2 text-text hover:bg-accent "
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                    <div className="hidden lg:flex gap-5">
                        <ThemeToggle />
                        <LanguageSwitcher/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;




