import { Contract, Rules } from 'components';

import { TermsProps } from './terms.props';

import styles from './terms.module.css';

export const TermsPage = ({ contentView }: TermsProps) => (
    <section className={styles.bookPage}>{contentView === 'rules' ? <Rules /> : <Contract />}</section>
);
