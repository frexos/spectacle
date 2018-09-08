'use strict';

import React, {Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Heading, Text, List, ListItem, Appear, Layout, Fill} from 'spectacle';


export default class extends Component {

    render = () => (
        <div  style={{width: 1200, marginLeft: -150, marginTop: -100}}>

            <Heading size={4} margin={10} textColor="primary">
                React @ Exus
            </Heading>

            <Text textColor="tertiary">
                Should Exus add ReactJS in its toolset?
            </Text>
            <List style={{listStylePosition: 'initial'}} textColor="tertiary">
                <Layout>
                    <Fill style={{marginRight: 50}}>
                        <ListItem>Puts all the javascript mess into a clean and non dictating <strong>context</strong></ListItem>
                        <ListItem>easy to <strong>debug</strong> JS and has separate concerns with components</ListItem>
                        <ListItem>Virtual DOM is <strong>FAST</strong></ListItem>
                        <ListItem>numerous <strong>libraries</strong> and ready made components out there</ListItem>
                        <ListItem>Ideal for <strong>backend</strong> engineers to "touch" a frontend</ListItem>
                    </Fill>
                    <Fill>
                        <Appear>
                            <div>
                                <Text textColor="#00d8ff">Specifically for EXUS:</Text>
                                <ListItem>Works great for <strong>teams</strong>, strongly enforcing UI and workflow patterns</ListItem>
                                <ListItem>we have already developed some <strong>inhouse</strong> (react-material-forms, react-sketch etc.)</ListItem>
                                <ListItem><strong>Added value</strong> - powerful message to the IT market</ListItem>
                                <ListItem>Builds efficient and super fast UIs. Fit for product oriented companies where <strong>scalability and maintenance</strong> are important</ListItem>
                                <ListItem>React native can be used for smaller <strong>mobile</strong> projects just like Ionic</ListItem>
                            </div>
                        </Appear>
                    </Fill>
                </Layout>
            </List>


        </div>
    )
}