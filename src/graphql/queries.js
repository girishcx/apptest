/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPet = /* GraphQL */ `
  query GetPet($id: ID!) {
    getPet(id: $id) {
      id
      name
      description
      petType
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPets = /* GraphQL */ `
  query ListPets(
    $filter: ModelPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        petType
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
