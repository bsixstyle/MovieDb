import gql from 'graphql-tag'

export const PopularMovies = gql`
  query PopularMovies {
    Populars
      @rest(
        type: "PopularPayload"
        path: "/movie/popular?api_key=0b80085f54a9d3c26f79b21c71ea3a5e&language=en-US&page=1"
      ) {
      page
      results @type(name: "MoviesPayload") {
        adult
        backdrop_path
        genre_ids
        id
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