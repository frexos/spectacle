'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, CodePane, Layout, Fill, List, ListItem} from 'spectacle';


export default class extends Component {

    render = () => (
        <div>

            <Heading size={4} margin={10} textColor="primary">
                Styling in the age of React
            </Heading>

            <Text textColor="tertiary">
                JS Styling Example
            </Text>
            <Layout>
                <Fill>
                    <Text textColor="white">
                        A theme as component with styles as properties
                    </Text>
                    <CodePane
                        lang="js"
                        textSize='18px'
                        source={require('raw-loader!../assets/js.example')}
                        margin="20px auto"/>
                </Fill>
                <Fill>
                    <List margin={40}>
                        <ListItem textColor="primary">
                            A new component can use or override the theme's props
                        </ListItem>
                        <ListItem textColor="primary">
                            Con: CSS is still faster...
                        </ListItem>
                    </List>
                </Fill>
            </Layout>

        </div>
    )
}