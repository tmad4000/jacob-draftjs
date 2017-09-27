import * as React from "react";
import MyEditor from "./MyEditor"


export interface AppState {
}


export interface AppProps extends React.Props<App> {
}


export default class App extends React.Component<AppProps, AppState> {



    render() {


        return (<div>



<MyEditor />

        </div>)


    }
}
