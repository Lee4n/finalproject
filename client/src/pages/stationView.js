import React, { Component } from "react";

class stationView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: this.props.location.state.data
        }
    }

    render() {
        let {data} = this.state
        let name = data.fields.site_name
        let country = data.fields.country
        return(
            <div>
                <p>{name}</p>
                <p>{country}</p>
            </div>
        )
    }
}

export default stationView;