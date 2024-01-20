
import ConditionInfo from "../components/page/Conditions/ConditionInfo";
import ConditionsTop from "../components/page/Conditions/ConditionsTop";
import { TermsConditionCon } from "../styles/pages/Conditions";
import { Bot } from "../styles/pages/Home";
import Help from '../../src/image/Help.png';
const TermsConditions = () => {
  return (
    <TermsConditionCon>
      <ConditionsTop />
      <Bot src={Help} alt="help" />
      <ConditionInfo />
    </TermsConditionCon>
  )
};

export default TermsConditions;
