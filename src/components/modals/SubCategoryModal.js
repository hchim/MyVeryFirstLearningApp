import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import Modal from "react-native-modal";
import SubCategoryButton from '../home/SubCategoryButton';
import { connect } from 'react-redux';
import ResponsiveComponent from '../ResponsiveComponent';
import Platform from '../../utils/Platform';
import { dismissModal } from '../../actions';
import { NavigationActions } from 'react-navigation';

/**
 * This modal shows the subcategories in the home screen.
 */
class SubCategoryModal extends ResponsiveComponent {

    render() {
        const Categories = this.props.subCats;
        const rows = []
        const colNum = this.state.orientation == Platform.PORTRAIT ? 4 : 6;
        const rowNum = Math.ceil(Categories.length / colNum);

        for (let i = 0; i < rowNum; i++) {
            const cols = []
            for (let j = 0; j < colNum; j++) {
                const index = i * colNum + j;
                if (index >= Categories.length) {
                    break;
                }

                const cat = Categories[index];
                cols.push(
                    <SubCategoryButton key={j.toString()}
                                       text={cat.name}
                                       icon={cat.icon}
                                       onClick={() => {this.props.onSubCategorySelected(cat)}} />
                )
            }

            rows.push(
                <View key={i.toString()} style={styles.row}>
                    {cols}
                </View>
            )
        }
        return (
            <Modal isVisible={this.props.isVisible} animationIn="fadeIn" animationOut="fadeOut">
                <TouchableWithoutFeedback onPress={() => this.props.onDismissModal()}>
                    <View style={styles.container}>
                        {rows}
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

SubCategoryModal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    subCats: PropTypes.array.isRequired,
    onDismissModal: PropTypes.func.isRequired,
    onSubCategorySelected: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    }
});

/**************************************************************************
 * Container
 **************************************************************************/

const mapStateToProps = state => {
    return {
        isVisible: state.home.modalVisible,
        subCats: state.home.selectedCategories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDismissModal: () => {
            dispatch(dismissModal());
        },
        onSubCategorySelected: (category) => {
            //dismiss modal
            dispatch(dismissModal());
            //navigate to SingleScreen
            dispatch(NavigationActions.navigate({
                routeName: 'Single', params: {category: category}
            }));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubCategoryModal);