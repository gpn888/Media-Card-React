import React from 'react'; 
import PropTypes from 'prop-types';

const BoxMedia_TextTopic = ( {bm_topic1, bm_topic2} ) => (
    <div className="boxmedia--text-topic">
        <span>{`${bm_topic1}`}</span>
        <i>&bull;</i>
        <span>{`${bm_topic2}`}</span>
    </div>
);

BoxMedia_TextTopic.propTypes = {
    bm_topic1: PropTypes.string.isRequired,
    bm_topic2: PropTypes.string.isRequired,
}

export default BoxMedia_TextTopic;