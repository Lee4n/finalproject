import React, {Component} from "react";
import API from "../utils/API";
import Nav from "../components/Nav";

class stationRating extends Component {

  constructor(props) {
    super(props)
    console.log(props, "PROPS")

    this.state = {
      currentUser: "",
      data: this.props.location
        ? this.props.location.state.data
        : "",
      formData: {
        siteName: this.props.location
          ? this.props.location.state.data.fields.site_name
          : "",
        siteCountry: this.props.location
          ? this.props.location.state.data.fields.country
          : "",
        siteRating: {
          siteRep: "",
          siteLoc: "",
          siteFacilities: "",
          siteSocial: ""
        }
      }
    }
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  componentDidMount() {
    API
      .getCurrentUser()
      .then((results) => {
        this.setState({currentUser: results.data.username})
      })
  }

  handleChange(event) {
    this.setState({
      formData: {
        ...this.state.formData,
        siteRating: {
          ...this.state.formData.siteRating,
          [event.target.id]: event.target.value
        }
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    API.saveRating(this.state.formData)
    this
      .props
      .history
      .goBack()
  }

  render() {
    let {formData} = this.state
    let name = formData.site_name
    let country = formData.country
    return (
      <div>

        <div className="container">
          {name
            ? <form onSubmit={this.handleSubmit}>
                SITE NAME: {name}
                <br/>
                SITE COUNTRY: {country}
                <div>Reputation:
                  <select
                    value={this.state.formData.siteRep}
                    id="siteRep"
                    onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <div>Location:
                  <select
                    value={this.state.formData.siteLoc}
                    id="siteLoc"
                    onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <div>Facilities:
                  <select
                    value={this.state.formData.siteFacilities}
                    id="siteFacilities"
                    onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <div>Social:
                  <select
                    value={this.state.formData.siteSocial}
                    id="siteSocial"
                    onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <input type="submit" value="Submit"/>
              </form>
            : ""
}
        </div>
      </div>

    )
  }
}

export default stationRating;