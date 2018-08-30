import React, {Component} from 'react'
import {
    Row, Col, Container, FormGroup, Form, Label, CustomInput, Input
} from 'reactstrap';

export default class Search extends Component {

    render() {

        const childComponent = this.props.childComponent;

        return (
            <Container className="searchContainer">
                <Row>
                    <Col lg="3" className="leftMenu">

                        <Form className="twoBlocks firstBlock">
                            <Col>
                                <FormGroup>
                                    <Label for="exampleCheckbox">Date Posted</Label>
                                    <div>
                                        <CustomInput type="radio" id="exampleCustomRadio" name="customRadio"
                                                     label="Select this custom radio"/>
                                        <CustomInput type="radio" id="exampleCustomRadio1" name="customRadio"
                                                     label="Or this one"/>
                                        <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio"
                                                     label="But not this disabled one"/>
                                        <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio"
                                                     label="Or this one"/>
                                        <CustomInput type="radio" id="exampleCustomRadio4" name="customRadio"
                                                     label="But not this disabled one"/>
                                        <CustomInput type="radio" id="exampleCustomRadio5" name="customRadio"
                                                     label="Or this one"/>
                                        <CustomInput type="radio" id="exampleCustomRadio6" name="customRadio"
                                                     label="But not this disabled one"/>
                                    </div>
                                </FormGroup>
                            </Col>
                        </Form>

                        <Form className="twoBlocks secondBlock">
                            <Col>

                                <FormGroup>
                                    <Label for="exampleSearch">Search</Label>
                                    <Input type="search" name="search" id="exampleSearch"
                                           placeholder="Search..."/>
                                </FormGroup>
                                <FormGroup>
                                    <div className="catCheckboxScroll">
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox"
                                                     label="First checkbox"/>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one"/>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox3"
                                                     label="But not this disabled one"/>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Or this one"/>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox5"
                                                     label="But not this disabled one"/>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox6" label="Or this one"/>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox7"
                                                     label="But not this disabled one"/>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox8" label="Or this one"/>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox9"
                                                     label="But not this disabled one"/>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox10" label="Or this one"/>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox11"
                                                     label="But not this disabled one"/>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox12" label="Or this one"/>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox13"
                                                     label="But not this disabled one"/>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox14" label="Or this one"/>
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox15"
                                                     label="But not this disabled one"/>
                                    </div>
                                </FormGroup>
                            </Col>
                        </Form>
                    </Col>
                    <Col lg="9">
                        <Row>
                            <Col className="sortByBlock">
                                <FormGroup row>
                                    <Label for="exampleSelect" sm="auto">Select</Label>

                                    <Col sm="auto">
                                        <Input type="select" name="select" id="exampleSelect">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </Col>
                                    <Col sm="auto">
                                        <Input type="select" name="select" id="exampleSelect">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                            </Col>

                        </Row>
                        <div>
                        {childComponent}
                        </div>
                    </Col>
                </Row>
            </Container>
        )
            ;
    }
}

