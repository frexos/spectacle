'use strict';

import React, {Component} from 'react';
import {Heading, Image, Text} from 'spectacle';
import images from '../components/images';

export default class extends Component {
    render() {
        return (
            <div>
                <Heading
                    size={1}
                    fit={true}
                    caps={true}
                    textColor="#06c0f4">

                    <Image
                        width="30px"
                        style={{margin: '0px'}}
                        src={images.react}/>

                    ReactJS Framework

                </Heading>

                <Text
                    bold={true}
                    textSize="1.5em"
                    margin="5px 0px 0px 0px"
                    textColor='gray'>@</Text>

                <Heading
                    size={1}
                    fit={true}
                    textColor="primary">
                    <Image width="30px" className='logo' src={images.logo}/>PowerUPs

                </Heading>
            </div>
        )
    }
};