import { ButtonInterface } from "../../../DTO/DTO-ui-components/button.dto"
import styles from './Button.module.scss';
export const Button: React.FC<ButtonInterface> = (props) => {
  const { classNames, children, onClick } = props;

  console.log(classNames);

  return (
    <button className={styles['button']} onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}