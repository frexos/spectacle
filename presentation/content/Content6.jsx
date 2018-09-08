'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Appear, List, ListItem} from 'spectacle';


export default class extends Component {

    render = () => (
        <div>

            <Heading size={4} margin={10} textColor="secondary">
                HTML DOM & Virtual DOM
            </Heading>

            <List>
                <Appear>
                    <ListItem>
                        <strong>HTML DOM</strong> stands for Document Object Model and is an abstraction of a structured
                        text
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem>
                        The HTML DOM is always <strong>tree-structured</strong> - which is allowed by the structure of
                        HTML document.
                        This is cool because we can traverse trees fairly easily.
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem>
                        Unfortunately, easily <strong>doesn’t mean quickly</strong> here...
                    </ListItem>
                </Appear>
            </List>
        </div>
    )
}