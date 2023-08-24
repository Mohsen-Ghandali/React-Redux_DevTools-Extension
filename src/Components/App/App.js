import { Provider } from "react-redux";
import store from "../../Redux/Store"
import Counter from "../Counter/Counter";
import Age from "../Age/Age";

const App = () => {
    return (
        <>
            <Provider store={store} >
                <Counter />
                <Age/>
            </Provider>
        </>
    );
}

export default App;