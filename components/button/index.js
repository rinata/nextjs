import styles from '@/styles/Home.module.css'

const Button = ({ children, style = 'outline', ...props}) => {
  const styles = {
    flat: 'bg-transparent text-blue-700 font-semibold py-2 px-4',
    pill: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
    outline: 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
  }
  return (
    <button className={styles[style]} {...props}>
      {children}
    </button>
  )
}

export default Button