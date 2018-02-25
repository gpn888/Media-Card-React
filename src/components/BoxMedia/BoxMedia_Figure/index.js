import React from 'react';
import BoxMediaFigureImg from './BoxMedia_FigureImg';
import PropTypes from 'prop-types';
import './styles.css'

const BoxMedia_Figure = ( {boxmedia_data} ) => {
    const { bm_img_url, bm_img_alt } = boxmedia_data;
    return (
        <figure className="boxmedia--figure">
            <BoxMediaFigureImg bm_img_url={bm_img_url} bm_img_alt={bm_img_alt} /> 
        </figure>
    );
}; 

BoxMedia_Figure.propTypes = {
    boxmedia_data: PropTypes.shape( {
        bm_img_url: PropTypes.string.isRequired, 
        bm_img_alt: PropTypes.string,
    } )
}

export default BoxMedia_Figure;