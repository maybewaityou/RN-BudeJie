import React, { Component, PropTypes } from 'react';
import styles from '../../../../styles/Main';
import Images from '../../../constant/Images';
import Button from '../../../components/Button';
import {
    View,
    Text,
    Image
} from 'react-native';

class CellTopView extends Component {
    render() {
        return (
            <View style={[styles.container, { backgroundColor: 'white', alignItems: 'flex-start' }]}>
                <View style={{ flexDirection: 'row',  marginTop: 10, marginLeft: 10, height: 50, width: this.props.width - 20 }}>
                    <Image source={{uri: this.props.data.profile_image}} style={{ backgroundColor: 'blue', borderRadius: 25, width: 50, height: 50 }}/>
                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, flex: 1 }}>{this.props.data.name}</Text>
                        <Text style={{ fontSize: 14, flex: 1 }}>{this.props.data.created_at}</Text>
                    </View>
                    <Button
                        image='cellmorebtnnormal'
                        highlightImage='cellmorebtnclick'
                        imageStyle={{ width: 24, height: 20 }}
                        style={{ position: 'absolute', right: 0 }}
                        onPress={this.props.onPress}
                    />
                </View>
                <Text style={{ fontSize: 16, marginTop: 10, marginLeft: 10, marginRight: 10, width: this.props.width - 20 }}>{this.props.data.text}</Text>
            </View>
        );
    }
}

export default CellTopView;
