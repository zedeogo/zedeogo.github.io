import React, { useState, useContext } from 'react';
import { Context } from '../../state';
import { WindowChildrenContent, WindowContent, WindowBar, WindowBarIcons, WindowIcon } from './styles';

import Close from './src/handle/close/index';

const Index = (props) => {
    const initialSize = {
        width: 'fit-content',
        height: 'fit-content'
    };

    const [state, setState] = useContext(Context);
    const [resized, setResized] = useState(true)
    const [width, setWidth] = useState(initialSize.width);
    const [height, setHeight] = useState(initialSize.height);

    const handleClick = id => {
        if (id === 1 || id === '1') {
            setState({
                bemVindo: state.bemVindo,
                minBV: !state.minBV
            })
        }
    };

    const NewWindowBar = (props) => {
        return (
            <WindowBar>
                <ul>
                    <WindowIcon>
                        <p>{(props.windowName)}</p>
                        {props.windowIcon}
                    </WindowIcon>
                    <WindowBarIcons>
                        <li><Close id={props.windowId} /></li>
                        <li><button onClick={_ => {
                            if (resized === true) {
                                setWidth('100vw');
                                setHeight('100vh');
                                setResized(!resized);
                            } else {
                                setWidth(initialSize.width);
                                setHeight(initialSize.height);
                                setResized(!resized);
                            }
                        }}><img src="/assets/img/svg/resize.svg" alt="" /></button></li>
                        <li><button onClick={() => handleClick(props.windowId)}><img src="/assets/img/svg/minimize.svg" alt="" /></button></li>
                    </WindowBarIcons>
                </ul>
            </WindowBar>
        );
    };

    return (
        <WindowContent>
            {state.minBV && (
                <WindowChildrenContent style={{width: width, height: height}}>
                    <NewWindowBar windowName={ props.windowName } windowIcon={ props.windowIcon } windowId={ props.windowId } />
                    <div className="content">{props.children}</div>
                </WindowChildrenContent>
            )}
        </WindowContent>
    );
};

export default Index;