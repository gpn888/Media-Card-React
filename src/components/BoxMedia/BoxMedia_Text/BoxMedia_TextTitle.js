import React from 'react'; 
import PropTypes from 'prop-types';

const BoxMedia_TextTitle = ( {bm_title} ) => (
    <h3 className="boxmedia--text-title">
        {`${bm_title}`}
    </h3>
);

BoxMedia_TextTitle.propTypes = {
    bm_title: PropTypes.string.isRequired, 
}

export default BoxMedia_TextTitle;