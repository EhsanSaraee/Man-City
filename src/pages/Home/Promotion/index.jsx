import Animation from './Animation';
import Enroll from './Enroll';
import { Container, PromotionWrapper } from './styles';

const Promotion = () => {
   return (
      <PromotionWrapper>
         <Container>
            <Animation />
            <Enroll />
         </Container>
      </PromotionWrapper>
   );
};

export default Promotion;
