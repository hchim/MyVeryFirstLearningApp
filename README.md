# About `My Very First Learning App`

# Notes

Replace the follow method in DrawerSidebar to temperarily fix the navigation problem.

```
  _onItemPress = ({ route, focused }) => {
    if (!focused) {
      let subAction;
      this.props.navigation.dispatch(NavigationActions.navigate({
        routeName: route.routeName,
        params: undefined,
        action: subAction
      }));
    }
  };
```