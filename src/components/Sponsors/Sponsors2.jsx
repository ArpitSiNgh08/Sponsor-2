import Heading from "./Heading";
import Box from "./logoboard";
import PartnerBox from "./PartnerBoard";
import SubHeading from "./SubHeading";
import logo from "../../assets/logos/th.jpg";
import ComingSoon from "../ComingSoon/ComingSoon";
import SJVNLogo from "../../assets/SJVNLogo.jpg";

const Sponsors2 = () => {
  return (
    <div className="container w-full flex flex-col items-center mx-auto bg-transparent text-white">
      <div className="container flex flex-col items-center bg-transparent">
        {/* Nest content inside SubHeading */}
        <SubHeading>Treasurer Sponsors</SubHeading>
        <ComingSoon />
        {/* <Box companyLogos={[{ logo: `${logo.src}` }]} /> */}
      </div>
      <div className="container flex flex-col items-center bg-transparent">
        {/* Nest content inside SubHeading */}
        <SubHeading>Chamberlain Sponsors</SubHeading>
        <Box
          companyLogos={[{ logo: SJVNLogo }]}
          size={{ width: 150, height: 320 }} 
        />
      </div>
    </div>
  );
};

export default Sponsors2;
