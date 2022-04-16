import { easePolyOut } from 'd3-ease';
import { Animate } from 'react-move';
import FeaturedPlayerImg from '../../../resources/images/featured_player.png';
import {
   FeaturedFirst,
   FeaturedNumber,
   FeaturedPlayer,
   FeaturedText,
} from './styles';

const Text = () => {
   const animateNumber = () => (
      <Animate
         show={true}
         start={{
            opacity: 0,
            rotate: 0,
         }}
         enter={{
            opacity: [1],
            rotate: [360],
            timing: { duration: 1000, ease: easePolyOut },
         }}
      >
         {({ opacity, rotate }) => (
            <FeaturedNumber
               style={{
                  opacity,
                  transform: `translate(260px,170px) rotateY(${rotate}deg)`,
               }}
            >
               5
            </FeaturedNumber>
         )}
      </Animate>
   );

   const animateFirstText = () => (
      <Animate
         show={true}
         start={{
            opacity: 0,
            x: 503,
            y: 450,
         }}
         enter={{
            opacity: [1],
            x: [273],
            y: [450],
            timing: { duration: 500, ease: easePolyOut },
         }}
      >
         {({ opacity, x, y }) => (
            <FeaturedFirst
               style={{
                  opacity,
                  transform: `translate(${x}px,${y}px)`,
               }}
            >
               League
            </FeaturedFirst>
         )}
      </Animate>
   );

   const animateSecondText = () => (
      <Animate
         show={true}
         start={{
            opacity: 0,
            x: 503,
            y: 586,
         }}
         enter={{
            opacity: [1],
            x: [273],
            y: [586],
            timing: { delay: 300, duration: 500, ease: easePolyOut },
         }}
      >
         {({ opacity, x, y }) => (
            <FeaturedFirst
               style={{
                  opacity,
                  transform: `translate(${x}px,${y}px)`,
               }}
            >
               Championships
            </FeaturedFirst>
         )}
      </Animate>
   );

   const animatePlayer = () => (
      <Animate
         show={true}
         start={{
            opacity: 0,
         }}
         enter={{
            opacity: [1],
            timing: { delay: 800, duration: 500, ease: easePolyOut },
         }}
      >
         {({ opacity }) => (
            <FeaturedPlayer
               style={{
                  opacity,
                  background: `url(${FeaturedPlayerImg}) no-repeat`,
                  transform: `translate(550px,201px)`,
               }}
            ></FeaturedPlayer>
         )}
      </Animate>
   );

   return (
      <FeaturedText>
         {animatePlayer()}
         {animateNumber()}
         {animateFirstText()}
         {animateSecondText()}
      </FeaturedText>
   );
};

export default Text;
