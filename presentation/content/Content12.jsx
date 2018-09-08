'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, Appear, Image} from 'spectacle';
import images from '../components/images';


export default class extends Component {

    render = () => (
        <div>

            <Heading size={4} margin={10} textColor="primary">
                Styling in the age of React
            </Heading>

            <br/>

            <Appear>
                <div>
                    <Text textColor="tertiary">

                        Plain old CSS: will get you started
                    </Text>
                    <Image src={images.lipstick}/>
                </div>
            </Appear>

            <br/>

            <Appear>
                <div>
                    <Text textColor="tertiary">
                        <strong>BUT...</strong> as the project grows, things will get messy
                    </Text>
                    <Image src={images.uglyDino}/>
                </div>
            </Appear>

        </div>
    )
}