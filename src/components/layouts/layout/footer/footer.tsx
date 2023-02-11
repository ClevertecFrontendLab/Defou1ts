// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';

import { ReactComponent as FacebookIcon } from '../../../../assets/icons/social/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../../../assets/icons/social/instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../../../assets/icons/social/linkedin.svg';
import { ReactComponent as VkIcon } from '../../../../assets/icons/social/vk.svg';
import { Text } from '../../../common/text/text';

import { FooterProps } from './footer.props';

import styles from './footer.module.css';

export const Footer = ({ className, ...props }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <hr className={styles.hr} />
      <Text className={styles.text} type='body' size='l'>
        © 2020-{currentYear} Cleverland. Все права защищены.
      </Text>
      <div className={styles.icons}>
        <a href='facebook.com' target='_blank'>
          <FacebookIcon />
        </a>
        <a href='instagram.com' target='_blank'>
          <InstagramIcon />
        </a>
        <a href='vk.com' target='_blank'>
          <VkIcon />
        </a>
        <a href='linkedin.com' target='_blank'>
          <LinkedinIcon />
        </a>
      </div>
    </footer>
  );
};
