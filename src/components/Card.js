import React from "react"

export default function Card(props) {
    return (
        <div>
            <div className="card--container">
                <div className="card-img-container">
                    <img className="card--photo" src={props.imageUrl} />
                </div>
                <div className="card--info">
                    <p className="card--maps">
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="card--location">{props.location.toUpperCase()}</span>
                        <a className="card--link" href={props.googleMapsUrl}>View on Google Maps</a>
                    </p>
                    <p className="card--title">{props.title}</p>
                    <p className="card--date">{props.startDate} - {props.endDate}</p>
                    <p className="card-description">{props.description}</p>
                    
                </div>
            </div>
            <hr className="card--hr"/>
        </div>
    )
}