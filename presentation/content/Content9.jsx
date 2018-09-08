'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, Appear, CodePane} from 'spectacle';


export default class extends Component {

    render = () => (
        <div>

            <Heading size={4} margin={10} textColor="secondary">
                HTML DOM & Virtual DOM
            </Heading>

            <Text caps textColor="tertiary">
                JSX
            </Text>

            <Text textColor="secondary">
                Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props,
                ...children) function.
            </Text>

            <Appear>
                <div>
                    <Text textColor="white">
                        The JSX code:
                    </Text>
                    <CodePane
                        lang="jsx"
                        textSize='20px'
                        source={require('raw-loader!../assets/jsx.example')}
                        margin="20px auto"/>
                </div>
            </Appear>

            <Appear>
                <div>
                    <Text textColor="white">
                        Compiles into:
                    </Text>
                    <CodePane
                        lang="jsx"
                        textSize='20px'
                        source={require('raw-loader!../assets/jsx-compiled.example')}
                        margin="20px auto"/>
                </div>
            </Appear>

        </div>
    )
}