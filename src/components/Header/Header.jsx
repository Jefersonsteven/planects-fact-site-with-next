import Item from "./Item/Items";
import styles from "./Header.module.css";
import { useState } from "react";
import BotonMenu from "./BotonMenu/BotonMenu";

function Header({ planetsNames, setPlanetName }) {
    const [openmenu, setOpenMenu] = useState(false);
    return (
        <header className={styles.Header}>
            <h4>THE PLANETS</h4>
            <div className={styles.Menu}>
                <ul className={`${styles.ListMenu} ${openmenu ? styles.OpenMenu : styles.Close}`}>
                    {planetsNames.map((planet) => <Item key={planet} name={planet} setPlanetName={setPlanetName} setOpenMenu={setOpenMenu} />)}
                </ul>
            </div>
            <BotonMenu setOpenMenu={setOpenMenu} openmenu={openmenu} />
        </header>
    );
}

export default Header;