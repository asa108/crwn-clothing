import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-peview/collection-peview.component";

import "./collection-overview.style.scss";

const CollectionOverview = ({ collectios }) => (
  <div className="collection-overview">
    {collectios.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collectios: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
