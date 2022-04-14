import { Logo } from '../Logo/Logo';
import { BckBlue, FooterDescL, FooterLogo } from './styles';

const Footer = () => {
   return (
      <BckBlue>
         <FooterLogo>
            <Logo width="70px" height="70px" link linkTo="/" />
         </FooterLogo>
         <FooterDescL>Manchester City 2021. All rights reserved.</FooterDescL>
      </BckBlue>
   );
};

export default Footer;
