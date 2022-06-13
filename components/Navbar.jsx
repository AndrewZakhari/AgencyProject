import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleClick = ( ) => {
        if(open === true){
            setOpen(false)
        }else if( open === false){
            setOpen(true)
        }
    }
    return (
        <div className={styles.container}>
            <Link  href="/">
            <a className={styles.brand}>RELEVANT</a>
            </Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/products/design">DESIGN</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/development">
                    DEVELOPMENT
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/production">PRODUCTION</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/photography">PHOTOGRAPHY</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/contact">CONTACT</Link>
                </li>
                
            </ul>
            <div className={styles.hamburger} onClick={handleClick}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <ul onClick={handleClick} className={styles.menu} style={{display: open ? "flex" : "none",}}>
                 <li className={styles.menuItem}>
                    <Link href="/products/design">DESIGN</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/development">
                    DEVELOPMENT
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/production">PRODUCTION</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/photography">PHOTOGRAPHY</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/contact">CONTACT</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar