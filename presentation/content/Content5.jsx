'use strict';

import React, {Component} from 'react';
import {Heading, Link, Image, Appear, List, ListItem, Text} from 'spectacle';
import images from '../components/images';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

var Slider = require('react-slick');

const styles = {
    fluxImage: {margin: '0px 5px 0px 12px'},
    flux: {color: '#44B74A', fontSize: '52px', position: 'relative', bottom: '15px'},
    primaryColor: '#F03E4C',
    secondaryColor: 'grey'
};

export default class extends Component {
    constructor(props) {
        super(props);
        this._onKeyDown = this._onKeyDown.bind(this);
    }

    state = {
        keystrokes: 0,
        active: null
    };

    componentDidMount() {
        document.addEventListener('keydown', this._onKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this._onKeyDown);
    }

    _onKeyDown = e => {
        let strokes = this.state.keystrokes;
        let _slick = this._slick;
        if (strokes === 0) {
            this.setState({keystrokes: 1});
            return;
        }
        if (strokes === 1) {
            this.setState({active: 0}, ()=> {
                _slick.slickGoTo(0);
                this.setState({keystrokes: 2});
            })
        }
        let prev = this.state.active;
        let active = null;
        // prev
        if (e.which === 37 || e.which === 38) {
            this._slick.slickPrev();
            // e.preventDefault();
            active = prev - 1;
        }
        // next
        else if (e.which === 39 || e.which === 40) {
            this._slick.slickNext();
            active = prev + 1;
        }
    };

    render = () => (
        <div>

            <Heading size={2} margin={10} textColor="primary">
                Unidirectional Data flow with
                <Image width="128px"
                       style={styles.fluxImage}
                       src={images.flux}/>
                <span style={styles.flux}>Flux</span>
            </Heading>

            <Appear>
                <div>
                    <Slider
                        dots={false}
                        infinite={false}
                        ref={(c) => this._slick = c}>

                        <div>
                            <Image
                                height='400px'
                                src={images.fluxGraph}/>
                        </div>
                        <div>
                            <List ordered={true}>
                                <ListItem
                                    textSize="32px"
                                    textColor='#44B74A'>
                                    <strong>Actions</strong>
                                    <Text
                                        textColor={styles.secondaryColor}
                                        textSize="32px"
                                        margin="0px 0px 10px 63px">
                                        are helper methods that facilitate passing data to the Dispatcher
                                    </Text>
                                </ListItem>
                                <ListItem
                                    textSize="32px"
                                    textColor='#44B74A'>
                                    <strong>Dispatcher</strong>
                                    <Text
                                        textColor={styles.secondaryColor}
                                        textSize="32px"
                                        margin="0px 0px 10px 63px">
                                        receives actions and broadcasts payloads to registered callbacks
                                    </Text>
                                </ListItem>
                                <ListItem
                                    textSize="32px"
                                    textColor='#44B74A'>
                                    <strong>Stores</strong>
                                    <Text
                                        textColor={styles.secondaryColor}
                                        textSize="32px"
                                        margin="0px 0px 10px 63px">
                                        containers for application state & logic that have callbacks registered to
                                        the dispatcher
                                    </Text>
                                </ListItem>
                                <ListItem
                                    textSize="32px"
                                    textColor='#44B74A'>
                                    <strong>Controller Views</strong>
                                    <Text
                                        textColor={styles.secondaryColor}
                                        textSize="32px"
                                        margin="0px 0px 10px 63px">
                                        react Components that grab the state from Stores and pass it down
                                        via props to child components
                                    </Text>
                                </ListItem>
                            </List>
                        </div>
                        <div>
                            <Text
                                textSize="32px"
                                textColor='white'>
                                The dispatcher receives actions and dispatches the actions and data to registered
                                callbacks
                            </Text>
                            <Image width="450px" src={images.storesGraph}/>
                        </div>
                        <div>
                            <Text
                                textSize="32px"
                                textColor='white'>
                                MVC vs. FLUX
                            </Text>
                            <Image height='400px'
                                   src={images.mvcVsFlux}/>
                        </div>
                        <div>
                            <Text textColor='white'>
                                <strong>state != props</strong>
                                <br/><br/>
                                props are immutable by the component, state is mutable and "lives" inside the component
                            </Text>
                            <br/>
                            <Text textColor='white'>
                                Both props and state changes trigger a render update
                            </Text>
                        </div>
                        <div>
                            <Text
                                textSize="32px"
                                textColor='white'>
                                Various implementations exist for flux pattern, such as
                                <Link href="http://alt.js.org/">
                                    <Text bold caps textColor="tertiary">alt</Text>
                                </Link>
                                and
                                <Link href="https://github.com/reactjs/redux">
                                    <Text bold caps textColor="tertiary">redux</Text>
                                </Link>
                            </Text>
                        </div>
                    </Slider>
                </div>
            </Appear>
        </div>
    )
}