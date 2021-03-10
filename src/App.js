import React from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    useRouteMatch,
    useParams
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './content.css'
import {
  Nav, Navbar, NavbarBrand,NavLink
} from 'react-bootstrap';

export default function OnlineShop(){
    return (
        <Router>
            <div>
                <Navbar bg="primary" variant="dark">
                    <NavbarBrand>
                        iTechCell
                    </NavbarBrand>
                    <Nav className="mr-auto">
                        <NavLink>
                            <Link className="text-white" to="/home">Main</Link>
                        </NavLink>
                        <NavLink>
                            <Link className="text-white" to="/features">Contact</Link>
                        </NavLink>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <PrivateRoute path="/features">
                        <Features/>
                        <AuthButton />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); 
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function AuthButton() {
    let history = useHistory();
  
    return fakeAuth.isAuthenticated ? (
        <button className="btn btn-danger d-flex m-auto"
          onClick={() => {
            fakeAuth.signout(() => history.push("/home"));
        }}
        >
          Sign out
        </button>
    ) : (
      <p>You are not logged in.</p>
    );
  }

function PrivateRoute({children, ...rest}){
    return(
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated?(
                    children
                ):(
                    <Redirect
                        to={{
                            pathname:"/login",
                            state:{ from: location }
                        }}
                    />
                )
            }
        />
    );
}

function Features(){
    return (
        <div>
            <br/>
            <div className="artikel">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="gambar-artikel">
                            <img src="https://subhsambandh.com/assets/frontend/images/user.png" alt="Gambar Tumbnail Artikel" />
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="konten-artikel">
                            <p></p>
                            <b>Nama   :</b>
                            <div className="judul-artikel">Alfan</div>
                            <b>Alamat Cell:</b>
                            <div className="judul-artikel">JL.tANJUNG</div>
                            <b>Hp :</b>
                            <div className="judul-artikel">08888888</div>
                            <b>EMAIL :</b>
                            <div className="judul-artikel">alfannoufal@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Home(){
    let { path, url } = useRouteMatch();

    return (
        <div>
            <br></br>
            <div>
                <button type="button" className="btn btn-outline-primary" onClick={`${url}/Samsung`}> <Link to={`${url}/Samsung`}>Samsung</Link></button>
                <space></space>
                <button type="button" className="btn btn-outline-primary" onClick={`${url}/Iphone`} align="center"> <Link to={`${url}/Iphone`}>Iphone</Link></button>

                <Switch>
                    <Route exact path={path}>

                    </Route>
                    <Route path={`${path}/:dataId`}>
                        <Homes/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

function Homes(){
    let { dataId } = useParams();

    if(dataId === "Samsung"){
        return(
            <div>
                <h2 align="center">Katalog Samsung</h2>
                <div className="row">
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://images.samsung.com/is/image/samsung/assets/id/p6_gro2/p6_initial_pcd/p6_initial_mobile/feature_benefit_kv_galaxy_m.png?$ORIGIN_PNG$" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">Samsung A1S</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">askdkdkdkkkkkkkkkkkkkkkkkkkkkkkdddddddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://images.samsung.com/is/image/samsung/assets/id/p6_gro2/p6_initial_pcd/p6_initial_mobile/feature_benefit_kv_galaxy_m.png?$ORIGIN_PNG$" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">Samsung nOTE 20</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">askdkdkdkkkkkkkkkkkkkkkkkkkkkkkdddddddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                        <img src="https://images.samsung.com/is/image/samsung/assets/id/p6_gro2/p6_initial_pcd/p6_initial_mobile/feature_benefit_kv_galaxy_m.png?$ORIGIN_PNG$" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">Samsung A1q</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">askdkdkdkkkkkkkkkkkkkkkkkkkkkkkdddddddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                        <img src="https://images.samsung.com/is/image/samsung/assets/id/p6_gro2/p6_initial_pcd/p6_initial_mobile/feature_benefit_kv_galaxy_m.png?$ORIGIN_PNG$" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">Samsung A1A</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">askdkdkdkkkkkkkkkkkkkkkkkkkkkkkdddddddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://images.samsung.com/is/image/samsung/assets/id/p6_gro2/p6_initial_pcd/p6_initial_mobile/feature_benefit_kv_galaxy_m.png?$ORIGIN_PNG$" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">Samsung A11</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">askdkdkdkkkkkkkkkkkkkkkkkkkkkkkdddddddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://images.samsung.com/is/image/samsung/assets/id/p6_gro2/p6_initial_pcd/p6_initial_mobile/feature_benefit_kv_galaxy_m.png?$ORIGIN_PNG$" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">Samsung J1</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">askdkdkdkkkkkkkkkkkkkkkkkkkkkkkdddddddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://images.samsung.com/is/image/samsung/assets/id/p6_gro2/p6_initial_pcd/p6_initial_mobile/feature_benefit_kv_galaxy_m.png?$ORIGIN_PNG$" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">Samsung A1</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">askdkdkdkkkkkkkkkkkkkkkkkkkkkkkdddddddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else if(dataId === "Iphone"){
        return(
            <div>
                <h2 align="center">Katalog Iphone</h2>
                <div className="row">
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://www.carphonewarehouse.ie/CPW/media/2020-Landing-Pages/iphone-12/iphone-12-mini-black-hero.png" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">iphone11</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">askdkdkdkkkkkkkkkkkkkkkkkkkkkkkdddddddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://www.carphonewarehouse.ie/CPW/media/2020-Landing-Pages/iphone-12/iphone-12-mini-black-hero.png" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">iphone12</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">askdkdkdkkkkkkkkkkkkkkkkkkkkkkkdddddddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://www.carphonewarehouse.ie/CPW/media/2020-Landing-Pages/iphone-12/iphone-12-mini-black-hero.png" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">iphone8</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">askdkdkdkkkkkkkkkkkkkkkkkkkkkkkdddddddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://www.carphonewarehouse.ie/CPW/media/2020-Landing-Pages/iphone-12/iphone-12-mini-black-hero.png" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">iphone10</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">askdkdkdkkkkkkkkkkkkkkkkkkkkkkkdddddddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://www.carphonewarehouse.ie/CPW/media/2020-Landing-Pages/iphone-12/iphone-12-mini-black-hero.png" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">iphone11</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">askdkdkdkkkkkkkkkkkkkkkkkkkkkkkdddddddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://www.carphonewarehouse.ie/CPW/media/2020-Landing-Pages/iphone-12/iphone-12-mini-black-hero.png" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">iphone13</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">askdkdkdkkkkkkkkkkkkkkkkkkkkkkkdddddddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://www.carphonewarehouse.ie/CPW/media/2020-Landing-Pages/iphone-12/iphone-12-mini-black-hero.png" alt="Gambar Thumbnail Artikel" className="card-img-top mh-100"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">iphone14</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">askdkdkdkkkkkkkkkkkkkkkkkkkkkkkdddddddddddddddddddddddddddddd</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/"} };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };
  
    return (
        <div className="w-50 text-center cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" class="inner cover">
            <h1 class="cover-heading">Auth.</h1>
            <p class="lead">You must log in to view the page at {from.pathname}</p>
            <p class="lead">
                <button className="btn btn-outline-primary" onClick={login}>Log in</button>
            </p>
            </main>
        </div>
    );
}
