import React from 'react';
import BoxMediaTextType from './BoxMedia_TextType';
import BoxMediaTextTitle from './BoxMedia_TextTitle';
import BoxMediaTextTopic from './BoxMedia_TextTopic';
import PropTypes from 'prop-types';
import './styles.css'

const BoxMedia_Text = ( {boxmedia_data} ) => {
    const { bm_type, bm_title, bm_topic1, bm_topic2 } = boxmedia_data;
    return (
        <article className="boxmedia--text">
            <BoxMediaTextType bm_type={bm_type}  /> 
            <BoxMediaTextTitle bm_title={bm_title} />
            <BoxMediaTextTopic bm_topic1={bm_topic1} bm_topic2={bm_topic2} />
        </article>
    );
};

BoxMedia_Text.propTypes = {
    boxmedia_data: PropTypes.shape( {
        bm_type: PropTypes.string.isRequired,
        bm_title: PropTypes.string.isRequired,
        bm_topic1: PropTypes.string.isRequired,
        bm_topic2: PropTypes.string,
    } )
}

export default BoxMedia_Text; 