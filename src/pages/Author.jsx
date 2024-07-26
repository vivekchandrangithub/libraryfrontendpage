import React from 'react';
import { useParams } from 'react-router-dom';

function Author() {
  const { id } = useParams();
  return <h1>Author Page - {id}</h1>;
}

export default Author;
