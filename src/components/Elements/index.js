import CSSModules from 'react-css-modules'
import component from './component'
import styles from './styles.css'

export default CSSModules(styles, {allowMultiple: true})(component)
