import { useEffect, useState } from "react";
import Section2 from "../Section-2/Section-2";
import { MainSectionImage } from "../mainSectionImage/MainSectionImage";
import { MainSectionInfo } from "../mainSectionInfo/MainSectionInfo";

const MainInfo = ({ info }) => {
  const [submenu, setSubmenu] = useState('overview');
  const [image, setImage] = useState(info.images.planet);

  useEffect(() => {
    submenu === 'structure' ? setImage(info.images.internal) : setImage(info.images.planet);
  }, [submenu, info]);

  return (
    <section>
      <div>
        <MainSectionImage image={image} width={300} height={300} />
        {submenu === 'geology' && <MainSectionImage image={info.images.geology} width={100} height={120} />}
      </div>
      <MainSectionInfo info={info} submenu={submenu} />
      <Section2 info={info} />
    </section>
  );
};

export default MainInfo;
