import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';


class Cards extends Component {

    componentDidMount() {
        this.props.getItems();

    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    };



    render() {

        const { items } = this.props.item;

        return (
            <div className="col-md-6" >
                                {items.map(({ _id, name, description }) => (

                
                <div className=" border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success">Design</strong>
                            <h4 className="mb-0">{name}</h4>
                            <div className="mb-1 text-muted">Nov 11</div>
                                                <p className="mb-auto">{description}</p>
                            <a href="#" className="stretched-link">Continue reading</a>
                        </div>
                        


                    </div>
               
            
))}
            </div>

        );
}



}

Cards.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});


export default connect(mapStateToProps, { getItems, deleteItem })(Cards);