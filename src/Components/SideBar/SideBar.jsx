import styles from './sidebar.module.css'
const SideBar = () => {
    return (
        <div className={styles.sidebarContainer}>
            <ul>
                <li className={styles.sidebaritems}>Home</li>
                <li className={styles.sidebaritems}>Calender</li>
                <li className={styles.sidebaritems}>Categories</li>
                <li className={styles.sidebaritems}>Favorite</li>
            </ul>
        </div>
    )
}

export default SideBar
