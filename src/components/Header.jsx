import Search from '../features/cities/SearchForm';

const Header = () => {
    return (
        <nav className="navbar bg-primary" >
            <div className="container-fluid">
                <h1 className="navbar-brand mb-0 h1 text-light">Weather Dash</h1>
                <Search />
            </div>
        </nav>
    )
}

export default Header