import styles from '@/styles/Home.module.css'

const Button = (props) => {
  return (
    <button className={styles.flat}>
      {props.children}
    </button>
  )
}

export default Button