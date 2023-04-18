import React from 'react';
import { Container } from './components/ui/container/Cointainer';
import { FormAddUser } from './components/form/form-add-user/FormAddUser';
import { FormAddUserState } from './DTO/DTO-forms/form-add-user.dto';

const App: React.FC = () => {
  const getFormData = (state: FormAddUserState) => {
    console.log(state);
  };

  return (
    <div className="App">
      <Container children={<FormAddUser callback={getFormData}/>}/>
    </div>
  );
}

export default App;
