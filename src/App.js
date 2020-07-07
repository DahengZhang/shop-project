import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import Navigator from './components/navigator/Navigator'

const Home = lazy(() => import('./pages/Home'))
const ShopCar = lazy(() => import('./pages/ShopCar'))
const Mine = lazy(() => import('./pages/Mine'))

export default function App () {
    return (
        <div className="app">
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/shop-car" component={ShopCar} />
                    <Route path="/mine" component={Mine} />
                </Switch>
            </Suspense>
            <Navigator />
        </div>
    )
}
