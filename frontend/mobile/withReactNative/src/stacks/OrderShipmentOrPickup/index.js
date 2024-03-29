import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  Border,
  Button,
  IconContainer,
  IconText,
  IconTextNav,
  ModalBottom,
  ModalCenterTwoButton,
  NavHeader,
  Space,
  TextButtonRow,
  TextSubtext,
} from '../../components';
import {
  CoffeeCup,
  IconAngleLeftBig,
  IconChevronDown,
  IconChevronUp,
  IconPercentBig,
  IconTrashGrey,
  LogoGojek,
  LogoGrab,
} from '../../assets';
import TouchableScale from 'react-native-touchable-scale';

const data_address = [
  {
    shipping_id: 1,
    name_shipping: 'home',
    receiver_name: 'san home',
    street: 'espresso street',
    number: '20',
    city: 'gotham',
    province: 'middle earth',
    postal_code: '10902',
    main_address: true,
  },
];
const data_product = [
  {
    product_id: 1,
    name: 'Double Shoot Iced Shaken Espresso',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    weight: {
      value: 250,
      unit: 'ml',
    },
    size: 'medium',
    price: 30000,
    stock: 20,
    image: CoffeeCup,
    category: 'Coffee',
    promo: true,
    // num_rate: 10,
  },
  {
    product_id: 2,
    name: 'Carramel Machiato - 250ml',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    weight: {
      value: 250,
      unit: 'ml',
    },
    size: 'short',
    price: 12000,
    stock: 10,
    image: CoffeeCup,
    category: 'Coffee',
    promo: false,

    // num_rate: 30,
  },
];

const store_address = {
  name_store: 'HQ Store',
  street: 'Becker Street',
  number: 222,
  city: 'Liverpool',
  province: 'North Uk',
  postal_code: '482908',
};
const data = data_address[0];

const CouponBadge = () => {
  return (
    <View style={styles.couponBadgeContainer}>
      <IconPercentBig />
      <Space width={10} />
      <TextSubtext
        midHeight={2}
        text="You Can Save"
        textFam="CircularStd-Bold"
        textSize={14}
        subtext="Rp. 30.000"
        subtextSize={10}
        subtextFam="CircularStd-Book"
      />
    </View>
  );
};

const NavHeaderOrder = ({
  expandableOption,
  expand,
  selectPickup,
  pickup,
  navigation,
}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        paddingBottom: 10,
        paddingTop: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
      }}>
      {/*
    /*
    /* First Row
    /*
    */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.iconBackNavContainer}>
            <IconAngleLeftBig />
          </View>
        </TouchableOpacity>
        <View
          style={
            {
              // backgroundColor: 'orange'
            }
          }>
          <Text
            style={{
              fontFamily: 'CircularStd-Bold',
              fontSize: 18,
              textTransform: 'capitalize',
              paddingVertical: 10,
              textAlign: 'center',
            }}>
            {pickup ? 'Pickup' : 'Shipment'}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: null,
          }}>
          <TouchableOpacity
            onPress={expand}
            style={{
              // backgroundColor: 'orange',
              paddingHorizontal: 6,
              paddingVertical: 5,
            }}>
            {expandableOption ? <IconChevronUp /> : <IconChevronDown />}
          </TouchableOpacity>
        </View>
      </View>
      <Space height={expandableOption ? 10 : 0} />

      {/*
    /*
    /* Second Row
    /*
    */}
      <View
        style={{
          paddingVertical: expandableOption ? 10 : 0,
          height: expandableOption ? null : 0,
        }}>
        <TouchableScale onPress={selectPickup}>
          <Text
            style={{
              fontFamily: 'CircularStd-Bold',
              fontSize: 18,
              textTransform: 'capitalize',
              paddingVertical: expandableOption ? 16 : 0,
              textAlign: 'center',
              // backgroundColor: 'grey',
              opacity: 0.4,
            }}>
            {pickup ? 'Shipment' : 'Pickup'}
          </Text>
        </TouchableScale>
      </View>
    </View>
  );
};

