import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Redux 관련 불러오기
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';

//React-redux Provider
import { Provider } from 'react-redux';

//React router v4
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//<Route path="/" component={AppContainer} /> - 이걸 페이지의 헤더파일로 해놓으면 굉장히 편리하겠다.

//base css
import './index.css'

//Example import
import { Main, Login, Register, Write, Detail, Board, Statics } from 'containers'
import { Error404 } from 'components'
//Example import end

import {ToastContainer} from 'react-toastify'

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ToastContainer
                    autoClose={3000}
                    position="bottom-center"
                />
                <Switch>
                    <Route path='/404' component={Error404} />
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path="/write/:board" component={Write}/>
                    <Route path='/detail/:board/:id' component={Detail}/>
                    <Route path='/board/:board' component={Board} />
                    <Route path='/admin-status' component={Statics}/>
                    <Route exact path="/" component={Main} />
                    <Redirect to='/404' />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
