'use strict';

import React, {Component} from 'react';
import {Heading} from 'spectacle';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

export default class extends Component {


    render() {
        return (
            <div>
                <Heading textColor="secondary">
                    <Typist
                        delayGenerator={this.delayGen}
                        avgTypingSpeed={40}
                        startDelay={3000}>
                        BYE BYE
                    </Typist>
                </Heading>

            </div>
        )
    }
}