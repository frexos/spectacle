'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, Image, Layout, Fill, Appear} from 'spectacle';
import images from '../components/images';


export default class extends Component {

    render = () => (
        <div>

            <Heading size={4} margin={10} textColor="primary">
                React VS the Opposition
            </Heading>

            <Text textColor="tertiary">
                Speed Performance
            </Text>

            <Text textColor="tertiary">
                REACT VS ANGULAR-I VS KNOCKOUT
            </Text>

            <Layout>
                <Fill>
                    <Image src={images.speedTest3}/>
                </Fill>
                <Fill>
                    <Appear>
                        <div>
                            <br/>
                            <Image style={{padding: '5px', margin: '5px'}} width='512px' src={images.ponyExpress}/>
                        </div>
                    </Appear>
                </Fill>
            </Layout>

        </div>
    )
}