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
                React Based Approaches
            </Text>

            <List
                style={{listStylePosition: 'initial'}}
                textColor="primary">
                <ListItem>
                    <Text textColor="primary">
                        Use of Inline Styles
                    </Text>
                    <Text textSize='32px'
                          textColor="tertiary">
                        <strong>Radium</strong> inline styles on React elements without CSS
                    </Text>
                    <Text textSize='32px'
                          textColor="tertiary">
                        <strong>JSS, React-JSS</strong> - A lib for generating CSS from JavaScript
                    </Text>
                </ListItem>
                <ListItem>
                    <Text textColor="primary">
                        CSS Modules: balance between a conventional approach and React
                    </Text>
                    <Text textSize='32px'
                          textColor="tertiary">
                        <strong>react-css-modules</strong> seamless mapping of class names to CSS modules inside of
                        React components
                    </Text>
                </ListItem>
            </List>

            <Appear>
                <div>
                    <Text textColor="tertiary">
                        Benefits:
                    </Text>
                    <Text textColor="primary">
                        Adds logic to styling and OO thinking, re-usability and maintenance
                    </Text>
                </div>
            </Appear>


        </div>
    )
}