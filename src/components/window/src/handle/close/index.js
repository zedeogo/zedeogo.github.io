import React, { useContext } from 'react';
import { Context } from '../../../../../state';

const Close = props => {
    const [state, setState] = useContext(Context);

    const handleClick = id => {
        if (id === 1 || id === '1')
            setState({
                bemVindo: !state.bemVindo,
                minBV: false
            });
    };

    return (
        <button onClick={() => handleClick(props.id)}><img src="/assets/img/svg/close.svg" alt="" /></button>
    )
}

export default Close;