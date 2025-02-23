import { useEffect, useState } from "react";
import { Container, Background } from "./styles";
import { getVideo } from "../../services/getData";



function Modal({ movieId, setShowModal }) {
  const [video, setvideo] = useState([]);

  useEffect(() => {
        async function getAlldata() {
          setvideo(await getVideo(movieId));
        }

        getAlldata();
  }, []);

  return (

    <Background onClick={
      () => {
        setShowModal(false);
      }
    }>
    <Container>
      <button onClick={() => setShowModal(false)}>X</button>
      <iframe src=
     {`https://www.youtube.com/embed/${video[0]?.key}`}
        title="YouTube video player"
      ></iframe>
    </Container>
    </Background>
  );
}

export default Modal;
