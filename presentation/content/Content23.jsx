'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, ListItem, Image, Layout, Fill, List} from 'spectacle';
import images from '../components/images';
const styles = {
    background: {
        backgroundColor: 'rgba(128,128,128,0.5)',
        margin: '5px',
        padding: '5px'
    },
    list: {
        listStylePosition: 'initial',
    }
};

export default class extends Component {

    render = () => (
        <div style={{width: 1400, marginLeft: -240, marginTop: -100}}>

            <Heading
                size={4}
                margin={10}
                textColor="white">
                React VS. Angular
            </Heading>

            <Layout>
                <Fill>
                    <Text
                        size={4}
                        margin={10}
                        textColor="primary"
                        style={styles.background}>
                        <Image width='160px' src={images.angualar}/>
                    </Text>
                    <List
                        textColor="primary"
                        style={styles.list}>
                        <ListItem >Angular (both versions) is a full featured framework</ListItem>
                        <ListItem >Debugging HTML is harder in React</ListItem>
                        <ListItem >Typescript is developer friendly</ListItem>
                        <ListItem >2-ways binding</ListItem>
                    </List>
                </Fill>
                <Fill>
                    <Text
                        size={4}
                        margin={10}
                        textColor="#00d8ff"
                        style={styles.background}>
                        <Image width='46px' src={images.react}/> React
                    </Text>
                    <List
                        textColor="#00d8ff"
                        style={styles.list}>

                        <ListItem>Angular-II not backwards compatible with Angular-I</ListItem>
                        <ListItem>React has a shorter learning curve</ListItem>
                        <ListItem>Regarding community and support Angular has a great momentum but
                            React
                            also has strong support</ListItem>
                        <ListItem>React is faster</ListItem>
                        <ListItem>React is lighter - even with added modules for a full
                            MVC</ListItem>
                        <ListItem>React fails during compile time (Angular during
                            runtime)</ListItem>
                    </List>
                </Fill>
            </Layout>
        </div>
    )
}