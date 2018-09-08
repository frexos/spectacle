'use strict';

import React from 'react';
import {Deck, Spectacle, Slide} from 'spectacle';
import 'spectacle/lib/themes/default/index.css';
import 'flexboxgrid/css/flexboxgrid.min.css';
import 'normalize.css';
import './main.css';
import theme from './components/theme';
import images from './components/images';
import SlideContent_1 from './content/Content1';
import Presenters from './content/Presenters';
import SlideContent_2 from './content/Content2';
import SlideContent_3 from './content/Content3';
import SlideContent_4 from './content/Content4';
import SlideContent_5 from './content/Content5';
import SlideContent_6 from './content/Content6';
import SlideContent_7 from './content/Content7';
import SlideContent_8 from './content/Content8';
import SlideContent_9 from './content/Content9';
import SlideContent_10 from './content/Content10';
import SlideContent_10_1 from './content/Content10_1';
import SlideContent_11 from './content/Content11';
import SlideContent_12 from './content/Content12';
import SlideContent_13 from './content/Content13';
import SlideContent_15 from './content/Content15';
import SlideContent_17 from './content/Content17';
import SlideContent_18 from './content/Content18';
import SlideContent_19 from './content/Content19';
import SlideContent_20 from './content/Content20';
import SlideContent_21 from './content/Content21';
import SlideContent_23 from './content/Content23';
import SlideContent_24 from './content/Content24';
import SlideContent_25 from './content/Content25';
import SlideContent_26 from './content/Content26';
import References from './content/References';
import Questions from './content/Questions';
import Bye from './content/Bye';
// import SlideContent_14 from './content/Content14';
// import SlideContent_16 from './content/Content16';
// import SlideContent_22 from './content/Content22';

module.exports = class extends React.Component {
    render = () => (
        <Spectacle
            theme={theme}>

            <Deck>

                <Slide bgDarken={0.5} bgImage={images.bg} transition={['slide']} children={<SlideContent_1 />}/>

                <Slide bgColor="secondary" transition={['slide']} children={<Presenters />}/>

                <Slide bgColor="secondary" transition={['spin', 'zoom']} children={<SlideContent_2/>}/>

                <Slide bgColor="secondary" transition={['spin', 'zoom']} children={<SlideContent_3/>}/>

                <Slide bgColor="secondary" transition={['spin', 'zoom']} children={<SlideContent_4/>}/>

                <Slide bgColor="secondary" transition={['spin', 'scale']} children={<SlideContent_5/>}/>

                <Slide bgColor="primary" transition={['spin', 'scale']} children={<SlideContent_6/>}/>

                <Slide bgColor="primary" transition={['zoom', 'spin']} children={<SlideContent_7/>}/>

                <Slide bgColor="primary" transition={['zoom', 'spin']} children={<SlideContent_8/>}/>

                <Slide bgColor="primary" transition={['zoom', 'spin']} children={<SlideContent_9/>}/>

                <Slide bgColor="secondary" transition={['zoom', 'spin']} children={<SlideContent_10/>}/>

                <Slide bgColor="secondary" transition={['zoom', 'spin']} children={<SlideContent_10_1/>}/>

                <Slide bgColor="secondary" transition={['zoom', 'spin']} children={<SlideContent_11/>}/>

                <Slide bgColor="secondary" transition={['zoom', 'spin']} children={<SlideContent_12/>}/>

                <Slide bgColor="secondary" transition={['zoom', 'spin']} children={<SlideContent_13/>}/>

                {/*<Slide bgColor="secondary" transition={['zoom', 'spin']} children={<SlideContent_14/>}/>*/}

                <Slide bgColor="secondary" transition={['zoom', 'spin']} children={<SlideContent_15/>}/>

                {/*<Slide bgColor="secondary" transition={['zoom', 'spin']} children={<SlideContent_16/>}/>*/}

                <Slide bgColor="secondary" transition={['zoom', 'spin']} children={<SlideContent_17/>}/>

                <Slide bgColor="secondary" transition={['zoom', 'spin']} children={<SlideContent_18/>}/>

                <Slide bgColor="secondary" transition={['zoom', 'spin']} children={<SlideContent_19/>}/>

                <Slide bgColor="secondary" transition={['zoom', 'spin']} children={<SlideContent_20/>}/>

                <Slide bgColor="secondary" transition={['zoom', 'spin']} children={<SlideContent_21/>}/>

                <Slide bgDarken={0.6} bgImage={images.killb} transition={['zoom', 'spin']}
                       children={<SlideContent_23/>}/>

                <Slide bgColor="secondary" transition={['zoom', 'spin']} children={<SlideContent_24/>}/>

                <Slide bgDarken={0.7} bgImage={images.issues} bgColor="secondary" transition={['zoom', 'spin']}
                       children={<SlideContent_25/>}/>

                <Slide bgDarken={0.7} bgImage={images.issues} bgColor="secondary" transition={['zoom', 'spin']}
                       children={<SlideContent_26/>}/>

                <Slide bgColor="secondary" transition={['zoom', 'spin']} children={<Questions/>}/>

                <Slide bgDarken={0.7} bgImage={images.ref} transition={['zoom', 'spin']} children={<References/>}/>

                <Slide transition={['zoom', 'spin']} children={<Bye/>}/>

            </Deck>

        </Spectacle>
    );
};