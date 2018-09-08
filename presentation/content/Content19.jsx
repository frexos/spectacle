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
                React VS the Opposition
            </Heading>

            <Text textColor="tertiary">
                Community & Framework Size
            </Text>
            <Text textColor="tertiary">
                REACT VS ANGULAR I&II VS EMBER
            </Text>
            <Image src={images.community}/>
            <Appear>
                <Text textColor="tertiary">
                    Despite its' young age, React holds a notable community
                </Text>
            </Appear>

        </div>
    )
}