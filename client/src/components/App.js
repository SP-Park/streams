import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import Header from './Header';
import history from '../history';


const App = () => {
    return (
    <div className="ui container">
        <Router history={history}>
            <div>
                <Header/>
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit/:id" exact component={StreamEdit} />
                <Route path="/streams/delete" exact component={StreamDelete} />
                <Route path="/streams/show" exact component={StreamShow} />
            </div>
        </Router>
    </div>
    )
}

export default App;


// 439815035616-4uo5onbg71q3g98fqqj5i1a2b9tvv833.apps.googleusercontent.com