// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import { Banner } from '@palaks-shop/react-shop-common';
import { exampleProducts } from '@palaks-shop/react-shop-common';

const App = () => (
  <>
    <NxWelcome title="react-shop-container" />

    <Banner text="Hello World"></Banner>

    <ul>
      {exampleProducts.map((product) => (
        <li key={product.id}>
          <strong>{product.name}</strong> Price: {product.price}
        </li>
      ))}
    </ul>
  </>
);

export default App;
