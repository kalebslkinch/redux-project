import { useSelector, useDispatch } from "react-redux";
import { changeUsersName } from "./redux/actions/changeUsersName";
import { changeUsersAge } from "./redux/actions/changeUsersAge";
import "./App.css";
import { useState } from "react";
import { changeUsersLikesDogs } from "./redux/actions/changeUsersLikesDogs";

function App() {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [likesDogs, setLikesDogs] = useState(user.likesDogs)

  return (
    <div style={{display: 'flex', flexDirection: 'column'}} className="App">
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>Likes Dogs: {user.likesDogs ? 'Yes they do': 'Nope, sorry'}</h1>
      <hr></hr>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(changeUsersName(name));
          dispatch(changeUsersAge(age));
          dispatch(changeUsersLikesDogs(likesDogs));
        }}
      >
        {/* Name */}
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Change name"
        />
        {/* Age */}
        <input
          onChange={(e) => setAge(e.target.value)}
          placeholder="Change age"
        />
        {/* Likes Dogs */}
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}} className="">
          <h3>Like Dogs ?</h3>
        <div style={{display: 'flex', flexDirection: 'row', margin:'0 auto'}} className="">
          <label style={{fontSize: '16px'}}>True</label>
          <input
            onChange={(e) => setLikesDogs(true)}
            placeholder="Change Likes Dogs"
            type='checkbox'
          />

          <label style={{fontSize: '16px'}}>False</label>
          <input
            onChange={(e) => setLikesDogs(false)}
            placeholder="Change Likes Dogs"
            type='checkbox'
          />
        </div>
        </div>
        <input type="submit" value="Change user details" />
      </form>
    </div>
  );
}

export default App;
