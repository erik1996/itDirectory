import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

export default class Paginate extends React.Component {


    setActivePage(key) {
        if (key >= 0 && key < this.props.pagesCount)
            this.props.setActivePage(key)
    }


    render() {
        const {pagesCount, activePage} = this.props;

        return (
            <Pagination className="company-pagination" aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink onClick={() => {
                        this.setActivePage(activePage - 1)
                    }}>
                        <i className="fas fa-long-arrow-alt-left"></i>
                        Prev
                    </PaginationLink>
                </PaginationItem>
                {
                    Array(pagesCount).fill("").map((val, key) =>
                        <PaginationItem key={key} className={(activePage === key) ? 'activeNumber' : ''}>
                            <PaginationLink onClick={this.setActivePage.bind(this, key)}>
                                {key + 1}
                            </PaginationLink>
                        </PaginationItem>
                    )
                }

                <PaginationItem>
                    <PaginationLink  onClick={() => {
                        this.setActivePage(activePage + 1)
                    }}>
                        Next
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        );
    }
}