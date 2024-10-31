// import useState() hook from React library (many other hooks from here too except "useImmer()", "useReducer()")
import { useState } from 'react';
// introduce custom styling to App.jsx
import './App.css';
// bring in given dataset in order to render learner info below
import learners from './utilities/data.mjs';
// import Learner component
import Learner from './components/Learner';

// root component App()
function App() {
  // initialize "learnerData" to "{ learners: learners }" --- this format casts data into object {}
  // such that "setLearnerData" updates "learnerData" 
  const [learnerData, setLearnerData] = useState({ learners: learners });
  
  // .learners is the data within array
  /* Aside: setting key to an arbitary "index" bypasses "Warning: Each child in a list should have a unique "key" prop." -- temporarily
   should technically be an unique ObjectId "_id" -- as "index" may vary upon different environments */
  let learnerList = learnerData.learners.map((el, index) => {
    // pass down key-value pairs (properties)
    return(<Learner name={el.name} bio={el.bio} scores={el.scores} key={index} />);
  });

  return (
    // renders learner information in inquired format
    <>
      <h1>Learner Component</h1>
      <p>{learnerList}</p>
        
    </>
  );
}

// export App to DOM (be displayed)
export default App
