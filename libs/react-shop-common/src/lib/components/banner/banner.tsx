import styles from './banner.module.css';

export interface BannerProps {
  text: string;
}

export const Banner = ({ text }: BannerProps) => (
  <div className={styles['container']}>
    <header>{text}</header>;
  </div>
);

export default Banner;
