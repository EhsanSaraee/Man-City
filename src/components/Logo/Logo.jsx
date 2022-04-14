import ManCityLogo from '../../resources/images/logos/manchester_city_logo.png';
import { ImgCover, LinkLogo } from './styles';

export const Logo = ({ width, height, link, linkTo }) => {
   const template = (
      <ImgCover
         style={{
            width,
            height,
            background: `url(${ManCityLogo}) no-repeat`,
         }}
      />
   );

   if (link) {
      return <LinkLogo to={linkTo}>{template}</LinkLogo>;
   } else {
      return template;
   }
};
