/* eslint-disable react/jsx-props-no-spreading */
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React, { useCallback, useContext, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Divider, Drawer, Switch, Text, TouchableRipple, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwsomeIcons from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import CustomDrawerSection from './CustomDrawerSection';
import ThemeContext from '../contexts/ThemeContext';
import { getFarmer } from '../Api';
import { themeState } from '../Atoms';

const CustomDrawerContent = (props) => {
  const { navigation, launcherIDsArray } = props;
  const theme = useTheme();
  const { t } = useTranslation();

  const [isThemeDark, setIsThemeDark] = useRecoilState(themeState);

  const toggleTheme = () => {
    setIsThemeDark(!isThemeDark);
  };

  const font = theme.fonts.medium;
  //   console.log(launcherIDsArray);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 16,
          alignItems: 'center',
          height: 24,
        }}
      >
        <Image style={{}} source={require('../images/openchia_icon.png')} />
        <Text
          style={{
            color: theme.colors.text,
            ...font,
            fontSize: 18,
            marginLeft: 24,
            fontWeight: '600',
            fontFamily: 'OpenSans-Regular',
          }}
        >
          OPENCHIA.IO
        </Text>
      </View>
      <Divider style={{ backgroundColor: 'black' }} />
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <CustomDrawerSection style={{}}>
          <DrawerItem
            label={t('navigate:home')}
            onPress={() => navigation.navigate('Home')}
            labelStyle={{ color: theme.colors.text }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="home-outline" size={size} color={theme.colors.text} />
            )}
          />
          <DrawerItem
            label={t('navigate:stats')}
            onPress={() => navigation.navigate('Stats')}
            labelStyle={{ color: theme.colors.text }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="finance" size={size} color={theme.colors.text} />
            )}
          />
          <DrawerItem
            label="Netspace"
            onPress={() => navigation.navigate('Netspace')}
            labelStyle={{ color: theme.colors.text }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="finance" size={size} color={theme.colors.text} />
            )}
          />
          <DrawerItem
            label={t('navigate:farmers')}
            onPress={() => navigation.navigate('Farmers')}
            labelStyle={{ color: theme.colors.text }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="silo" size={size} color={theme.colors.text} />
            )}
          />
          <DrawerItem
            label={t('navigate:blocksFound')}
            onPress={() => navigation.navigate('Blocks Found')}
            labelStyle={{ color: theme.colors.text }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="shape-square-plus"
                size={size}
                color={theme.colors.text}
              />
            )}
          />
          <DrawerItem
            label={t('navigate:payouts')}
            onPress={() => navigation.navigate('Payouts')}
            labelStyle={{ color: theme.colors.text }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="cash-multiple" size={size} color={theme.colors.text} />
            )}
          />
        </CustomDrawerSection>
        <CustomDrawerSection title="Launcher ID's">
          {launcherIDsArray.map((item) => (
            <DrawerItem
              labelStyle={{ color: theme.colors.text }}
              key={item.name}
              label={item.value ? item.value : item.name}
              onPress={() => {
                navigation.navigate({ name: 'Farmer Details', params: { launcherId: item.name } });
                // getFarmer(item.name)
                //   .then((data) => {
                //     navigation.navigate({ name: 'Farmer Details', params: { item: data } });
                //   })
                //   .catch((error) => console.log(error));
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="silo" size={size} color={theme.colors.text} />
              )}
            />
          ))}
          <DrawerItem
            label={t('navigate:launcherID')}
            onPress={() => navigation.navigate('Scan Launcher ID')}
            labelStyle={{ color: theme.colors.text }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="plus" size={size} color={theme.colors.text} />
            )}
          />
        </CustomDrawerSection>
        <CustomDrawerSection label="Preferences">
          <TouchableRipple onPress={() => toggleTheme()}>
            <View style={styles.preference}>
              <MaterialCommunityIcons name="theme-light-dark" size={24} color={theme.colors.text} />
              <Text style={{ color: theme.colors.text, flex: 1, marginStart: 32 }}>
                {t('navigate:darkMode')}
              </Text>
              <View pointerEvents="none">
                <Switch value={isThemeDark} />
              </View>
            </View>
          </TouchableRipple>
          {/* <DrawerItem
            label="Dark Theme"
            onPress={() => navigation.navigate('Home')}
            labelStyle={{ color: theme.colors.text }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="cog" size={size} color={theme.colors.text} />
            )}
          /> */}
        </CustomDrawerSection>
        <CustomDrawerSection showDivider={false}>
          <DrawerItem
            label={t('navigate:settings')}
            onPress={() => navigation.navigate('Settings')}
            labelStyle={{ color: theme.colors.text }}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="cog" size={size} color={theme.colors.text} />
            )}
          />
        </CustomDrawerSection>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  preference: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default CustomDrawerContent;