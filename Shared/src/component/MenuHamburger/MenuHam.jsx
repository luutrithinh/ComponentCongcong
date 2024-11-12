import React, { useState } from 'react';
import '../MenuHamburger/MenuHam.css';

export default function MenuHam() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav id="menu" style={{ borderRadius: isMenuOpen ? '0' : '10px' }}>
            <input
                type="checkbox"
                id="responsive-menu"
                checked={isMenuOpen}
                onChange={handleMenuToggle}
            />
            <label htmlFor="responsive-menu" />
            <ul>
                <li>
                    <a className="dropdown-arrow" href="">
                        Shop
                    </a>
                    <ul className="sub-menus">
                        <li>
                            <a href="">Chi nhánh 1</a>
                        </li>
                        <li>
                            <a href="">Chi nhánh 2</a>
                        </li>
                        <li>
                            <a href="">Chi nhánh 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="">onlsale</a>
                </li>
                <li>
                    <a href="">New Arrivals</a>
                </li>
                <li>
                    <a className="dropdown-arrow" href="http://">
                        Brand
                    </a>
                    <ul className="sub-menus">
                        <li>
                            <a href="">VERSACE</a>
                        </li>
                        <li>
                            <a href="">ZARA</a>
                        </li>
                        <li>
                            <a href="">GUCCI</a>
                        </li>
                        <li>
                            <a href="">PRADA</a>
                        </li>
                        <li>
                            <a href="">CALVIN KLEIN</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}