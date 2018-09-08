'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, List, ListItem} from 'spectacle';


export default class extends Component {

    render = () => (
        <div>

            <Heading size={4} margin={10} textColor="rgb(0, 216, 255)">
                Good-2-know Issues
            </Heading>
            <List style={{listStylePosition: 'initial'}} textColor="white">
                <ListItem>React is merely a UI library</ListItem>
                <ListItem>Module versioning requires attention</ListItem>
                <ListItem>HTML debugging can be difficult (Chrome helps with React Developer Tools addon)</ListItem>
            </List>
        </div>
    )
}