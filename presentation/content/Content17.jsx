'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, List, ListItem} from 'spectacle';


export default class extends Component {

    render = () => (
        <div>

            <Heading size={4} margin={10} textColor="primary">
                Styling in the age of React
            </Heading>

            <Text textColor="tertiary">
                Summing up
            </Text>

            <List textColor="tertiary">
                <ListItem style={{marginTop: 10}}>
                    A rich set of <strong>tools</strong>
                </ListItem>
                <ListItem style={{marginTop: 10}}>
                    React <strong>supports</strong> all the traditional Styling Methodologies
                </ListItem>
                <ListItem style={{marginTop: 10}}>
                    ...and even offers <strong>facilitating</strong> libraries
                </ListItem>
                <ListItem style={{marginTop: 10}}>
                    React also has Its own <strong>inline</strong> styling libraries
                </ListItem>
                <ListItem style={{marginTop: 10}}>
                    There is <strong>no best practice</strong> yet
                </ListItem>
                <ListItem style={{marginTop: 10}}>
                    CSS approaches are <strong>faster</strong>
                </ListItem>
                <ListItem style={{marginTop: 10}}>
                    JS based styling is <strong>easier</strong> to maintain and scale
                </ListItem>
                <ListItem style={{marginTop: 10}}>
                    <strong>Combinations</strong> can be used
                </ListItem>
                <ListItem style={{marginTop: 10}}>
                    <strong>CSS modules</strong> are a promising approach
                </ListItem>
            </List>

        </div>
    )
}