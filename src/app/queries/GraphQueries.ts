import { gql } from "apollo-angular-boost";
/* This file consist of variables
for constructing Queries
*/

export const sampleQuery = gql`
  {
    counts(first: 5) {
      id
      orderTotal
      orderParcel
      orderEstate
    }
    orders(first: 5) {
      id
      category
      nft {
        id
      }
      nftAddress
    }
  }
`;
