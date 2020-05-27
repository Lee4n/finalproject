import React, { Component } from "react";
import API from "../../utils/API";
import stationRating from "../../pages/stationRating";
import {Link} from "react-router-dom";

class RatingResults extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          ratings: []
        }
      }

      componentDidMount() {
          console.log(this.props.location.state.data)
          let this2 = this
          API.getRating(this.props.location.state.data.fields.site_name).then(function(results) {
              console.log(results.data)
              console.log(this2.state)
              this2.setState({
                ratings: results.data
              })
          })
      }

    render(){
        // let {siteName, siteCountry} = this.state.formData
        // let {siteRep, siteLoc, siteFacilities, siteSocial} = this.state.formData.siteRating
        
        let ratings = [] 
        this.state.ratings.map((index) => {
            console.log(index)
            ratings.push(
            <td>
            SiteName: {index.siteName}
            siteCountry: {index.siteCountry}
            siteRep: {index.siteRating[0].siteRep}
            siteLoc: {index.siteRating[0].siteLoc}
            siteFacilities: {index.siteRating[0].siteFacilities}
            siteSocial: {index.siteRating[0].siteSocial}
            </td>
            ) }
        )

        return(
            <div>
             {/* siteName: {type: String},
            siteCountry: {type: String},
            siteRating: {
                    siteRep: {type: Number},
                    siteLoc: {type: Number},
                    siteFacilities: {type: Number},
                    siteSocial: {type: Number} */}
            <table>
                <tr>
                    <td>
                        Rating
                    </td>
                    <td>
                        Comments
                    </td>
                </tr>
                <tr>
                    {ratings}
                </tr>
            </table>
            <stationRating/>
            <Link to={{pathname: "/editRatings", state: {data: this.props.location.state.data}}}>
                <button type="button">
                    Rate Me!
                </button>
            </Link>
        </div>
        )
    }
}

export default RatingResults;