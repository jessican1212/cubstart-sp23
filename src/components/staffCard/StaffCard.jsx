import styles from './page.module.css'

function StaffCard(props) {
    return (
    <div className={styles.card}>
        <div className={styles.top}>
            <div className={styles.outline}><img src={props.content.image}></img></div>
            <div className={styles.right}>
                <h2>{props.content.name}</h2>
                <h3>{props.content.title}</h3>
                <i>{props.content.social}</i>
            </div>
        </div>
        <div className={styles.bottom}>
            <p>{props.content.description}</p>
        </div>
    </div>
    );
}

export default StaffCard;
