import { Link } from 'react-router-dom';
import { TagContainer } from './styles';

const Tag = ({ children, link, linkTo, bck, size, color, add }) => {
   const template = (
      <TagContainer
         bck={bck}
         size={size}
         color={color}
         style={{
            ...add,
         }}
      >
         {children}
      </TagContainer>
   );

   if (link) {
      return <Link to={linkTo}>{template}</Link>;
   } else {
      return template;
   }
};

export default Tag;
