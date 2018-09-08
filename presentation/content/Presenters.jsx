'use strict';

import React, {Component} from 'react';
import {Heading, Image, Layout, Fill, Text} from 'spectacle';
import images from '../components/images';

export default class extends Component {
    render() {
        return (
            <div>
                <Heading
                    size={4}
                    caps={true}
                    textColor="primary">
                    Presenters
                </Heading>
                <Layout>
                    <Fill>
                        <Image
                            width="350px"
                            style={{margin: '0px'}}
                            src={images.tom}/>
                        <Text textColor="white">Thomas</Text>
                        <Text
                            textSize="28px"
                            textColor="white">
                            t.bolis@exodussa.com
                        </Text>
                    </Fill>
                    <Fill>
                        <Image
                            width="350px"
                            style={{margin: '0px'}}
                            src={images.evripi}/>
                        <Text
                            textColor="white">
                            Evripides
                        </Text>
                        <Text
                            textSize="28px"
                            textColor="white">
                            e.georgantzos@exus.co.uk
                        </Text>
                    </Fill>
                </Layout>
            </div>
        )
    }
};