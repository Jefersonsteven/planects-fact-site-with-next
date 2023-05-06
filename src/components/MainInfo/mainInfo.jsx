import Section2 from "../Section-2/Section-2";
import { MainSectionImage } from "../mainSectionImage/MainSectionImage";
import { MainSectionInfo } from "../mainSectionInfo/MainSectionInfo";

const MainInfo = ({ info }) => {
  return (
    <section>
      <MainSectionImage image={info.images.planet} />
      <MainSectionInfo info={info} />
      <Section2 info={info} />
    </section>
  );
};

export default MainInfo;
