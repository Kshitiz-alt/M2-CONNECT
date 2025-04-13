export default function Searchbar() {
    return (
        <div>
            <form className="searchbar" role="search">
                <input className="form-control" type="search" placeholder="Search Song / Playlists" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    )
}
