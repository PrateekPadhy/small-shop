import styles from './react-shop-common.module.css';

/* eslint-disable-next-line */
export interface ReactShopCommonProps {}

export function ReactShopCommon(props: ReactShopCommonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ReactShopCommon!</h1>
    </div>
  );
}

export default ReactShopCommon;
