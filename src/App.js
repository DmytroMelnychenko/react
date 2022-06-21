/*2. Створити компонент який описує персонажа
(властивості id,name,status,species,gender,image) з цього апі
https://rickandmortyapi.com/
    https://rickandmortyapi.com/api/character
        Створити 6 персонажів*/

import './App.css';
import Character from "./components/Character";

function App() {
  return (
    <div>
        <Character
            id={'22'}
            name={'Aqua Rick'}
            status={'unknown'}
            species={'Humanoid'}
            gender={'Male'}
            picture={'https://rickandmortyapi.com/api/character/avatar/22.jpeg'}
        />

        <Character
            id={'119'}
            name={'Evil Rick'}
            status={'Dead'}
            species={'Humanoid'}
            gender={'Male'}
            picture={'https://rickandmortyapi.com/api/character/avatar/119.jpeg'}
        />

        <Character
            id={'173'}
            name={'Jan-Michael Vincent'}
            status={'Alive'}
            species={'Human'}
            gender={'Male'}
            picture={'https://rickandmortyapi.com/api/character/avatar/173.jpeg'}
        />

        <Character
            id={'220'}
            name={'Mega Fruit Farmer Rick'}
            status={'Alive'}
            species={'Human'}
            gender={'Male'}
            picture={'https://rickandmortyapi.com/api/character/avatar/220.jpeg'}
        />

        <Character
            id={'323'}
            name={'Slaveowner'}
            status={'Dead'}
            species={'Human'}
            gender={'Male'}
            picture={'https://rickandmortyapi.com/api/character/avatar/323.jpeg'}
        />

        <Character
            id={'585'}
            name={'Bartender'}
            status={'Alive'}
            species={'Human'}
            gender={'Female'}
            picture={'https://rickandmortyapi.com/api/character/avatar/585.jpeg'}
        />


    </div>
  );
}

export default App;



/*1. Описати всю сім'ю сімпсонів (5 персонажів)*/
