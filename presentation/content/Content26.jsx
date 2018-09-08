'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, List, ListItem} from 'spectacle';


export default class extends Component {

    render = () => (
        <div>

            <Heading size={4} margin={10} textColor="rgb(0, 216, 255)">
                Future of ReactJS
            </Heading>

            <List style={{listStylePosition: 'initial'}} textColor="white">
                <ListItem>Facebook will continue to invest in both react and react-native (for the mobile world)</ListItem>
                <ListItem>React has popularized functional programming in JavaScript - this has become a major trend</ListItem>
                <ListItem>Competition also rises but react evolves as well</ListItem>
            </List>
        </div>
    )
}