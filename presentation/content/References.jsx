'use strict';

import React, {Component} from 'react';
import {List, ListItem, Link, Text} from 'spectacle';

const common = {
    linkColor: '#00d8ff',
    linkSize: '48px',
    descSize: '32px',
    descColor: '#fcfcfc'

};

export default class extends Component {
    render() {
        return (
            <div>
                <List
                    textColor={common.descColor}>
                    <ListItem textSize={common.descSize}>
                        <Link
                            textColor={common.linkColor}
                            href="https://facebook.github.io/react">
                            React
                        </Link> => Official Page
                    </ListItem>
                    <ListItem textSize={common.descSize}>
                        <Link
                            textColor={common.linkColor}
                            href="https://github.com/ReactTraining/react-router">
                            React Router
                        </Link> => Powerful Router component
                    </ListItem>
                    <ListItem textSize={common.descSize}>
                        <Link
                            textColor={common.linkColor}
                            href="https://github.com/enaqx/awesome-react">
                            Awesome React
                        </Link> => List of react components
                    </ListItem>
                    <ListItem textSize={common.descSize}>
                        <Link
                            textColor={common.linkColor}
                            href="https://github.com/brillout/awesome-react-components">
                            Awesome React Components
                        </Link> => Yet another list of react components
                    </ListItem>
                    <ListItem textSize={common.descSize}>
                        <Link
                            textColor={common.linkColor}
                            href="http://www.material-ui.com">
                            Material UI
                        </Link> => Set of UI components based on Material Design
                    </ListItem>
                    <ListItem textSize={common.descSize}>
                        <Link
                            textColor={common.linkColor}
                            href="https://github.com/react-toolbox/react-toolbox">
                            React Toolbox
                        </Link> => Set of UI components
                    </ListItem>
                    <ListItem textSize={common.descSize}>
                        <Link
                            textColor={common.linkColor}
                            href="https://reactionic.github.io/">
                            React IONIC
                        </Link> => IONIC + React = love
                    </ListItem>
                    <ListItem textSize={common.descSize}>
                        <Link
                            textColor={common.linkColor}
                            href="https://www.codementor.io/reactjs/tutorial/reactjs-vs-angular-js-performance-comparison-knockout">
                            Performance Test
                        </Link> => React vs Angular vs Knockout
                    </ListItem>
                    <ListItem textSize={common.descSize}>
                        <Link
                            textColor={common.linkColor}
                            href="https://www.codementor.io/reactjs/tutorial/reactjs-vs-angular-js-performance-comparison-knockout">
                            Community Comparison
                        </Link> => React vs Angular(I&II) vs Ember
                    </ListItem>
                </List>
                <Text>
                    Demo: <Link textColor='white'
                                href='https://github.com/alicoding/react-webpack-babel'>Boilerplate</Link>
                </Text>
            </div>
        )
    }
};