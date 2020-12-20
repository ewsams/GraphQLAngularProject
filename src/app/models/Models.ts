/* This file consist of interfaces 
for constructing Queries
*/
export interface Post {
  id: string;
  title: string;
  author: string;
  description: string;
}

export interface DCLSampleInterface {
  data: Data;
}

export interface Data {
  counts: Count[];
  orders: Order[];
}

export interface Count {
  id: string;
  orderEstate: number;
  orderParcel: number;
  orderTotal: number;
}

export interface Order {
  category: string;
  id: string;
  nft: Nft;
  nftAddress: string;
  owner: string;
}

export interface Nft {
  id: string;
}
