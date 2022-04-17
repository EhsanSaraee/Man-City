import {
   MatchBlock,
   MatchBottom,
   MatchDate,
   MatchIcon,
   MatchLeft,
   MatchRight,
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
               <MatchLeft>
                  <MatchIcon
                     style={{
                        background: `url(/images/team_icons/${localThmb}.png)`,
                     }}
                  />
                  <TeamName>{local}</TeamName>
               </MatchLeft>
               <MatchRight>{final ? resultLocal : '-'}</MatchRight>
            </MatchTop>
            <MatchBottom>
               <MatchLeft>
                  <MatchIcon
                     style={{
                        background: `url(/images/team_icons/${awayThmb}.png)`,
                     }}
                  />
                  <TeamName>{away}</TeamName>
               </MatchLeft>
               <MatchRight>{final ? resultAway : '-'}</MatchRight>
            </MatchBottom>
         </MatchWrapper>
      </MatchBlock>
   );
};

export default Block;
