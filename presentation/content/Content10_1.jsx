'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, List, ListItem, Appear} from 'spectacle';


export default class extends Component {

    render = () => (
        <div >

            <Heading size={4} margin={10} textColor="primary">
                HTML DOM & Virtual DOM
            </Heading>

            <List
                style={{listStylePosition: 'initial'}}
                ordered={true}
                textColor='primary'>
                <ListItem>
                    <Text
                        margin='0px 0px 0px 5px'
                        textSize='32px'
                        textColor='white'>
                        ReactElements <strong>immutability</strong> makes them easy and fast to compare and update
                    </Text>
                </ListItem>
                <Appear>
                    <ListItem>
                        <Text
                            textSize='32px'
                            textColor='white'>
                            ReactComponents have <strong>no access</strong> to the virtual DOM
                        </Text>
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem>
                        <Text
                            textSize='32px'
                            textColor='white'>
                            Whenever a ReactComponent is changing the state, we want to make <strong>as little
                            changes</strong> to the
                            “real” DOM as possible
                        </Text>
                    </ListItem>
                </Appear>
                <Appear>

                    <ListItem>
                        <Text
                            textSize='32px'
                            textColor='white'>
                            The ReactComponent <strong>is converted</strong> to the ReactElement. React decides when to
                            update the real DOM
                        </Text>
                    </ListItem>
                </Appear>
                <Appear>

                    <ListItem>
                        <Text
                            textSize='32px'
                            textColor='white'>
                            How and when exactly? A <strong>diff algorithm</strong> is responsible to do it
                        </Text>
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem>
                        <Text
                            textSize='32px'
                            textColor='white'>
                            it’s converted to the low-level (HTML DOM) code and executed to the DOM. This code is
                            <strong> optimised per browser</strong>
                        </Text>
                    </ListItem>
                </Appear>
            </List>

        </div>
    )
}