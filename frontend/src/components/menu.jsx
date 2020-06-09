import React from 'react';

class Menu extends React.Component {
  constructor(props)  {
    super(props);

    this.state = {
      menu: [
        {
          href: '#bubble',
          text: '[Bubble Sort]',
          class: 'nav-link active'
        },
        {
          href: '#linkedlist',
          text: '[Linked List]',
          class: 'nav-link'
        },
        {
          href: '#gameofstones',
          text: '[Game Of Stones]',
          class: 'nav-link'
        },
        {
          href: '#twitter',
          text: '[Twitter API]',
          class: 'nav-link'
        },
        {
          href: 'https://vandercijr.github.io/oplabcfrontend/',
          text: '[Ydirection Aria Template]',
          class: 'nav-link'
        }
      ]
    }
  }
  render() {
    return  <React.Fragment>
              <nav className="navbar fixed-top navbar-light bg-light">
                <div className="container">
                  <ul className="nav">
                    {
                      this.state.menu.map((item, index) => (
                        <li key={index} className="nav-item">
                          <a className={item.class} href={item.href}>{item.text}</a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </nav>
            </React.Fragment>
  }
}

export default Menu;
