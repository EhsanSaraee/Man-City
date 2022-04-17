import Blocks from './Blocks';
import { Container, MatchesWrapper } from './styles';
import { Tag } from '../../../components';

const Matches = () => {
   return (
      <MatchesWrapper>
         <Container>
            <Tag bck="#0e1731" size="50px" color="#ffffff">
               Matches
            </Tag>

            <Blocks />

            <Tag size="22px" color="#0e1731" link linkTo="/the_team">
               Matches
            </Tag>
         </Container>
      </MatchesWrapper>
   );
};

export default Matches;
