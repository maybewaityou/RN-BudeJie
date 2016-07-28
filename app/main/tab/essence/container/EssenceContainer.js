import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../../../framework/redux/actions/Actions';
import { TOPIC_ALL_REFRESH } from '../../../../framework/redux/actions/ActionsType';
import Dimensions from 'Dimensions';
import styles from '../../../../styles/Main';
import { BackButtonComponent } from '../../../components/title/Title';
import EssenceView from '../view/EssenceView';
import TopicType from '../../common/cell/TopicType';
import {
    View
} from 'react-native';

const { width } = Dimensions.get('window');

class EssenceContainer extends Component {
    constructor(props) {
        super(props);

        this.backButtonComponent = this.backButtonComponent.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchData(`a=list&c=data&type=${TopicType.All}`, TOPIC_ALL_REFRESH));
    }

    backButtonComponent() {
        return (
            <BackButtonComponent
                onPress={() => {
                    this.props.toBack();
                }}
            />
        );
    }

    render() {
        const { dispatch, dataList } = this.props;

        if (dataList.length === 0) {
            return (<View />);
        }
        return (
            <EssenceView
                width={width}
                dataList={dataList}
            />
        );
    }
}

EssenceContainer.propTypes = {
    dataList: PropTypes.array,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { networkReducer } = state;
    return {
        dataList: networkReducer.topicAllList
    };
}

export default connect(mapStateToProps)(EssenceContainer);
