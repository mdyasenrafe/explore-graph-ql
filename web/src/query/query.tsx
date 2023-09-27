import { gql } from "@apollo/client";

export const CONTINENT_QUERY = gql`
  query ContinentQuery1 {
    continents {
      code
      name
      countries {
        capital
        currency
      }
    }
  }
`;
