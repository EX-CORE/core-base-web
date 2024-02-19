import './App.css';
import './component/Review'
import Review from "./component/Review";
import Login from "./component/Login";

function App() {
    return (
        <div className="App">
            <Login/>
            {/*<Review title='밸런스 하반기 평가'*/}
            {/*        surveyPeriod={{startDate: '2023.12.31', endDate: '2024.01.01'}}*/}
            {/*        reviewPeriod={{startDate: '2023.12.31', endDate: '2024.01.01'}}*/}
            {/*        state={{code:'TEMP', text:'진행 예정'}}*/}
            {/*        />*/}
            {/*<header className="App-header">*/}
            {/*  /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}
        </div>
    );
}

export default App;
