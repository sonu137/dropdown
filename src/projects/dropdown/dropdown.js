import React, {useState, useEffect, useRef} from 'react'
import {
    IconArrow,
    IconBell,
    IconBolt,
    IconCaret,
    IconChevron,
    IconCog,
    IconMessenger,
    IconPlus
} from './icons/index'
import {CSSTransition} from 'react-transition-group';

function App() {
    return (
      <Navbar>
        <NavItem icon={<IconPlus />} />
        <NavItem icon={<IconBell />} />
        <NavItem icon={<IconMessenger />} />
  
        <NavItem icon={<IconCaret />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
    );
  }
  
  function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    );
  }
  
  function NavItem(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>
  
        {open && props.children}
      </li>
    );
  }
  
  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
  
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem
              leftIcon={<IconCog />}
              rightIcon={<IconChevron />}
              goToMenu="settings">
              Settings
            </DropdownItem>
            <DropdownItem
              leftIcon="🦧"
              rightIcon={<IconChevron />}
              goToMenu="animals">
              Animals
            </DropdownItem>
  
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'settings'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<IconArrow />}>
              <h2>My Tutorial</h2>
            </DropdownItem>
            <DropdownItem leftIcon={<IconBolt />}>HTML</DropdownItem>
            <DropdownItem leftIcon={<IconBolt />}>CSS</DropdownItem>
            <DropdownItem leftIcon={<IconBolt />}>JavaScript</DropdownItem>
            <DropdownItem leftIcon={<IconBolt />}>Awesome!</DropdownItem>
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'animals'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main" leftIcon={<IconArrow />}>
              <h2>Animals</h2>
            </DropdownItem>
            <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
            <DropdownItem leftIcon="🐸">Frog</DropdownItem>
            <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
            <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }

export default App
