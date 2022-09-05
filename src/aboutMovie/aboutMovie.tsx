import { IAboutItem, IActor, IMovieItem } from '../dto';
import styled from "styled-components";
import { Background } from './background';
import { Poster } from './poster';
import { Information } from './information';
import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import Spinner from '../spinner/spinner';
import Error from '../error/error'
import Actors from './actors';
import LoadingSpinner from '../spinner/spinner';

const Container = styled.div`
  margin-top:200px;
`

const ContainerAboutFilm = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding:0;
  width: 90%;
  height: 600px;   
  position: relative; 
`;

export default function AboutMovie({ server,  onAddToFavorite, favorite }: IAboutItem) {
  const [item, setItem] = useState<IMovieItem>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);
  const [actors,setActors] = useState<IActor[]>(null)
  
  const { id } = useParams<{id:string}>();

  useEffect(() => {
    Promise.all([server.getMovie(+id), server.getActors(+id)]).then((data) => {
      setItem(data[0]);
      setActors(data[1].cast);
      setLoading(false);
    }).catch(() => {
        setError(true);
      });
  }, []);

  const itemWithFavorite = useMemo<IMovieItem>(() => {
    if (!item) {
      return null;
    }
    const isFavorite = Boolean(favorite.find(it => it === +id));
    return { ...item, 'favorite': isFavorite };
  }, [favorite, item]);

  
  return (   
    <Container>
      {error ? <Error /> :
        loading ? <Spinner /> :
          <>
            <ContainerAboutFilm>
              <Background url={item.backdrop_path} />
              <Poster url={item.poster_path} />
              <Information item={itemWithFavorite} onAddToFavorite={(index) => onAddToFavorite(index)} />
            </ContainerAboutFilm>
            <Actors items={actors.filter(it => it.profile_path != null)} />
          </>
         
        }      
    </Container>   
    )
} 

// adult: false
// backdrop_path: "/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg"
// belongs_to_collection: {id: 399, name: 'Predator Collection', poster_path: '/6Z7lASptoiRVxiCFvZaFgH9qp7u.jpg', backdrop_path: '/fXVzk9OxQwROCuiWvd0Cv76qmZi.jpg'}
// budget: 0
// genres: (2) [{…}, {…}]
// homepage: "https://www.20thcenturystudios.com/movies/prey"
// id: 766507
// imdb_id: "tt11866324"
// original_language: "en"
// original_title: "Prey"
// overview: "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal."
// popularity: 5322.786
// poster_path: "/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg"
// production_companies: (3) [{…}, {…}, {…}]
// production_countries: [{…}]
// release_date: "2022-08-02"
// revenue: 0
// runtime: 100
// spoken_languages: (2) [{…}, {…}]
// status: "Released"
// tagline: "They hunt to live. It lives to hunt."
// title: "Prey"
// video: false
// vote_average: 8.034
// vote_count: 3288