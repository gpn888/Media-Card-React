import React from 'react'; 
import PropTypes from 'prop-types';

const BoxMedia_FigureImg = ( {bm_img_url, bm_img_alt} ) => (
    <img className="boxmedia--figure-img" src={`${bm_img_url}`} alt={`${bm_img_alt}`} />
);

BoxMedia_FigureImg.propTypes = {
    bm_img_url: PropTypes.string.isRequired, 
    bm_img_alt: PropTypes.string,
}

export default BoxMedia_FigureImg;