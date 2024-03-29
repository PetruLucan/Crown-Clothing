import React from "react";
import { connect } from "react-redux";


import { selectCollection } from "../../redux/shop/shop.selector";

import './collection.styles.scss';

const CollectionPage = ({ collection }) => (
    <div className='collection-page'>
        <h2>Collection Page</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

