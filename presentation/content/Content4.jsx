'use strict';

import React, {Component} from 'react';
import {Appear, Heading, CodePane, BlockQuote, Quote} from 'spectacle';

const common = {
    componentDiv: {width: '90%', color: 'white', fontSize: 'large'},
    exampleDiv: {width: '99%', marginTop: '35px'},
    smallQuote: {fontSize: 'larger'}
};

class HelloMessage extends Component {
    render() {
        return <div style={common.componentDiv}>Hello, {this.props.name}</div>;
    }
}

export default class extends Component {
    render = () => (
        <div>
            <Heading size={4} textColor="secondary" bgColor="white" margin={10}>
                A simple Hello, World example
            </Heading>

            <Appear style={common.exampleDiv}>
                <div>

                    <CodePane
                        lang="jsx"
                        textSize='20px'
                        source='<HelloMessage name="World">'/>

                    <br/>

                    <HelloMessage name='World'/>

                </div>
            </Appear>

            <Appear style={common.exampleDiv}>
                <div
                    style={common.exampleDiv}>

                    <CodePane
                        lang="jsx"
                        textSize='20px'
                        source='<HelloMessage name="Milky Way">'/>

                    <br/>

                    <HelloMessage name='Milky Way'/>

                </div>
            </Appear>

            <Appear>
                <div style={common.exampleDiv}>

                    <br/>

                    <CodePane
                        lang="jsx"
                        textSize='20px'
                        source={require('raw-loader!../assets/helloworld-mini.example')}/>

                    <br/>

                    <BlockQuote>
                        <Quote style={common.smallQuote}>Reusable Components, via props</Quote>
                    </BlockQuote>
                </div>
            </Appear>

        </div>
    )
}