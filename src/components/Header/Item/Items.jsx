'use client'

function Item({ name, setPlanetName, setOpenMenu }) {
    function getPlanetColor(name) {
        switch (name) {
            case "Mercury":
                return "#DEF4FC";
            case "Venus":
                return "#ECAD7A";
            case "Earth":
                return "#545BFE";
            case "Mars":
                return "#FF6A45";
            case "Jupiter":
                return "#ECAD7A";
            case "Saturn":
                return "#FCCB6B";
            case "Uranus":
                return "#65F0D5";
            case "Neptune":
                return "#497EFA";
            default:
                return "#FFF";
        }
    }
    return (
        <li onClick={() => { setPlanetName(name); setOpenMenu(false) }}>
            <div>
                <div style={{ backgroundColor: getPlanetColor(name) }}>
                </div>
                <p>
                    {name}
                </p>
            </div>
            <span>
                {'>'}
            </span>
        </li>
    );
}

export default Item;