const CardProduct = () => (
  <View style={styles.cardOrderItemContainer}>
    <View style={styles.firstRowCardOrderItem}>
      <Image
        source={data_product[0].image}
        style={{ height: 80, width: 80, borderRadius: 10 }}
      />
      <View style={styles.titleDescProduct}>
        <Text style={styles.titleProduct}>{data_product[0].name}</Text>
        <Text style={styles.descProduct}>{data_product[0].desc}</Text>
      </View>
    </View>
    <View style={styles.secondRowCardOrderItem}>
      <TextSubtext
        alignItems="flex-end"
        text="Rp. 30.000"
        textSize={12}
        textFam="CircularStd-Bold"
        midHeight={2}
        subtext="per item"
        subtextSize={10}
        subtextFam="CircularStd-Book"
      />
    </View>
    <Space height={20} />
    <View style={styles.thirdRowCardOrderItem}>
      <Text style={styles.subtotalTitle}>Subtotal</Text>
      <View style={styles.subtotalPriceDropdownContainer}>
        <Text style={styles.subtotalPrice}>Rp. 900.000</Text>
        <Space width={10} />
        <TouchableOpacity>
          <IconContainer>
            <IconChevronDown />
          </IconContainer>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const ModalBottomOrder = ({
  isVisible,
  onBackdropPress,
  onPress,
  onPressGojek,
  closeModal,
}) => {
  //debug
  console.log('CLOSE_MODAL:', closeModal);
  console.log('ONPRESS_GOJEK:', onPressGojek);

  return (
    <ModalBottom
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      label="Close"
      onPress={onPress}
      textButtonSize={14}>
      <TouchableOpacity
        style={styles.touchModalShipment}
        onPress={() => {
          onPressGojek();
          // closeModal();
        }}>
        <IconContainer>
          <LogoGojek />
        </IconContainer>
        <View style={styles.rowModalContainer}>
          <IconText
            showIcon={false}
            text="Same Day"
            width={0}
            textSize={14}
            paddingX={0}
          />
          <Text style={styles.textShipmentPrice}>Rp 30.000</Text>
        </View>
      </TouchableOpacity>

      <Border height={1} />
      <TouchableOpacity style={styles.touchModalShipment}>
        <Space height={10} />
        <IconContainer>
          <LogoGrab />
        </IconContainer>
        <View style={styles.rowModalContainer}>
          <IconText
            showIcon={false}
            text="Same Day"
            width={0}
            textSize={14}
            paddingX={0}
          />
          <Text style={styles.textShipmentPrice}>Rp 30.000</Text>
        </View>
      </TouchableOpacity>
    </ModalBottom>
  );
};

const OrderPickup = ({ navigation, store_address }) => {
  //debug
  console.log('ONPRESSCOUPON:', navigation);

  return (
    <>
      <View style={styles.addressContainer}>
        <Space height={20} />
        <Text style={styles.titleAddress}>Pickup At Store:</Text>
        <Space height={10} />
        <Text style={styles.descAddress}>
          {`${store_address.street} No ${store_address.number}, ${store_address.city}`}
        </Text>
        <Text style={styles.footAddress}>
          {`${store_address.province} ${store_address.postal_code}`}
        </Text>
        <Space height={20} />
      </View>
      <Border />
      <CardProduct />
      <Border />
      <CardProduct />
      <Border />
      <IconTextNav
        icon="✂️"
        text="Coupon"
        size={14}
        width={10}
        fontFam="CircularStd-Bold"
        onPress={() => navigation.navigate('Coupon')}
      />
      <Border />

      <View style={styles.cartResumeContainer}>
        <Text style={styles.cartResumeText}>Cart Resume</Text>
        <Space height={6} />
        <View style={styles.detailTotalPriceContainer}>
          <Text style={styles.detailTotalPriceText}>Total Price (6 items)</Text>
          <Text style={styles.detailTotalPriceNumber}>Rp 900.000</Text>
        </View>
      </View>

      <Border />
      <TextButtonRow
        borderBottomWidth={0}
        title="Total Billing"
        Subtitle="Rp. 900.000"
        textButton="Select Payment"
        buttonPaddingX={10}
      />
    </>
  );
};

const OrderShipment = ({
  data,
  shipmentToggleModal,
  navigation,
  gojek,
  onPressShipmentChange,
  couponActive = false,
  onPressRemoveCoupon,
}) => {
  console.log('ONPRESSCOUPON:', navigation);
  console.log('ONPRESS_SHIP_CHANGE:', onPressShipmentChange);
  return (
    <>
      <View style={styles.addressContainer}>
        <TextButtonRow
          showSubtitle={false}
          bgButton="transparent"
          buttonTextColor="#1440FF"
          title="Shipment Address"
          titleTextSize={14}
          titleTextFam="CircularStd-Bold"
          buttonPaddingX={0}
          buttonPaddingY={0}
          textButton="Change"
          borderBottomColor={0}
          paddingHorizontal={0}
        />
        <Text style={styles.titleAddress}>{data.name_shipping}</Text>
        <Space height={10} />
        <Text style={styles.descAddress}>
          {`${data.street} No ${data.number}, ${data.city}`}
        </Text>
        <Text style={styles.footAddress}>
          {`${data.province} ${data.postal_code}`}
        </Text>
        <Space height={20} />
      </View>
      <Border />
      <CardProduct />
      <Border />
      <CardProduct />
      <Border />
      {gojek ? (
        <View style={styles.shipmentPlatformChoosenContainer}>
          <TextButtonRow
            showSubtitle={false}
            bgButton="transparent"
            buttonTextColor="#1440FF"
            title="Shipment Platform"
            titleTextSize={14}
            titleTextFam="CircularStd-Bold"
            buttonPaddingX={0}
            buttonPaddingY={0}
            textButton="Change"
            borderBottomColor={0}
            paddingHorizontal={0}
            onPressButton={onPressShipmentChange}
          />
          <IconContainer>
            <LogoGojek />
          </IconContainer>
          <View style={styles.rowModalContainer}>
            <IconText
              showIcon={false}
              text="Same Day"
              width={0}
              textSize={14}
              paddingX={0}
            />
            <Text style={styles.textShipmentPrice}>Rp 30.000</Text>
          </View>
        </View>
      ) : (
        <IconTextNav
          icon="🚛"
          text="Shipment Option"
          size={14}
          width={10}
          fontFam="CircularStd-Bold"
          onPress={shipmentToggleModal}
        />
      )}

      <Border />
      {couponActive ? (
        <IconTextNav
          icon="✂️"
          text="Coupon"
          size={14}
          width={10}
          fontFam="CircularStd-Bold"
          onPress={() => navigation.navigate('Coupon')}
        />
      ) : (
        <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <TextButtonRow
            showSubtitle={false}
            borderBottomWidth={0}
            titleTextFam="CircularStd-Bold"
            titleTextSize={14}
            title="Coupon Applied"
            showIcon={true}
            buttonRadius={0}
            paddingHorizontal={0}
            paddingVertical={0}
            bgButton="transparent"
            onPressButton={onPressRemoveCoupon}>
            <IconTrashGrey />
          </TextButtonRow>
          <Space height={10} />
          <CouponBadge />
          <Space height={10} />
          <View style={styles.rowModalContainer}>
            <IconText
              showIcon={false}
              text="Same Day"
              width={0}
              textSize={14}
              paddingX={0}
              paddingY={0}
            />
            <Text style={styles.textShipmentPrice}>Rp 30.000</Text>
          </View>
        </View>
      )}

      <Border />

      <View style={styles.cartResumeContainer}>
        <Text style={styles.cartResumeText}>Cart Resume</Text>
        <Space height={6} />

        {gojek && !couponActive ? (
          <>
            <View style={styles.detailTotalPriceContainer}>
              <Text style={styles.detailTotalPriceText}>
                Total Price (6 items)
              </Text>
              <Text style={styles.detailTotalPriceNumber}>Rp 900.000</Text>
            </View>
            <View style={styles.detailTotalPriceContainer}>
              <Text style={styles.detailTotalPriceText}>Shipment Charge</Text>
              <Text style={styles.detailTotalPriceNumber}>Rp 30.000</Text>
            </View>
            <View style={styles.detailTotalPriceContainer}>
              <Text style={styles.detailTotalPriceTextCoupon}>Coupon</Text>
              <Text style={styles.detailTotalPriceNumberCoupon}>
                - Rp 30.000
              </Text>
            </View>
          </>
        ) : (
          <View style={styles.detailTotalPriceContainer}>
            <Text style={styles.detailTotalPriceText}>
              Total Price (6 items)
            </Text>
            <Text style={styles.detailTotalPriceNumber}>Rp 900.000</Text>
          </View>
        )}
      </View>

      <Border />
      <TextButtonRow
        borderBottomWidth={0}
        title="Total Billing"
        Subtitle="Rp. 900.000"
        textButton="Select Payment"
        buttonPaddingX={10}
      />
    </>
  );
};

const OrderShipmentOrPickup = ({ navigation, route }) => {
  const [isShipmentModalVisible, setShipmentModalVisible] = useState(false);
  const [couponRemoveModalVisible, setcouponRemoveModalVisible] =
    useState(false);

  const [expandableOption, setexpandableOption] = useState(false);
  const [pickup, setpickup] = useState(false);

  const [gojek, setgojek] = useState(false);

  const expand = () => {
    setexpandableOption(!expandableOption);
  };

  const selectPickup = () => {
    setpickup(!pickup);
  };

  const shipmentToggleModal = () => {
    setShipmentModalVisible(!isShipmentModalVisible);
  };

  const toggleGojek = () => {
    setgojek(!gojek);
    shipmentToggleModal();
  };

  const toggleCouponRemoveModal = () => {
    setcouponRemoveModalVisible(!couponRemoveModalVisible);
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  console.log(expandableOption);
  console.log('PICKUP:', pickup);
  console.log('GOJEK:', gojek);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeaderOrder
        pickup={pickup}
        expandableOption={expandableOption}
        selectPickup={selectPickup}
        pickup={pickup}
        expand={expand}
        navigation={navigation}
      />

      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        {pickup ? (
          <OrderPickup navigation={navigation} store_address={store_address} />
        ) : (
          <OrderShipment
            data={data}
            shipmentToggleModal={shipmentToggleModal}
            navigation={navigation}
            onPressShipmentChange={shipmentToggleModal}
            gojek={gojek}
            onPressRemoveCoupon={toggleCouponRemoveModal}
          />
        )}
      </ScrollView>
      <ModalBottomOrder
        isVisible={isShipmentModalVisible}
        onBackdropPress={shipmentToggleModal}
        onPress={shipmentToggleModal}
        onPressGojek={toggleGojek}
        closeModal={shipmentToggleModal}
      />
      <ModalCenterTwoButton
        isVisible={couponRemoveModalVisible}
        onPressNo={toggleCouponRemoveModal}>
        <Text style={styles.modalTitle}>
          Are you sure for delete this coupon ?
        </Text>
      </ModalCenterTwoButton>
    </SafeAreaView>
  );
};

export default OrderShipmentOrPickup;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navHeaderContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: '#e7e7e7',
    // paddingBottom: 10,
    // paddingTop: 10,
    // paddingHorizontal: 20,
    // backgroundColor: 'aqua',
  },
  iconBackNavContainer: {
    // backgroundColor: 'red',
    left: -10,
  },
  textNavHeader: {
    // fontFamily: 'CircularStd-Bold',
    // fontSize: 18,
    // textTransform: 'capitalize',
    // paddingVertical: 6,
  },
  mainContainer: {
    // backgroundColor: 'red',
  },
  addressContainer: {
    paddingHorizontal: 20,
  },
  titleAddress: {
    fontSize: 14,
    fontFamily: 'CircularStd-Bold',
    textTransform: 'capitalize',
    lineHeight: 20,
  },
  descAddress: {
    fontSize: 14,
    textTransform: 'capitalize',
    fontFamily: 'CircularStd-Book',
    paddingRight: 60,
    lineHeight: 20,
  },
  footAddress: {
    fontSize: 14,
    lineHeight: 20,
    textTransform: 'capitalize',
    fontFamily: 'CircularStd-Book',
    paddingRight: 60,
  },
  cardOrderItemContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  firstRowCardOrderItem: {
    flexDirection: 'row',
  },
  titleDescProduct: {
    paddingHorizontal: 20,
    marginRight: Dimensions.get('window').width / 2.5,
  },
  titleProduct: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 14,
    lineHeight: 20,
    paddingBottom: 10,
  },
  descProduct: {
    fontFamily: 'CircularStd-Book',
    fontSize: 12,
    lineHeight: 20,
  },
  secondRowCardOrderItem: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  thirdRowCardOrderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtotalTitle: {
    fontSize: 14,
    fontFamily: 'CircularStd-Bold',
  },
  subtotalPriceDropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtotalPrice: {
    fontSize: 14,
    fontFamily: 'CircularStd-Bold',
  },

  cartResumeContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'column',
  },
  detailTotalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartResumeText: {
    fontFamily: 'CircularStd-Bold',
    lineHeight: 20,
  },
  detailTotalPriceText: {
    fontFamily: 'CircularStd-Book',
    lineHeight: 20,
    fontSize: 12,
  },
  detailTotalPriceNumber: {
    fontSize: 12,
    fontFamily: 'CircularStd-Bold',
    lineHeight: 20,
  },
  detailTotalPriceTextCoupon: {
    fontFamily: 'CircularStd-Book',
    lineHeight: 20,
    fontSize: 12,
    color: 'red',
  },
  detailTotalPriceNumberCoupon: {
    fontSize: 12,
    fontFamily: 'CircularStd-Bold',
    lineHeight: 20,
    color: 'red',
  },
  touchModalShipment: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'column',
  },
  rowModalContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textShipmentPrice: {
    fontSize: 16,
    fontFamily: 'CircularStd-Bold',
  },
  shipmentPlatformChoosenContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  couponBadgeContainer: {
    // paddingHorizontal: 8,
    paddingVertical: 10,
    borderColor: '#1440FF',
    borderWidth: 1.5,
    width: 145,
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 18,
    textAlign: 'center',
  },
});
