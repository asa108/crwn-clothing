import React from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-peview/collection-peview.component";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collectios: SHOP_DATA,
    };
  }

  render() {
    const { collectios } = this.state;
    return (
      <div className="shop-name">
        {collectios.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
