import { gql } from 'apollo-boost'

export const FETCH_POPULAR = gql`
  query FetchPopular  
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
  query FetchPlaying
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
  query FetchPlaying
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
  query FetchPlaying
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
  query FetchPlaying
  {
    Recipe(page:"1", types: RESULT)
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