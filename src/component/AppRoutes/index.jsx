import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "../ProtectedRoute"
import Dashboard from "../../layout/Dashboard"
import Products from "../../layout/Products"
import NotFound from "../../layout/NotFound"
import Home from "../../layout/Home"
import User from "../../layout/User"
import Search from "../../layout/Search"
import Login from "../../layout/Login"
import { NewProducts } from "../../layout/NewProducts"
import { FeaturedProducts } from "../../layout/FeaturedProducts"
import Signup from "../../layout/Signup"

export const AppRoutes= ({isAuthenticated,handleLogin}) => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/user/:userId' element={<User />} />
            <Route path='/search' element={<Search/>} />
            <Route path='/login' element={<Login onLogin={handleLogin}/>} />
            <Route path='/Signup' element={<Signup onLogin={handleLogin}/>} />
            <Route
                path='/dashboard'
                element= {
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Dashboard/>
                    </ProtectedRoute>
                }
                />
                <Route path='/products' element={<Products />}>
                <Route
                index
                element={
                    <strong
                    style={{
                        textAlign:'center',
                        display:'flex',
                        justifyContent:'center',
                        fontSize:'16px'
                    }}
                    >
                        Select a category
                    </strong>
                }
                />
                <Route path='featured' element={<FeaturedProducts />} />
                <Route path='new' element={<NewProducts/>} />
                </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
    

    
