'use client'
import Image from "next/image";

function BotonMenu({ openmenu, setOpenMenu }) {

    function handlerClick() {
        openmenu ? setOpenMenu(false) : setOpenMenu(true);
    }

    return (
        <figure onClick={handlerClick}>
            <Image width={24} height={17} src="/assets/icon-hamburger.svg" alt="menu" />
        </figure>
    );
}

export default BotonMenu;