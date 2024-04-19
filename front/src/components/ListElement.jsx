const ListElement = (props) => {
    return(
        <div className="list" key={props.list.id}>
            <div className="thumbnail-wrap">
                <img src={props.list.list_cover} className="img-top img-rounded" alt="movie-poster"/>
            </div>
            <div className="list-body">
                <div className="list-main-wrap">
                    <div className="list-title-wrap">
                        <div className="list-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FB586A" className="w-6 h-6">
                                <path fill-rule="evenodd" d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="list-title">{props.list.title}</h2>
                    </div>
                    <div className="track-wrap">
                        {props.list.tracks.map((track,index) => (
                            <p className="track-title" key={index}>- {track}</p>
                        ))}
                    </div>
                </div>
                <p className="list-sub">
                    Made by
                    <span className="user-name">{props.list.user}</span>
                </p>
            </div>
        </div>
    )
}

export default ListElement;