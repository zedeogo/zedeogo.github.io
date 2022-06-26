import React from 'react';
import Styles from './styles';

const Index = () => {
    return (
        <Styles>
            <header className='w100'>
                <nav className='w100'>
                    <ul className='w100'>
                        <div className='left'>
                            <li><button><img src='/assets/img/svg/icon.svg' alt="" /> <div>zedeogo</div></button></li>
                            <li><button><div>Exp</div></button></li>
                            <li><button><div>Arquivo</div></button></li>
                            <li><button><div>Editar</div></button></li>
                            <li><button><div>Visualizar</div></button></li>
                            <li><button><div>Ir</div></button></li>
                            <li><button><div>Janela</div></button></li>
                            <li><button><div>Ajuda</div></button></li>
                        </div>
                        <div className='right'>
                            <li><button><div>Wifi</div></button></li>
                            <li><button><div>Seg 11:32 AM</div></button></li>
                        </div>
                    </ul>
                </nav>
            </header>
        </Styles>
    );
};

export default Index;