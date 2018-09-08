'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, Image} from 'spectacle';
import images from '../components/images';


export default class extends Component {

    render = () => (
        <div>

            <Heading size={4} margin={10} textColor="primary">
                React VS the Opposition
            </Heading>

            <Text textColor="tertiary">
                The React VS Angular Showdown..
            </Text>

            <Image src={images.showdown}/>


        </div>
    )
}