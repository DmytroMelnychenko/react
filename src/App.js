/*1. Описати всю сім'ю сімпсонів (5 персонажів)*/

import './App.css';
import SimpsFamily from "./components/Character";

function App() {
  return (
    <div>
        <SimpsFamily
            name={'Homer Simpson'}
            age={'45'}
            lorem={'lorem ksd lkfnvfjdnv fkjvsnfvd skfndksnfnsnf sfnj'}
            picture={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}

        />
        <SimpsFamily
            name={'Marge Simpson'}
            age={'35'}
            lorem={'lorem ksd lkfnvfjdnv fkjvsnfvd skfndksnfnsnf sfnj'}
            picture={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}

        />
        <SimpsFamily
            name={'Bart Simpson'}
            age={'15'}
            lorem={'lorem ksd lkfnvfjdnv fkjvsnfvd skfndksnfnsnf sfnj'}
            picture={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}

        />
        <SimpsFamily
            name={'Lisa Simpson'}
            age={'8'}
            lorem={'lorem ksd lkfnvfjdnv fkjvsnfvd skfndksnfnsnf sfnj'}
            picture={'https://static.wikia.nocookie.net/simpsons/images/f/fa/185px-Lisa_Simpson2.png'}

        />
        <SimpsFamily
            name={'Maggie Simpson'}
            age={'2'}
            lorem={'lorem ksd lkfnvfjdnv fkjvsnfvd skfndksnfnsnf sfnj'}
            picture={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}

        />


    </div>
  );
}

export default App;
