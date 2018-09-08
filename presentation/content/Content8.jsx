'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text} from 'spectacle';


export default class extends Component {

    render = () => (
        <div>

            <Heading size={4} margin={10} textColor="secondary">
                HTML DOM & Virtual DOM
            </Heading>

            <Text textColor="tertiary">
                The main problem is that DOM was never optimized for creating dynamic UI
            </Text>
            <br/>
            <Text textColor="secondary">
                The <strong>Virtual DOM</strong> is an abstraction of the HTML DOM. It is lightweight and detached from
                the
                browser-specific implementation details.
            </Text>
            <br/>
            <Text textColor="tertiary">
                Since DOM is an abstraction, Virtual DOM is an abstraction of the abstraction
            </Text>

        </div>
    )
}