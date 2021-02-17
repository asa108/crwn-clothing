import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/collection-peview/collection-peview.component";

const ShopPage = ({ collectios }) => (
  <div className="shop-name">
    {collectios.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
    
const mapStateToProps = createStructuredSelector({
  collectios: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
