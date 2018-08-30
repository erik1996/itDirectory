import React, {Component} from 'react'
import {Link} from 'react-router'
import {Button, Row} from 'reactstrap';

export default class HeaderTools extends Component {


    render() {
        return (
            <Row id="headerTools">
                <Button className="btn-yell d-inline-block">Post Company</Button>
                <div className="d-inline-block sign-in-up">
                    <span>
                        <Button color="link" className="sign-in-up-buttons">
                            <Link to="/signup">
                                <i className="fas fa-key"> Sign up</i>
                            </Link>
                        </Button>
                    </span>
                    <span>

                        <Button color="link" className="sign-in-up-buttons">
                            <Link to="/login">
                                <i className="fas fa-sign-in-alt"> Login</i>
                            </Link>
                        </Button>
                    </span>
                </div>
            </Row>
        );
    }
}