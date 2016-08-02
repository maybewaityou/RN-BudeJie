import React, { Component, PropTypes } from 'react';
import Images from '../../../constant/Images';
import Button from '../../../components/Button';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

class CellHotCommentView extends Component {
    render() {
        if (this.props.data.top_cmt.length === 0) {
            return (<View />);
        }
        return (
            <View style={[styles.hotView, this.props.style]}>
                <Text style={styles.commentDes}>最新评论</Text>
                <Text style={styles.comment}>
                    {this.props.data.top_cmt[0].user.username + ' : ' + this.props.data.top_cmt[0].content}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    hotView: {
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    commentDes: {
        fontSize: 16,
    },
    comment: {
        fontSize: 16,
        marginTop: 5,
    }
});

export default CellHotCommentView;
