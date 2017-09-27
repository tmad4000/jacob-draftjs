import * as React from "react";

import * as d3 from "d3";
import * as _ from "lodash";
// import * as Infinite from "react-infinite";

import D3List from "./D3List"
import * as Immutable from "immutable";


// var Infinite = require("react-infinite");


export interface AppState {
    gestalts: Immutable.OrderedMap<string, { id: string, text: string }>
}


export interface AppProps extends React.Props<App> {
}


export default class App extends React.Component<AppProps, AppState> {

    static currId: number = 0

    constructor(props) {

        super(props);
        this.state = {
            gestalts: Immutable.OrderedMap(_.keyBy(
                _.times(3000, (i) => {
                    return {
                        id: App.GenUID(),
                        text: "hi"
                    }
                }),
                "id"))
        }

        //    this.state = initState

    }

    static GenUID = (): string => {
        return "id" + App.currId++
    }


    render() {

        // <ul id="list">
        //     <Infinite containerHeight={400} elementHeight={20}>
        //         <li height="20">uu</li>
        //     </Infinite>
        // </ul>


        return (<div>
            Title

            <div style={{ "border": "1px solid black", float: "right", width: 200, height: 400 }}>
                <b>State:</b>
                {
                    /*this.state.gestalts.map((g, i) => <div key={i}>{g ? g.text : "ERR"}</div>).toArray() */}
            </div>
            <button onClick={
                () => this.setState((prevState) => {
                    return { gestalts: prevState.gestalts.map((g) => ({ ...g, text: (g ? g.text : "") + "b" })).toOrderedMap() }
                })
            } > mod state </button>

            }
            <D3List
                data={this.state.gestalts.toIndexedSeq().toJS()}

                updateGestalt={(id: string, text: string) => {
                    // console.log(text)
                    this.setState((prevState) => {

                        return {
                            gestalts: prevState.gestalts.set(id, { ...prevState.gestalts.get(id), text: text })
                        }
                    })
                }
                }

                addGestalt={() => this.setState((prevState) => {
                    const newId = App.GenUID()

                    return {
                        gestalts:
                        //    prevState.gestalts.merge(
                        //         Immutable.OrderedMap({
                        //     [newId]:
                        //         {
                        //             id: newId,
                        //             text: "yooooo"
                        //         }
                        //     })
                        //    )
                        Immutable.OrderedMap({
                            [newId]:
                            {
                                id: newId,
                                text: "yooooo"
                            }
                        }).merge(prevState.gestalts)
                    }
                })}
            />


        </div>)


    }
}
