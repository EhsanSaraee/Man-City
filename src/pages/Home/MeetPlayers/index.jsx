import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Tag } from '../../../components';
import HomeCards from './Cards';
import {
   Container,
   HomeCardWrapper,
   HomeMeetPlayers,
   HomeMeetPlayersWrapper,
   HomeTextWrapper,
} from './styles';

let tagDefault = {
   bck: '#0e1731',
   size: '100px',
   color: '#ffffff',
};

const MeetPlayers = () => {
   const [show, setShow] = useState(false);

   const showTextTag = (text) => (
      <Tag
         {...tagDefault}
         add={{
            display: 'inline-block',
            marginBottom: '20px',
         }}
      >
         {text}
      </Tag>
   );

   return (
      <Fade
         triggerOnce
         onVisibilityChange={(inView) => {
            if (inView) setShow(true);
         }}
      >
         <HomeMeetPlayers>
            <Container>
               <HomeMeetPlayersWrapper>
                  <HomeCardWrapper>
                     <HomeCards show={show} />
                  </HomeCardWrapper>
                  <HomeTextWrapper>
                     <div>{showTextTag('Meet')}</div>
                     <div>{showTextTag('The')}</div>
                     <div>{showTextTag('Players')}</div>
                     <div>
                        <Tag
                           bck="#ffffff"
                           size="27px"
                           color="#0e1731"
                           link
                           linkTo="/the_team"
                           add={{
                              display: 'inline-block',
                              marginBottom: '27px',
                              border: '1px solid #0e1731',
                           }}
                        >
                           Meet them here
                        </Tag>
                     </div>
                  </HomeTextWrapper>
               </HomeMeetPlayersWrapper>
            </Container>
         </HomeMeetPlayers>
      </Fade>
   );
};
export default MeetPlayers;
