import { Provider } from 'jotai';
import RadioButton from './RadioButton';
import AmountButton from './AmountButton';

function App() {
  return (
    <Provider>
      <div>
        <RadioButton />
        <AmountButton />
      </div>
    </Provider>
  );
}

export default App;