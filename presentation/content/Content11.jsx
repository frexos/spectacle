'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Link, Text, Appear, Image} from 'spectacle';
import images from '../components/images';


export default class extends Component {

    render = () => (
        <div >

            <Heading size={4} margin={10} textColor="primary">
                HTML DOM & Virtual DOM
            </Heading>

            <Text textColor="tertiary">
                diff algorithm
            </Text>

            <Appear>
                <Image src={images.trees} width={'85%'} height='90%'/>
            </Appear>
            <Appear>
                <div>
                    <Text textColor='primary'>Youtube Video: <Link textColor='white'
                                                                   href="https://www.youtube.com/watch?v=UH6dz6IGbK4">Understanding
                        Virtual
                        DOM</Link> </Text>

                </div>
            </Appear>
        </div>
    )
}