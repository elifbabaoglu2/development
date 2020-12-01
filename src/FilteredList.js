import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import DisplayList from './DisplayList.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.updateCart = this.updateCart.bind(this);
        this.onSelectFilterSize = this.onSelectFilterSize.bind(this);
        this.onSelectPriceRange = this.onSelectPriceRange.bind(this);
        this.onSelectSorted = this.onSelectSorted.bind(this);
        this.state = {
            colorgroup: 'Select Color Group',
            priceRange: 'Select Price Range',
            sorted: 'Sort By',
            cart: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            totalSpending: 0,
        };
    }
    onSelectFilterSize = (event) => {
        this.setState({
            colorgroup: event,
        });
    };

    matchesColorGroup = (item) => {
        // all items should be shown when no filter is selected
        if (
            this.state.colorgroup === 'All' ||
            this.state.colorgroup === 'Select Color Group'
        ) {
            return true;
        } else if (this.state.colorgroup === item.colorgroup) {
            return true;
        } else {
            return false;
        }
    };

    onSelectPriceRange = (event) => {
        this.setState({
            priceRange: event,
        });
    };

    matchesPriceRange = (item) => {
        // all items should be shown when no filter is selected
        if (
            this.state.priceRange === 'All' ||
            this.state.priceRange === 'Select Price Range'
        ) {
            return true;
        } else if (this.state.priceRange === item.priceRange) {
            return true;
        } else {
            return false;
        }
    };

    onSelectSorted = (event) => {
        this.setState({
            sorted: event,
        });
    };

    sortBy(list, currState) {
        if (currState === 'Price Low to High') {
            return list.sort((a, b) => {
                return a.price - b.price;
            });
        }
        if (currState === 'Price High to Low') {
            return list.sort((a, b) => {
                return b.price - a.price;
            });
        }
        if (currState === 'Popularity') {
            return list.sort((a, b) => {
                return a.Popularity - b.Populariy;
            });
        } else {
            return list;
        }
    }

    updateCart(index, operations) {
        if (operations === 'clear') {
            this.state.cart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            this.state.totalSpending = 0;
        }
        if (operations === 'remove' && this.state.cart[index] > 0) {
            this.state.totalSpending =
                this.state.totalSpending - this.props.list[index].price;
            this.state.cart[index] = this.state.cart[index] - 1;
        }
        if (operations === 'removeAll') {
            this.state.totalSpending =
                this.state.totalSpending -
                this.props.list[index].price * this.state.cart[index];
            this.state.cart[index] = 0;
        }
        if (operations === 'add') {
            this.state.cart[index] = this.state.cart[index] + 1;
            this.state.totalSpending =
                this.state.totalSpending + this.props.list[index].price;
        }
        this.setState({
            totalSpending: this.state.totalSpending,
            cart: this.state.cart,
        });
    }

    render() {
        return (
            <div>
                <HeaderBar
                    colorgroup={this.state.colorgroup}
                    priceRange={this.state.priceRange}
                    sorted={this.state.sorted}
                    onSelectFilterSize={this.onSelectFilterSize}
                    onSelectPriceRange={this.onSelectPriceRange}
                    onSelectSorted={this.onSelectSorted}
                />

                <div id='headboard'>
                    <div
                        style={{
                            margin: 30,
                            borderColor: 'pink',

                            borderBottom: '2px solid red',
                        }}
                    >
                        <Container>
                            <h1
                                style={{
                                    fontFamily: 'Courier-bold',
                                }}
                            >
                                Lipsticks
                            </h1>
                            <p
                                style={{
                                    fontFamily: 'Courier',
                                }}
                            >
                                Shop the best lipsticks now. You don't even have
                                to pay! Use the filtering and sorting options to
                                find your all time favorite lipsticks!
                            </p>
                        </Container>
                    </div>
                </div>
                <DisplayList
                    list={this.sortBy(
                        this.props.list
                            .filter(this.matchesColorGroup)
                            .filter(this.matchesPriceRange),
                        this.state.sorted
                    )}
                    allLipsticks={this.props.list}
                    updateCart={this.updateCart}
                    cart={this.state.cart}
                    totalSpending={this.state.totalSpending}
                />
            </div>
        );
    }
}

class HeaderBar extends Component {
    render() {
        return (
            <div style={{ flexDirection: 'row-reverse' }}>
                <Navbar bg='dark' variant='dark'>
                    <Nav className='mr-auto'>
                        <NavDropdown
                            title={this.props.colorgroup}
                            id='nav-dropdown'
                            style={{
                                fontFamily: 'Courier',
                            }}
                        >
                            <NavDropdown.Item eventKey='disabled' disabled>
                                Select Color Group
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                eventKey='All'
                                onSelect={this.props.onSelectFilterSize}
                            >
                                All
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='Red'
                                onSelect={this.props.onSelectFilterSize}
                            >
                                Red
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='Pink'
                                onSelect={this.props.onSelectFilterSize}
                            >
                                Pink
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='Nude'
                                onSelect={this.props.onSelectFilterSize}
                            >
                                Nude
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title={this.props.priceRange}
                            id='nav-dropdown'
                            style={{
                                fontFamily: 'Courier',
                            }}
                        >
                            <NavDropdown.Item eventKey='disabled' disabled>
                                Select Price Range
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                eventKey='All'
                                onSelect={this.props.onSelectPriceRange}
                            >
                                All
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='less than 10'
                                onSelect={this.props.onSelectPriceRange}
                            >
                                less than 10
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='10-15'
                                onSelect={this.props.onSelectPriceRange}
                            >
                                10-15
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='15-20'
                                onSelect={this.props.onSelectPriceRange}
                            >
                                15-20
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='25 and above'
                                onSelect={this.props.onSelectPriceRange}
                            >
                                25 and above
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title={this.props.sorted}
                            id='nav-dropdown'
                            style={{
                                fontFamily: 'Courier',
                            }}
                        >
                            <NavDropdown.Item eventKey='disabled' disabled>
                                Sort By
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                eventKey="Don't Sort"
                                onSelect={this.props.onSelectSorted}
                            >
                                Don't Sort
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='Price Low to High'
                                onSelect={this.props.onSelectSorted}
                            >
                                Price Low to High
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='Price High to Low'
                                onSelect={this.props.onSelectSorted}
                            >
                                Price High to Low
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                eventKey='Popularity'
                                onSelect={this.props.onSelectSorted}
                            >
                                Popularity
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Brand
                        style={{
                            fontFamily: 'Courier',
                        }}
                        href='#home'
                    >
                        Beautiful Lipsticks
                    </Navbar.Brand>
                    `
                </Navbar>
            </div>
        );
    }
}

export default FilteredList;
