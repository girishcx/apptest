/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePet = /* GraphQL */ `
  subscription OnCreatePet($owner: String) {
    onCreatePet(owner: $owner) {
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
export const onUpdatePet = /* GraphQL */ `
  subscription OnUpdatePet($owner: String) {
    onUpdatePet(owner: $owner) {
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
export const onDeletePet = /* GraphQL */ `
  subscription OnDeletePet($owner: String) {
    onDeletePet(owner: $owner) {
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
