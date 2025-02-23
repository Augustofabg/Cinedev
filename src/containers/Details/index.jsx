import { useEffect, useState } from "react";
import { Container, Background, Areatext, ContainerMovies } from "./styles";
import { useParams } from "react-router-dom";
import { getVideo, getDetails, getCredits, getSimilar } from "../../services/getData";
import { getImages } from "../../utils/getimagens";
import Spangenres from "../../components/Genres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";


function Details() {
  const { id } = useParams();
  const [video, setvideo] = useState([]);
  const [details, setDetails] = useState([]);
  const [credits, setCredits] = useState([]);
  const [similar, setSimilar] = useState([]);


  useEffect(() => {

    async function getAlldata() {
      Promise.all([getVideo(id), getDetails(id), getCredits(id), getSimilar(id)]).then(
        ([video, details, credits, similar]) => {
          setvideo(video);
          setDetails(details);
          setCredits(credits);
          setSimilar(similar);
        },
        
      );
    }

    getAlldata();
  }, []);

  return (
    <>
    {details && <Background $image={getImages(details.backdrop_path)}/>}
  <Container>
  <img src={getImages(details.poster_path)} />
  <Areatext>
   <h1>{details.title || details.name}</h1>
   <Spangenres genre={details.genres}/>
  <p>{details.overview}</p>
  <Credits Credits={credits} />
  </Areatext>
 
  </Container>


  <ContainerMovies>
  {video && video.slice(0, 3).map((item) => (
  <div key={item.id}>
    <iframe 
      src={`https://www.youtube.com/embed/${item.key}`} 
      title="YouTube video player"
    ></iframe>
  </div>
))}
  </ContainerMovies>

  {similar && <Slider title="Similar" info={similar} />}
    </>
  
  );
}


export default Details;
