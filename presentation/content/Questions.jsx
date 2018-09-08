'use strict';

import React, {Component} from 'react';
import {Heading, Image, Text} from 'spectacle';
import images from '../components/images';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

export default class extends Component {

    delayGen(mean, std, {line, lineIdx, charIdx, defDelayGenerator}) {
        if (lineIdx === 0 && charIdx === line.length - 1) {
            return 1250;
        }
        if (lineIdx === 1 && charIdx === line.length - 1) {
            return 1250;
        }
        if (lineIdx === 3 && charIdx === line.length - 1) {
            return 1250;
        }
        return defDelayGenerator(mean + 25);
    }

    render() {
        return (
            <div>
                <Heading textColor="primary">
                    What now?
                </Heading>

                <Text textColor='white'>
                    Questions
                </Text>

                <Image src={images.qna}/>

                <Text textColor='primary'>
                    <Typist
                        delayGenerator={this.delayGen}
                        avgTypingSpeed={40}
                        startDelay={3000}>
                        Thank you for your attention!!
                    </Typist>
                </Text>
            </div>
        )
    }
}