import React, {} from 'react';
import LinkWrapper from './LinkWrapper';


const Header = () => {
    return(
        <nav>
            <div className="nav-wrapper" >
            <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>Gestão de Frotas</LinkWrapper>
            <ul id="nav-mobile" className="right">
                <li><LinkWrapper to='/veiculos'>Veículos</LinkWrapper></li>
                <li><LinkWrapper to='/motoristas'>Motoristas</LinkWrapper></li>
                <li><LinkWrapper to='/viagens'>Viagens</LinkWrapper></li>
            </ul>
            </div>
        </nav>
    );
}

export default Header;