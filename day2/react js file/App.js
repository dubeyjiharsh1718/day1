import './App.css';
import Person from "./Components/Person";
import Man from "./Components/Man";
import Parent from "./Components/Parent";
import WelcomeMessage from './Components/Welcomemessage';
import Blogpost from './Components/Blogpost';
import LoginForm from './Components/LoginForm';
import AgeCheck from './Components/AgeCheck';
import StudentList from './Components/StudentList';
import NumberList from './Components/NumberList';

function App() {
  return (
  <div className="App">
    <WelcomeMessage></WelcomeMessage>
    <div>
      <WelcomeMessage username="Harsh" />
    </div>
    <StudentList></StudentList>
    <NumberList></NumberList>
    <h2>hello harsh</h2>
    <Person></Person>
    <Man></Man>
    <Parent></Parent>
    <Blogpost />
    <LoginForm></LoginForm>
    <AgeCheck></AgeCheck>
  </div>
  
  );
}

export default App;
