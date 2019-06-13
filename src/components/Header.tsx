import * as React from 'react';

interface IPrpos {
    name?: string;      //amb el ? indiquem que el nom es opcional (pot ser undefined)
}

const Header: React.FunctionComponent<IPrpos> = (props: IPrpos) => (
    <h1>Welcome to {props.name}!</h1>
);

Header.defaultProps = {
    name: 'world',
};

export default Header;


