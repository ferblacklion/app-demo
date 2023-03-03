import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { AnchorStyled } from '../../components/anchor';
import { Button } from '../../components/button';
import { FooterWrapper } from './style';

export function Footer({
  showBackButton,
  showContinueButton,
  onContinue,
  onBack,
}: {
  showBackButton?: boolean;
  showContinueButton?: boolean;
  onContinue: () => void;
  onBack: () => void;
}) {
  return (
    <FooterWrapper>
      {showContinueButton ? (
        <Button onClick={onContinue}>Continue</Button>
      ) : null}
      <div className="footer-wrapper__links">
        <div>
          {showBackButton ? (
            <AnchorStyled onClick={onBack}>
              <MdOutlineKeyboardArrowLeft />
              Back
            </AnchorStyled>
          ) : null}
        </div>
        <div>
          <AnchorStyled>
            Why it matters <AiOutlinePlus />
          </AnchorStyled>
        </div>
      </div>
    </FooterWrapper>
  );
}
