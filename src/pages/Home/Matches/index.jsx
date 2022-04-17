import Blocks from './Blocks';
import { Container, HomeMatchesWrapper } from './styles';
import { Tag } from '../../../components';

const Matches = () => {
   return (
      <HomeMatchesWrapper>
         <Container>
            <Tag bck="#0e1731" size="50px" color="#ffffff">
               Matches
            </Tag>

            <Blocks />

            <Tag size="22px" color="#0e1731" link linkTo="/the_team">
               Matches
            </Tag>
         </Container>
      </HomeMatchesWrapper>
   );
};

export default Matches;
