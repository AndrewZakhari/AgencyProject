import Circle from '../components/Circle';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
    
            <h1 className={styles.title} >
                GET IN TOUCH
            </h1>
            <form className={styles.form} >
                <input className={styles.inputS} type="text" placeholder="Username"/>
                <input className={styles.inputS} type="number" placeholder="Phone"/>
                <input className={styles.inputL} type="email" placeholder="Email"/>
                <input className={styles.inputL} placeholder="Subject"/>
                <textarea className={styles.textArea} placeholder="Message" rows={6} />
                <button className={styles.button}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Contact