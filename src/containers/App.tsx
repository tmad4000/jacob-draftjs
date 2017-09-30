import * as React from "react";
import MyEditor from "./MyEditor"
import MyInput from "./MyInput"
// import EntityEditor from "./EntityEditor"


export interface AppState {
    txt: string
}


export interface AppProps extends React.Props<App> {
}


export default class App extends React.Component<AppProps, AppState> {

    constructor(props) {
        super(props)
        this.state = { txt: "pollen" }
    }


    render() {


        return (<div>
            <input type="text" value={this.state.txt}
                onChange={(evt) => this.setState({ txt: evt.currentTarget.value })} />
            <button onClick={() => this.setState((prevState) => {
                return { txt: prevState.txt + "yo" }
            })
            }> yo </button>
            <MyEditor />

        </div>)


    }
}
