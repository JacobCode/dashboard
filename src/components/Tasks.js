import React, { Component } from 'react';
import '../scss/Tasks.scss';

class Tasks extends Component {
    render() {
        return (
            <div className="Tasks">
                <div id="tasks">
                    <div className="header">
                        <h1>{"Today's Tasks"}</h1>
                    </div>
                    <div className="content">
                        <ul className="unstyled">
                            <li>
                                <div>
                                    <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1" />
                                    <label htmlFor="styled-checkbox-1">Clean office</label>
                                </div>
                                <i className="far fa-trash-alt"></i>
                            </li>
                            <li>
                                <div>
                                    <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value2" />
                                    <label htmlFor="styled-checkbox-2">Write thesis</label>
                                </div>
                                <i className="far fa-trash-alt"></i>
                            </li>
                            <li>
                                <div>
                                    <input className="styled-checkbox" id="styled-checkbox-3" type="checkbox" value="value3" />
                                    <label htmlFor="styled-checkbox-3">Pick up supplies</label>
                                </div>
                                <i className="far fa-trash-alt"></i>
                            </li>
                            <li>
                                <div>
                                    <input className="styled-checkbox" id="styled-checkbox-4" type="checkbox" value="value4" />
                                    <label htmlFor="styled-checkbox-4">Go to the gym</label>
                                </div>
                                <i className="far fa-trash-alt"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tasks;