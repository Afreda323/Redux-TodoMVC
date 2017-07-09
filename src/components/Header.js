import React, { Component } from 'react';
import TodoInput from './TodoInput'
class Header extends Component {
    render() {
        return (
            <header className="header">
				<h1>todos</h1>
                <TodoInput />
			</header>
        );
    }
}

export default Header;