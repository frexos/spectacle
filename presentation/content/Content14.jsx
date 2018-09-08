'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, Appear, List, ListItem} from 'spectacle';


export default class extends Component {

    render = () => (
        <div>

            <Heading size={4} margin={10} textColor="primary">
                Styling in the age of React
            </Heading>

            <Text textColor="tertiary">
                Available methods:

            </Text>
            <List textColor="primary">
                <ListItem>
                    CSS Processors: Less, Sass Stylus, PostCSS

                    <Text textColor="tertiary">
                        They add logic and functionality
                    </Text>

                    <Text textColor="tertiary">
                        Variables, Math operations, Nested rules
                    </Text>

                    <Text textColor="tertiary">
                        React supports all of them
                    </Text>
                </ListItem>
            </List>


        </div>
    )
}