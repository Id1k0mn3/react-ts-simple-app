import { useReducer } from 'react';
import { Button } from '../../ui/button/Button';
import styles from './FormAddUser.module.scss';
import stylesButton from '../../ui/button/Button.module.scss';
import { FormAddUserInterface, FormAddUserState } from '../../../DTO/DTO-forms/form-add-user.dto';

export const FormAddUser: React.FC<FormAddUserInterface> = ({ callback }) => {
 
  const initialState: FormAddUserState = {
    name: '',
    age: '',
  }

  enum FieldTypesKind {
    NAME = 'name',
    AGE = 'age',
  }

  interface FieldTypes {
    type: FieldTypesKind,
    payload: string | boolean,
  }

  const reducer = (state: FormAddUserState, action: FieldTypes): FormAddUserState => {
    switch (action.type) {
      case FieldTypesKind.NAME:
        return {
          ...state,
          [FieldTypesKind.NAME]: action.payload as string,
        }
      case FieldTypesKind.AGE:
        return {
          ...state,
          [FieldTypesKind.AGE]: action.payload as string,
        }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    callback(state);
  }

  return (
    <form action="" className={styles['form-add-user']}>
      <div className={styles['form-add-user__control']}>
        <label
          htmlFor="name"
          className={styles['form-add-user__label']}>
            Input name
        </label>
        <input 
          type="text"
          className={styles['form-add-user__field']}
          id="name"
          value={state.name}
          name={FieldTypesKind.NAME}
          onChange={(event) => dispatch({type: FieldTypesKind.NAME, payload: event.target.value})}
        />
      </div>
      <div className={styles['form-add-user__control']}>
        <label 
          htmlFor="age"
          className={styles['form-add-user__label']}>
            Input age
        </label>
        <input 
          type="number"
          className={styles['form-add-user__field']}
          id="age"
          value={state.age}
          name={FieldTypesKind.AGE}
          onChange={(event) => dispatch({type: FieldTypesKind.AGE, payload: event.target.value})}
        />
      </div>
      <Button 
        onClick={submitForm}
        children={<span className={stylesButton['button__text']}
      >submit</span>}/>
    </form>
  );
}