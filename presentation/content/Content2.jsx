'use strict';

import React, {Component} from 'react';
import {Appear, Image, Heading, ListItem, List, Text, Link} from 'spectacle';
import images from '../components/images';

const common = {
    headingColor: 'white',
    primaryColor: '#F03E4C',
    secondaryColor: 'grey',
    emphasis: {
        color: '#06c0f4',
        textSize: '32px',
        fontSize: 'bold'
    }
};

export default class extends Component {
    render = () => (
        <div>

            <Heading
                size={1}
                fit={true}
                caps={true}
                textColor={common.headingColor}>
                What is React
                <Image
                    width="10px"
                    style={{margin: '0px'}}
                    src={images.react}/>
                JS Framework?
            </Heading>

            <List ordered={true}>
                <Appear>
                    <ListItem
                        textColor={common.primaryColor}>
                        A Javascript Framework created by facebook
                        <Text
                            textColor={common.secondaryColor}
                            textSize="32px"
                            margin="0px 0px 10px 85px">
                            Build Interactive User Interfaces - Single page applications (SPA)
                        </Text>
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem
                        textColor={common.primaryColor}>
                        Component-Based
                        <Text
                            textColor={common.secondaryColor}
                            textSize="32px"
                            margin="0px 0px 10px 85px">
                            Build encapsulated components that manage their own state
                        </Text>
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem textColor={common.primaryColor}>
                        Learn once write anywhere
                        <Text
                            textColor={common.secondaryColor}
                            textSize="32px"
                            margin="0px 0px 10px 85px">
                            React can also render on the server using Node, as well as, power mobile apps using <Link
                            href="https://facebook.github.io/react-native/" textColor='white'>React Native</Link>
                        </Text>
                    </ListItem>
                </Appear>
                <Appear>
                    <ListItem
                        textColor={common.primaryColor}>
                        Super-fast rendering via <span style={common.emphasis}>Virtual DOM</span>
                    </ListItem>
                </Appear>
            </List>
        </div>
    )
}