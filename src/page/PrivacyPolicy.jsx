import { PrivacyPolicyCon } from "../styles/pages/privacypolicy";
import PrivacyTop from '../components/page/PrivacyPolicy/PrivacyTop';
import Help from '../../src/image/Help.png';
import { Bot } from "../styles/pages/Home";
import PrivacyInfo from "../components/page/PrivacyPolicy/PrivacyInfo";

const PrivacyPolicy = () => {

  return (
    <div>
      <PrivacyPolicyCon>
        <PrivacyTop />
        <Bot src={Help} alt="help" />
        <PrivacyInfo />
      </PrivacyPolicyCon>
    </div>
  )
};

export default PrivacyPolicy;
