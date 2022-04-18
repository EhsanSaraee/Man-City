import {
   MatchBlock,
   MatchBottom,
   MatchDate,
   MatchIcon,
   Left,
   Right,
   MatchTop,
   MatchWrapper,
   TeamName,
} from './styles';

const Block = ({
   date,
   localThmb,
   local,
   resultLocal,
   final,
   awayThmb,
   away,
   resultAway,
}) => {
   return (
      <MatchBlock>
         <MatchDate>{date}</MatchDate>
         <MatchWrapper>
            <MatchTop>
               <Left>
                  <MatchIcon
                     style={{
                        background: `url(/images/team_icons/${localThmb}.png)`,
                     }}
                  />
                  <TeamName>{local}</TeamName>
               </Left>
               <Right>{final ? resultLocal : '-'}</Right>
            </MatchTop>
            <MatchBottom>
               <Left>
                  <MatchIcon
                     style={{
                        background: `url(/images/team_icons/${awayThmb}.png)`,
                     }}
                  />
                  <TeamName>{away}</TeamName>
               </Left>
               <Right>{final ? resultAway : '-'}</Right>
            </MatchBottom>
         </MatchWrapper>
      </MatchBlock>
   );
};

export default Block;
