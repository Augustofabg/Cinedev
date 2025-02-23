import { Container } from "./style";

function Spangenres({genre}) {
  return (
    <Container>
     {genre && genre.map((g) => <span key={g.id}>{g.name}</span>)}
    </Container>
  );
}

export default Spangenres;
