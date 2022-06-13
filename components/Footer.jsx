import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <dvi className={styles.cardL}>
                <h1 className={styles.title}>RELEVANT</h1>
                <h1 className={styles.linkTitle}>
                    
                    <Link href="/contact" passHref>
                    <a>
                    <span className={styles.linkText}>Contact Us</span>
                    <Image src="/img/link.png" width="40px" height="40px" alt="" />
                    </a>
                    </Link>
                    
                </h1>
            </dvi>
            <dvi className={styles.cardS}>
                <div className={styles.cardItem}>
                    41 Moharram Bey St., MOHARRAM BEY <br /> EGYPT
                </div>
                <div className={styles.cardItem}>
                    Example@example.com <br />  20-002-027223763
                </div>
            </dvi>
            <dvi className={styles.cardS}>
                <div className={styles.cardItem}>
                    FOLLOW US:
                    <br />
                   <a href='https://facebook.com' __blank><Image src="/img/facebook.png" width='20px' height="20px"/></a>
                   <a href='https://instagram.com' __blank><Image src="/img/instagram.png" width='20px' height="20px"/></a>
                   <a href='https://Twitter.com' __blank><Image src="/img/twitter.png" width='20px' height="20px"/></a>
                </div>
                <div className={styles.cardItem}>
                   © 2022 COPYRIGHT,
                    <br />
                    ALL RIGHTS RESERVED
                </div>
            </dvi>
        </div>
    );
}

export default Footer