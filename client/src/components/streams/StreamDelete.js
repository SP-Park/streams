import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';


class StreamDelete extends React.Component {

    componentDidMount() {
        // console.log(this.props)
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions() {

        const id =this.props.match.params.id;

        return (
            // React.Fragment: div 태그 없이 html 요소를 전달할 수 있으면서 dom에 아무런 영향을 끼치지 않음 
            <React.Fragment>
            {/* <>  <React.Fragment> 축약형으로 사용가능하나 권장 안함*/}
                <button 
                    onClick={() => this.props.deleteStream(id) } 
                    className="ui button negative"
                >
                    Delete
                </button>
                <Link to='/' className="ui button">Cancle</Link>
            {/* </> */}
            </React.Fragment>
            )
    }

    renderContent() {
        if(!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete this stream with title: ${this.props.stream.title}?`
    }

    render() {
        // if(!this.props.stream) {
        //     return <div>Loading ...</div>
        // }
        return (
                <Modal 
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            )
        }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}


export default connect (mapStateToProps, { fetchStream, deleteStream })(StreamDelete);