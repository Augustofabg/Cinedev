import { Background, Container, Containertext, Poster } from "./style";
import { getImages } from "../../utils/getimagens";
import { useState } from "react";
import { useEffect } from "react";
import {
  getMovies,
  getTopMovies,
  getUpcoming,
} from "../../services/getData";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import Modal from "../../components/Modal";


function movies() {
  const [movie, setMovie] = useState([]);
  const [topMovie, settopMovie] = useState([]);
  const [upcoming, setupcoming] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
 
  useEffect(() => {
    async function getAlldata() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getUpcoming(),
      ]).then(([movies, topMovie, upcoming]) => {
        setMovie(movies);
        settopMovie(topMovie);
        setupcoming(upcoming);
      });
    }
    getAlldata();
  }, []);


 return(
 <>
 {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Containertext>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>

              <div>
                <Button
                  red={true}
                  onClick={() => navigate(`/details/Movies/${movie.id}`)}
                >
                  Assista Agora
                </Button>
                <Button red={false} onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </div>
            </Containertext>

            <Poster>
              <img src={getImages(movie.poster_path)} alt="" />
            </Poster>
          </Container>

 </Background>)}

 {topMovie && <Slider title="Top Filmes" info={topMovie} />}
 {upcoming && <Slider title="Upcoming" info={upcoming} />}
</>
 )}

export default movies;
