import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collection-overview.style.scss";

const CollectionOverview = ({ collectios }) => (
  <div className="collection-overview">
    {collectios.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collectios: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
