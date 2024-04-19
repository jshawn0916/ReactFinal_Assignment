const CardElement = (props) =>{
    return(
        <div className="card" key={props.index}>
            <div className="thumbnail-wrap">
                <img src={props.music.album_cover} className="card-img-top img-rounded" alt="movie-poster"/>
            </div>
            <div className="card-body">
                <h2 className="card-title">{props.music.title}</h2>
                <p className="card-sub">{props.music.artist}</p>
            </div>
        </div>
    )
}

export default CardElement;