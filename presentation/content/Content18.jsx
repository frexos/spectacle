'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, Appear, List, ListItem} from 'spectacle';


export default class extends Component {

    render = () => (
        <div>

            <Heading size={4} margin={10} textColor="primary">
                React VS the Opposition
            </Heading>

            <Text textColor="tertiary">
                React's correlation with available libraries and frameworks
            </Text>

            <List ordered={true}>

                <Appear>
                    <div>
                        <List textColor="primary">
                            <ListItem>
                                React vs. Knockout
                            </ListItem>
                            <Text textColor="tertiary">
                                Both are rendering a model to the DOM
                            </Text>
                            <Text textColor="tertiary">
                                Both Manage Events
                            </Text>
                            <Text textColor="tertiary">
                                Their ways differ
                            </Text>
                        </List>
                    </div>
                </Appear>

                <Appear>
                    <div>
                        <List textColor="primary">
                            <ListItem>
                                React vs. Angular/Ember
                            </ListItem>
                            <Text textColor="tertiary">
                                Provide a larger and generalized set of features.
                            </Text>
                        </List>
                    </div>
                </Appear>

                <Appear>
                    <div>
                        <List textColor="primary">
                            <ListItem>
                                React vs. Backbone
                            </ListItem>
                            <Text textColor="tertiary">
                                Lower level - but more work for the programmer, higher risk of bugs.
                            </Text>
                            <Text textColor="tertiary">
                                More fully-featured than React
                            </Text>
                        </List>
                    </div>
                </Appear>
            </List>
        </div>
    )
}