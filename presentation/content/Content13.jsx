'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, List, ListItem} from 'spectacle';


export default class extends Component {

    render = () => (
        <div>

            <Heading
                size={4}
                margin={10}
                textColor="primary">
                Styling in the age of React
            </Heading>

            <Text textColor="tertiary">
                Available methods:
            </Text>

            <List
                textSize='20px'
                style={{listStylePosition: 'initial'}}
                textColor="primary">
                <ListItem>
                    <Text textColor="primary">CSS Methodologies: BEM OOCSS and SMACSS</Text>
                    <Text
                        textSize='32px'
                        textColor="tertiary">
                        Added structure to the project
                    </Text>
                    <Text
                        textSize='32px'
                        textColor="tertiary">
                        Make elements reusable
                    </Text>
                </ListItem>
                <ListItem>
                    <Text textColor="primary">
                        On the other hand there can be complex naming schemes
                    </Text>
                    <Text textColor="primary">
                        React to the rescue:
                    </Text>
                    <Text
                        textSize='32px'
                        textColor="tertiary">
                        react-bem-helper, react-bem-render, bem-react
                    </Text>
                </ListItem>
                <ListItem>
                    <Text textColor="primary">
                        Complete support of SASS, SCSS, LESS, PostCSS
                    </Text>
                </ListItem>
            </List>
        </div>
    )
}