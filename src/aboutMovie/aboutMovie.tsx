import { IAboutItem } from '../dto';
import styled from "styled-components";
import { Background } from './background';
import { Poster } from './poster';
import { Information } from './information';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding:0;
  width: 90%;
  height: 600px;   
  position: relative; 
`;

export default function AboutMovie({ item,  onAddToFavorite }: IAboutItem) {
  console.log(item)
  return (   
    <Container>
      <Background url={item.backdrop_path}/>
      <Poster url={item.poster_path}/>
      <Information item={item} onAddToFavorite={ (id)=>onAddToFavorite(id)} />
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