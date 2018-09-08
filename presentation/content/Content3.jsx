'use strict';

import React, {Component} from 'react';
import {Text, CodePane, Layout, Fill, Heading} from 'spectacle';

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
            <Text
                textColor={common.secondaryColor}
                textSize="32px"
                margin="0px 0px 10px 85px">A simple Hello, World example</Text>

            <Layout>
                <Fill>
                    <Heading size={5} textColor="secondary" bgColor="white" margin={10}>
                        React Component
                    </Heading>

                    <CodePane
                        lang="jsx"
                        textSize='18px'
                        style={{margin: '0 5px 0 5px'}}
                        source={require('raw-loader!../assets/helloworld.example')}/>

                </Fill>
                <Fill>
                    <Heading size={5} textColor="secondary" bgColor="white" margin={10}>
                        Compiled Javascript
                    </Heading>
                    <CodePane
                        lang="jsx"
                        textSize='18px'
                        style={{margin: '0 5px 0 5px'}}
                        source={require('raw-loader!../assets/helloworld-compiled.example')}
                    />
                </Fill>
            </Layout>
        </div>
    )
}