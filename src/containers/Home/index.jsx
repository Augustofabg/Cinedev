import { Background, Poster, Containertext, Container } from "./styles";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getimagens";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import {
  getMovies,
  getTopMovies,
  getTopSeries,
  getUpcoming,
  getPeople,
} from "../../services/getData";

function Home() {
  const [movie, setMovie] = useState([]);
  const [topMovie, settopMovie] = useState([]);
  const [topSeries, settopSeries] = useState([]);
  const [upcoming, setupcoming] = useState([]);
  const [person, setperson] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
   async function getAlldata() {
    Promise.all([
      getMovies(),
      getTopMovies(),
      getTopSeries(),
      getUpcoming(),
      getPeople(),
        ]).then(([movies, topMovie, topSeries, upcoming, person]) => {
            setMovie(movies);
            settopMovie(topMovie);
            settopSeries(topSeries);
            setupcoming(upcoming);
            setperson(person);
        });
    }


    getAlldata();
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflowY = "hidden";
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showModal]);

  return (
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
                  onClick={() => navigate(`/details/${movie.id}`)}
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
        </Background>
      )}

      {topMovie && <Slider title="Top Filmes" info={topMovie} />}
      {topSeries && <Slider title="Top Séries" info={topSeries}  />}
      {upcoming && <Slider title="Upcoming" info={upcoming} />}
      {person && <Slider title="Actors" info={person} />}
    </>
  );
}

export default Home;
