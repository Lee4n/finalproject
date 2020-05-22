import React from "react";

function RatingResults(props) {
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
                    <td>
                        {props.siteName}
                        {props.siteCountry}
                        {props.siteRating.siteRep}
                        {props.siteRating.siteLoc}
                        {props.siteRating.siteFacilities}
                        {props.siteRating.siteSocial}
                    </td>
                </tr>
            </table>

        </div>
    )
}

export default RatingResults;