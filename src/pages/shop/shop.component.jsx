import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview-component.jsx';
import { selectCollections } from '../../redux/shop/shop.selector.js';

// import { ReactComponent } from '*.svg';

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionsProps }) => (
            <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);