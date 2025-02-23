import { getImages } from "../../utils/getimagens";
import { Container, Title, Info } from "./styles";

function Credits({ Credits }) {
  return (
    <>
      <Title>Crédits</Title>
      {Credits &&(
        
        <Container>
          {Credits.slice(0, 5).map(credit => ( 
           <Info key={credit.id}>
            <img src={getImages(credit.profile_path)}/>
            <p>{credit.original_name}</p>
           </Info>
          ))}
        </Container>)}
    </>
  );
}

export default Credits;
