import styles from "./styles.module.scss"

export function Banner(){
    return(
        <div className={styles.banner}>
            <img className={styles.banner_back} src="https://steamuserimages-a.akamaihd.net/ugc/1678120729579339650/40A46978EF29C7099912D8CA459BBC9FAC764F2E/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"/>
            <div className={styles.banner_logo}>
            <img src="src\component\imgs\Brand.png"/>
            <p>Conteúdos sobre desenvolvimento, tecnologias e muito código</p>
            </div>
        </div>
    )
}