import { gql } from '@apollo/client';


export const GET_ALL_BRANDS = gql`
  query GetAllBrands {
    findAllBrands {
      id
      name
      image
      origin
    }
  }
`;
export const GET_BRAND_MODELS = gql`
  query GetBrandModels($id: ID!) {
    findBrandModels(id: $id, sortBy: {field: name, order: ASC}) {
      id
      name
      type
      image
      price
    }
  }
`;
export const GET_MODEL_DETAILS = gql`
  query GetModelDetails($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      type
      image
      specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
      }
      musicians {
        name
        musicianImage
        bands
      }
    }
  }
`;