import React from 'react';

import './styles.sass';

type Props = {
  item: string;
}

const Item:  React.FC<Props> = (item) => <p className="item">{item}</p>;

export default Item;
