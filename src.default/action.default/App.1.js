import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import * as postActions from './actions/counter';

// export default connect(mapStateToProps, mapDispatchToProps)(App);
class App extends Component {
  componentDidMount() {
    // 컴포넌트가 처음 마운트 될 때 현재 number 를 postId 로 사용하여 포스트 내용을 불러옵니다.
    // const { number, PostActions } = this.props;
    // api시작
    // this.getPost(number);
    this.props.PostActions.getPostAll();
  }
  componentWillReceiveProps(nextProps) {
    // const { PostActions } = this.props;
    // 현재 number 와 새로 받을 number 가 다를 경우에 요청을 시도합니다.
    // if (this.props.number !== nextProps.number) {
    //   PostActions.getPost(nextProps.number);
    // }
  }
  // methods
  getPostAll = () => {
    const { postActions } = this.props;
    postActions.getPostAll();
  };
  render() {
    const { data, number, loading, error } = this.props;
    return (
      <div>
        <h1>로드</h1>
        <button onClick={e => this.props.PostActions.getPost(1)}>1</button>
        {/*
        주석도우미
        함수형태로 함수를 호출하는게 중요함
      */}
        {data.map(e => {
          return (
            <div key={e.number}>
              <div>{e.teacherName}</div>
              <div>{e.teacherMInfo}</div>
              <div>{e.teacherMImg}</div>
              <div>{e.teacherClass}</div>
              <div>{e.teacherGrade}</div>
              <div>{e.teacherVideo}</div>
              <div>{e.teacherContents}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(
  state => ({
    number: state.counter.number,
    loading: state.counter.pending,
    error: state.counter.error,
    data: state.counter.data,
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch),
  })
)(App);
