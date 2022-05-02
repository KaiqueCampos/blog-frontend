import styles from "./styles.module.scss"

export function Header(){
    return(
        <div className={styles.container}>
            <div className={styles.bar}/>

            <div className={styles.menu_container}>
                <p>Home</p>
                <p>Frontend</p>
                <p>Backend</p>
                <p>Outros</p>
                <p>Home</p>
            </div>
        </div>
    )
}