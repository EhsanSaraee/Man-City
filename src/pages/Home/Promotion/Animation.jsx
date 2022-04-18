import { Zoom } from 'react-awesome-reveal';
import { Jersey, Left, PromotionAnimation, Right } from './styles';

const Animation = () => {
   return (
      <PromotionAnimation>
         <Left>
            <Zoom>
               <div>
                  <span>Win a</span>
                  <span>Jersey</span>
               </div>
            </Zoom>
         </Left>
         <Right>
            <Zoom>
               <Jersey />
            </Zoom>
         </Right>
      </PromotionAnimation>
   );
};

export default Animation;
