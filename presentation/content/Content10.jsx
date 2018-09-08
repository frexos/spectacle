'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, Appear, Layout, Fill, CodePane} from 'spectacle';


export default class extends Component {

    render = () => (
        <div >

            <Heading size={4} margin={10} textColor="primary">
                HTML DOM & Virtual DOM
            </Heading>

            <Layout>

                <Fill>

                    <Text textColor='white'>
                        ReactElement
                    </Text>
                    <br/>
                    <Appear>
                        <Text
                            textSize="32px"
                            textColor='white'>
                            a light, stateless, <strong>immutable</strong>, virtual representation of a DOM Element
                        </Text>
                    </Appear>
                    <Appear>
                        <CodePane
                            lang="jsx"
                            textSize='20px'
                            source={require('raw-loader!../assets/element.example')}
                            margin="20px auto"/>
                    </Appear>

                </Fill>

                <Fill>

                    <Text textColor='white'>
                        ReactComponent
                    </Text>

                    <br/>
                    <Appear>

                        <Text
                            textSize="32px"
                            textColor='white'>
                            What differs ReactComponent from ReactElement is - ReactComponents are <strong>
                            stateful</strong>
                        </Text>
                    </Appear>
                    <Appear>
                        <CodePane
                            lang="jsx"
                            textSize='20px'
                            source={require('raw-loader!../assets/component.example')}
                            margin="20px auto"/>
                    </Appear>

                </Fill>
            </Layout>

        </div>
    )
}