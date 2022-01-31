/* eslint-disable arrow-body-style */
import { format, fromUnixTime } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Dimensions, RefreshControl, SafeAreaView, StyleSheet, View } from 'react-native';
import { getFontScale } from 'react-native-device-info';
import { Text, useTheme } from 'react-native-paper';
import { useRecoilValue } from 'recoil';
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview';
import { getBlocks } from '../Api';
import { settingsState } from '../Atoms';
import LoadingComponent from '../components/LoadingComponent';
import PressableCard from '../components/PressableCard';

const LIMIT = 20;
const HEIGHT = 50;

const getLuck = (luck) => {
  if (luck <= 30) {
    return 'Very Lucky';
  }
  if (luck <= 80) {
    return 'Lucky';
  }
  if (luck <= 120) {
    return 'Average';
  }
  if (luck <= 200) {
    return 'Unlucky';
  }
  return 'Very Unlucky';
};

const Item = ({ item, theme, t }) => (
  <PressableCard
    style={{
      marginBottom: 1,
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.colors.itemColor,
    }}
    onTap={() => {}}
  >
    <View style={{ marginHorizontal: 12 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text numberOfLines={1} style={{ color: theme.colors.textLight, fontSize: 13, flex: 1 }}>
          {item.farmed_by.name ? item.farmed_by.name : item.farmed_by.launcher_id}
        </Text>
        <View>
          <Text
            numberOfLines={1}
            style={{ textAlign: 'right', fontSize: 12, color: theme.colors.textGrey }}
          >{`${item.luck}% ( ${getLuck(item.luck)} )`}</Text>
          <Text
            numberOfLines={1}
            style={{ textAlign: 'right', fontSize: 12, color: theme.colors.textGrey }}
          >
            {format(fromUnixTime(item.timestamp), 'PPpp')}
          </Text>
        </View>
      </View>
    </View>
  </PressableCard>
);

const Content = ({ dataState, refresh, state, setState, theme, layoutProvider }) => {
  const rowRenderer = (type, data, index) => (
    <Item
      item={data}
      theme={theme}
      onPress={() => {
        // navigation.navigate({
        //   name: 'Farmer',
        //   params: { data: { launcherId: data.launcher_id, name: data.name } },
        // });
      }}
    />
  );

  const loadMore = () => {
    if (state.hasMore && !state.refreshing) {
      setState((prev) => ({ ...prev, offset: prev.offset + LIMIT, querying: true }));
    }
  };

  return (
    <RecyclerListView
      refreshControl={
        <RefreshControl
          refreshing={state.refreshing}
          onRefresh={() => {
            refresh();
          }}
        />
      }
      // contentContainerStyle={{ paddingBottom: 16, paddingTop: 2 }}
      dataProvider={dataState.dataProvider}
      layoutProvider={layoutProvider}
      rowRenderer={rowRenderer}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      renderFooter={() =>
        state.querying && (
          <Text style={{ padding: 10, fontWeight: 'bold', textAlign: 'center' }}>Loading</Text>
        )
      }
    />
  );
};

const BlocksFoundScreen = () => {
  const theme = useTheme();
  const { width } = Dimensions.get('window');
  const [layoutProvider, setLayoutProvider] = useState();
  const settings = useRecoilValue(settingsState);

  const [state, setState] = useState({
    loading: true,
    refreshing: false,
    querying: false,
    hasMore: true,
    offset: 0,
  });

  const [dataState, setDataState] = useState({
    dataProvider: new DataProvider((r1, r2) => {
      return r1 !== r2;
    }),
    data: [],
  });

  useEffect(() => {
    getFontScale().then((fontScale) => {
      setLayoutProvider(
        new LayoutProvider(
          () => 1,
          (type, dim) => {
            dim.width = width;
            dim.height = HEIGHT * fontScale;
          }
        )
      );
    });
  }, [settings.isThemeDark]);

  useEffect(() => {
    if (state.loading || state.querying || state.refreshing) {
      getBlocks(state.offset, LIMIT).then((response) => {
        setDataState((prev) => ({
          dataProvider: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
            prev.data.concat(response.results)
          ),
          data: prev.data.concat(response.results),
        }));
        setState((prev) => ({
          ...prev,
          loading: false,
          querying: false,
          refreshing: false,
          hasMore: response.results.length === LIMIT,
        }));
      });
    }
  }, [state.loading, state.querying, state.refreshing]);

  if (state.loading) {
    return <LoadingComponent />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.divider }}>
      <Content
        theme={theme}
        dataState={dataState}
        width={width}
        refresh={() => {
          setState((prev) => ({ ...prev, refreshing: true, offset: 0 }));
          setDataState((prev) => ({
            ...prev,
            data: [],
          }));
        }}
        state={state}
        setState={setState}
        layoutProvider={layoutProvider}
      />
    </SafeAreaView>
  );
};

export default BlocksFoundScreen;
