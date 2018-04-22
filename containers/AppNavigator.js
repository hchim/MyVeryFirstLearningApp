import { connect } from 'react-redux';
import NavigatorWithState from '../components/navigators/RootNavigator';

const mapStateToProps = (state) => {
    return {
        nav: state.nav
    }
};

const AppNavigator = connect(mapStateToProps)(NavigatorWithState);

export default AppNavigator;