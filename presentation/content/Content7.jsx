'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, Image, Appear} from 'spectacle';
import images from '../components/images';


export default class extends Component {

    render = () => (
        <div>

            <Heading size={4} margin={10} textColor="secondary">
                HTML DOM & Virtual DOM
            </Heading>

            <Text bold caps textColor="tertiary">How Slow really?</Text>

            <Appear>
                <Image src={images.slowBolt}/>
            </Appear>
        </div>
    )
}