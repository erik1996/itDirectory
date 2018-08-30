import React, {Component} from 'react'
import {Link} from 'react-router'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            'path': {
                '/home': 'HOME',
                '/companies': "COMPANIES",
                '/categories': "CATEGORIES",
                '/blog': "BLOG",
                '/contact': "CONTACT"
            }
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const paths = this.state.path;
        const currentPath = this.props.currentPath;
        return (
            <div id="menu" className="row">

                <div>
                    <Navbar light expand="md">
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {
                                    Object.keys(paths).map((val, key) => (
                                        <NavItem key={key}>
                                                <NavLink tag={Link} to={val} className={(currentPath === val) ? "active menu-items" : "menu-items"}>{paths[val]}</NavLink>
                                        </NavItem>
                                    ))
                                }
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>

        )
    }

}
