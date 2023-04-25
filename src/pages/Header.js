import React from 'react';

const Header = () => {
    return (
        <div className={'header'}>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <a href="#">Home</a>
                <a href="#">Movies</a>
            </div>
            <div>
                <button>search<input type="text"/></button>
            </div>
        </div>
    );
};

export default Header;