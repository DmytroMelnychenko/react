/*Отримати всіх користувачів з jsonplaceholder, вивести їх.
Біля кожного користувача зробити кнопку, при натисканні
на яку в Апп компоненті з'являються всі пости поточного користувача
Запити робити через axios, організація коду через сервіси*/


import Users from "./components/users/Users";
import {useState} from "react";
import {getUserPosts} from "./components/services/user.api.service";
import Posts from "./components/posts/Posts";
import './App.css'


export default function App() {

    let [posts, setPosts] = useState([]);
    const elevate = (id) => {
      getUserPosts(id).then(({data}) =>{
          setPosts([...data]);
      })
      
    }
    return (<div className={'df'}>
            <div className={'left'}><Users elevate={elevate}/></div>
            <div className={'right'}>
                <Posts posts={posts}/>
            </div>
        </div>
    );
}
