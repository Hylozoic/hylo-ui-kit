import styles from './styles.css'
import CSSModules from 'react-css-modules'
import component from './component'

export default CSSModules(component, styles, {allowMultiple: true})
