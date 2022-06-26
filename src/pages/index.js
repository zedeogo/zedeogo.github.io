import React, { useContext } from 'react';
import Helmet from 'react-helmet';

import { Context } from '../state';
import { Background, DeskArea } from './styles';

import NavBar from '../components/navBar/index';
import NewWindow from '../components/window/index';
import AppsBar from '../components/appsBar/index';

import AppBemVindo from '../apps/bemVindo';

export default function Index() {
    const [state, setState] = useContext(Context);

    const handleClick = id => {
        if (id === 1 || id === '1') {
            if (state.bemVindo === false)
                setState({
                    bemVindo: !state.bemVindo,
                    minBV: !state.minBV
                })
            else
                setState({
                    bemVindo: state.bemVindo,
                    minBV: !state.minBV
                })
        }
    };

    return (
        <div>
            <Helmet>
                <meta charSet='UTF-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-witdh, initial-scale=1.0' />
                <title>zedeogo</title>
                <link rel='shortcut icon' href='/assets/img/svg/favicon.svg' type='image/x-icon' />
            </Helmet>
            <div className='rl z2'>
                <NavBar />
                <AppsBar>
                    <div>
                        <ul>
                            <li>
                                <button onClick={() => handleClick(1)}>
                                    <img src='/assets/img/svg/icon.svg' alt="" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </AppsBar>
                <DeskArea>
                    {state.bemVindo &&(
                        <NewWindow children={<AppBemVindo/>} windowName='zedeogo' windowId='1' windowIcon={<img src='/assets/img/svg/icon.svg' alt='' />} />
                    )}
                </DeskArea>
            </div>
            <Background className='ab z1'>
                <img src='/assets/img/pictures/background.jpg' alt='' />
            </Background>
        </div>
    );
};