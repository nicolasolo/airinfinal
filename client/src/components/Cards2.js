import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProva2, deleteProva2 } from '../actions/prova2Actions';
import PropTypes from 'prop-types';


class Cards2 extends Component {

    componentDidMount() {
        this.props.getProva2();

    }

    onDeleteClick = id => {
        this.props.deleteProva2(id);
    };



    render() {

        const { prova2 } = this.props.prova2;

        return (
            <div className="col-md-6" >
                {prova2.map(({ _id, name, description }) => (


                    <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-danger">PRova2</strong>
                            <h4 class="mb-0">{name}</h4>
                            <div class="mb-1 text-muted">Nov 11</div>
                            <p class="mb-auto">{description}</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>



                    </div>


                ))}
            </div>

        );
    }



}

Cards2.propTypes = {
    getProva2: PropTypes.func.isRequired,
    prova2: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    prova2: state.prova2
});


export default connect(mapStateToProps, { getProva2, deleteProva2 })(Cards2);