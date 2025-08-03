import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_MODEL_DETAILS } from '../../graphql/queries';
import { Guitarstopcontent } from './guitarstopcontent';
import { Details } from './details';
import { Footer } from '../guitarbrands/footer';

export const Guitars = () => {
  const { modelId, brandId } = useParams();

  const { loading, error, data } = useQuery(GET_MODEL_DETAILS, {
    variables: { brandId, modelId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading model details.</p>;

  const model = data?.findUniqueModel;

  return (
    <div>
      <Guitarstopcontent model={model} />
      <Details model={model} />
      <Footer />
    </div>
  );
};
