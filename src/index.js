import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Clock />
                <Toggle />
            </div>
        );
    }
}

class Menu extends React.Component {
    menu = (
        <ul className={'menu'}>
            <li><a href="first">First page</a></li>
            <li><a href="first">Second page</a></li>
            <li><a href="first">Third page</a></li>
        </ul>
    );

    render() {
        return this.menu;
    }
}

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Включено' : 'Выключено'}
            </button>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);