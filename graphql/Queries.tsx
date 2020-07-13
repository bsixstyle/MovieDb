import gql from 'graphql-tag';

export const FETCH_POPULAR = gql`
  query FETCH_POPULAR  
  {
    Recipe(page:"1", types: RECIPE)
    @rest(
      path: "/movie/popular?api_key=0b80085f54a9d3c26f79b21c71ea3a5e&language=en-US&page={args.page}"
      type: "RESULT"
      ) 
      {
        page
        results
        {               
          id
          adult
          backdrop_path
          genre_ids
          original_language
          original_title
          overview
          popularity
          poster_path
          release_date
          title
          video
          vote_average
          vote_count    
        }
        total_pages
        total_results   
      }
  }
`


export const FETCH_NOWPLAYING = gql`
  query FETCH_NOWPLAYING
  {
    Recipe(page:"1", types: RESULT)
    @rest(
      path: "/movie/now_playing?api_key=0b80085f54a9d3c26f79b21c71ea3a5e&language=en-US&page={args.page}"
      type: "RESULT"
      ) 
      {
        page
        results
        {               
          id
          adult
          backdrop_path
          genre_ids
          original_language
          original_title
          overview
          popularity
          poster_path
          release_date
          title
          video
          vote_average
          vote_count    
        }
        total_pages
        total_results   
      }
  }
`


export const FETCH_TOPRATED = gql`
  query FETCH_TOPRATED
  {
    Recipe(page:"1", types: RESULT)
    @rest(
      path: "/movie/top_rated?api_key=0b80085f54a9d3c26f79b21c71ea3a5e&language=en-US&page={args.page}"
      type: "RESULT"
      ) 
      {
        page
        results
        {               
          id
          adult
          backdrop_path
          genre_ids
          original_language
          original_title
          overview
          popularity
          poster_path
          release_date
          title
          video
          vote_average
          vote_count    
        }
        total_pages
        total_results   
      }
  }
`


export const FETCH_UPCOMING = gql`
  query FETCH_UPCOMING
  {
    Recipe(page:"1", types: RESULT)
    @rest(
      path: "/movie/upcoming?api_key=0b80085f54a9d3c26f79b21c71ea3a5e&language=en-US&page={args.page}"
      type: "RESULT"
      ) 
      {
        page
        results
        {               
          id
          adult
          backdrop_path
          genre_ids
          original_language
          original_title
          overview
          popularity
          poster_path
          release_date
          title
          video
          vote_average
          vote_count    
        }
        total_pages
        total_results   
      }
  }
`


export const FETCH_SEARCHMOVIES = gql`
  query FETCH_SEARCHMOVIES($query: String!)
  {
    Recipe(query: $query) @rest(
      path: "/search/movie?api_key=0b80085f54a9d3c26f79b21c71ea3a5e&language=en-US&page=1&include_adult=false&query={args.query}"
      type: "RESULT"
      ) 
      {
        page
        results
        {               
          id
          adult
          backdrop_path
          genre_ids
          original_language
          original_title
          overview
          popularity
          poster_path
          release_date
          title
          video
          vote_average
          vote_count    
        }
        total_pages
        total_results   
      }
  }
`