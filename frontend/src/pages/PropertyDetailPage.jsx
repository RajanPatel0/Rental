// PropertyDetailPage.jsx
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PropertyDetail from '../components/PropertyDetail';
import Discuss from '../components/Discuss';
import Footer from '../components/Footer';

// Replace this with your real property data
import { Properties } from '../json/landingPageData';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const detailData = Properties.filter((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PropertyDetail data={detailData.length === 1 ? [detailData[0]] : null} />
      <Discuss />
      <Footer />
    </>
  );
};

export default PropertyDetailPage;
