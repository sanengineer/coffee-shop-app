import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {
  IconContainer,
  IconTextNav,
  ListText,
  ModalCenterTwoButton,
  Space,
} from '../../components';
import { IconArrowRight, ImageProfileSan } from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';
import { Touchable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const Profile = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const get_user_profile = useSelector(state => state.get_user_profile.data);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const logout = () => {
    AsyncStorage.multiRemove([
      'user_token',
      'user_profile',
      'user',
      'user_register',
      'user_login',
      'cart_id',
      'token',
    ])
      .then(() => {
        toggleModal();
      })
      .then(() => {
        navigation.reset({ index: 0, routes: [{ name: 'Start Screen' }] });
      });
  };

  return (
    <SafeAreaView style={styles.containerStack}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subContainerStack}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Account')}>
            <View style={styles.avaNameEmailContainer}>
              <View style={styles.avaContainer}>
                <Image source={ImageProfileSan} style={styles.avatar} />
              </View>
              <Space height={10} />
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{get_user_profile.name}</Text>
              </View>
              <Space height={6} />
              <View style={styles.emailContainer}>
                <Text style={styles.email}>{get_user_profile.email}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <Space height={50} />
          <View style={styles.mainContainer}>
            <IconTextNav
              icon="🍃"
              text="Bio"
              onPress={() => navigation.navigate('Bio')}
            />

            <IconTextNav
              icon="🚚"
              text="Shipping"
              onPress={() => navigation.navigate('Shipping')}
            />

            <IconTextNav
              icon="🔐"
              text="Security"
              onPress={() => navigation.navigate('Security')}
            />
            <Space height={63} />

            <IconTextNav
              icon="🤝"
              text="Help"
              onPress={() => navigation.navigate('Help')}
            />
            <IconTextNav
              icon="🌡"
              text="Terms and Conditions"
              onPress={() => navigation.navigate('Term Condition')}
            />

            <Space height={30} />

            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
              <TouchableOpacity onPress={toggleModal}>
                <View style={{ alignItems: 'center', padding: 20 }}>
                  <Text
                    style={{
                      fontFamily: 'CircularStd-Bold',
                      color: 'red',
                      fontSize: 16,
                    }}>
                    Logout
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <Space height={30} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'CircularStd-Book',
                  fontSize: 12,
                  color: '#888',
                }}>
                Version Alpha 1.0.0
              </Text>
            </View>
            <Space height={30} />
          </View>
        </View>
      </ScrollView>
      <ModalCenterTwoButton
        isVisible={isModalVisible}
        onPressYes={logout}
        onPressNo={toggleModal}>
        <Text style={styles.modalTitle}>
          Are you sure for out from this account?
        </Text>
      </ModalCenterTwoButton>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  containerStack: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    // paddingTop: 20,
  },
  subContainerStack: {
    paddingTop: 30,
    paddingBottom: 10,
  },
  avaNameEmailContainer: {
    // flexDirection: 'column',
    // alignContent: 'center',
  },
  avaContainer: {
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 38,
    width: 100,
    height: 100,
  },
  nameContainer: {
    alignItems: 'center',
  },
  name: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 16,
  },
  emailContainer: {
    alignItems: 'center',
  },
  email: {
    fontFamily: 'CircularStd-Book',
    fontSize: 12,
  },
  modalTitle: {
    fontFamily: 'CircularStd-Book',
    fontSize: 16,
    textAlign: 'center',
  },
});
