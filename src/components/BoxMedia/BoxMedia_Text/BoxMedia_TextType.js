import React from 'react'; 
import PropTypes from 'prop-types';

const BoxMedia_TextType = ( {bm_type} ) => (
    <h4 className="boxmedia--text-type">
       {`${bm_type}`}
    </h4>
);

BoxMedia_TextType.propTypes = {
    bm_type: PropTypes.string.isRequired, 
}

export default BoxMedia_TextType;