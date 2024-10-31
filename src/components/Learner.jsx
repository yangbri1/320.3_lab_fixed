import Score from './Score.jsx';

// create a functional component
function Learner({bio, name, scores}){
    // creates an entirely new array w/ changes by asynonchronous callback arrow fn on each elem in array
    let scoreList = scores.map((el,index) => {
        // gather score from given data collection
        return(<Score score={el} key={index} />)
    });

    return (
        
        <>
            <h1>{name}</h1>
            <p>{bio}</p>
            <p>{scoreList}</p>
        </>
    );
}

// export default functional component Learner() to root component App()
export default Learner;