import { Background, Container, Containertext, Poster } from "./style";
import { getImages } from "../../utils/getimagens";
import { useState } from "react";
import { useEffect } from "react";
import {
  getpopularSeries,
  getTSeries,
  getOnTheAir
} from "../../services/getData";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import Modal from "../../components/Modalserie";

function serie() {
  const [popularSeries, setpopularSeries] = useState([]);
  const [topSeries, settopSeries] = useState([]);
  const [upcoming, setupcoming] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAlldata() {
      Promise.all([getpopularSeries(), getTSeries(), getOnTheAir()]).then(([popularSeries, topSeries, upcoming]) => {
        console.log(popularSeries, topSeries, upcoming);
        setpopularSeries(popularSeries);
        settopSeries(topSeries);
        setupcoming(upcoming);
      });
    }
    getAlldata();
  }, []);

  return (
    <>
      {popularSeries && (
        <Background $img={getImages(popularSeries.backdrop_path)}>
          {showModal && (
            <Modal seriesid={popularSeries.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Containertext>
              <h1>{popularSeries.name}</h1>
              <p>{popularSeries.overview}</p>

              <div>
                <Button
                  red={true}
                  onClick={() => navigate(`/details/Series/${popularSeries.id}`)}
                >
                  Assista Agora
                </Button>
                <Button red={false} onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </div>
            </Containertext>

            <Poster>
              <img src={getImages(popularSeries.poster_path)} alt="" />
            </Poster>
          </Container>
        </Background>
      )}

{topSeries && <Slider title="Top Series" info={topSeries} />}
{upcoming && <Slider title="On The Air" info={upcoming} />}
    </>
  );
}

export default serie;
