import React, {Component}  from 'react'; //{Component se declara como clase extendida}
import BoxMediaFigure from './BoxMedia_Figure';
import BoxMediaText from './BoxMedia_Text';
import './styles.css'

const boxmedia_data2 = {
    bm_type: 'Noticias',
    bm_title: 'ArkyWeb gana premios en Cannes por mejor aplicación regional',
    bm_topic1: 'Eventos',
    bm_topic2: 'Mundo Mundial',
    bm_img_url: 'https://placeimg.com/640/480/any',
    bm_img_alt: 'Gino Pichulón',
};

class BoxMedia extends Component {

    constructor() {
        super();
        this.state = {
            boxmedia_data: boxmedia_data2,
        };
    };

    render = () => {
        const {boxmedia_data} = this.state;
        return (
            <div className="boxmedia">
                <a href="" className="boxmedia--link">
                    <BoxMediaFigure boxmedia_data={this.state.boxmedia_data} />
                    <BoxMediaText boxmedia_data={this.state.boxmedia_data} />
                </a>
            </div>
        );
    }

};

export default BoxMedia;