import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends PureComponent {

    componentWillMount() {
        this.props.fetchFeature();
    }

    renderFeature() {
        return this.props.features.map(feature => {
            return <li key={feature}>{feature}</li>;
        })
    }

    render() {
        if (!this.props.features) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h4>Dashboard</h4><small> </small>
                <ul>
                    {this.renderFeature()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { features: state.features.homePageFeatures }
}

export default connect(mapStateToProps, actions)(Feature);
