'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, Appear, Image, Fill, Layout} from 'spectacle';
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
                REACT vs. ANGULAR-I vs. KNOCKOUT
            </Text>
            <Layout>
                <Fill><Image src={images.speedTest1} height={355}/></Fill>
                <Fill><Appear><Image src={images.speedTest2}/></Appear></Fill>
            </Layout>

        </div>
    )
}