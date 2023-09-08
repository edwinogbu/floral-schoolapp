import { Dimensions } from 'react-native';

const kPrimaryColor = '#345FB4';
const kSecondaryColor = '#6789CA';
const kTextBlackColor = '#313131';
const kTextWhiteColor = '#FFFFFF';
const kContainerColor = '#777777';
const kOtherColor = '#F4F6F7';
const kTextLightColor = '#A5A5A5';
const kErrorBorderColor = '#E74C3C';

const kDefaultPadding = 20;

const sizedBox = {
  height: kDefaultPadding,
};

const kWidthSizedBox = {
  width: kDefaultPadding,
};

const kHalfSizedBox = {
  height: kDefaultPadding / 2,
};

const kHalfWidthSizedBox = {
  width: kDefaultPadding / 2,
};

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

const kTopBorderRadius = {
  borderTopLeftRadius: isTablet ? 40 : 20,
  borderTopRightRadius: isTablet ? 40 : 20,
};

const kBottomBorderRadius = {
  borderBottomRightRadius: isTablet ? 40 : 20,
  borderBottomLeftRadius: isTablet ? 40 : 20,
};

const kInputTextStyle = {
  color: kTextBlackColor,
  fontSize: 11,
  fontWeight: '500',
};

const mobilePattern = /^(?:[+0]9)?[0-9]{10,12}$/;
const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const constant = {
  kPrimaryColor,
  kSecondaryColor,
  kTextBlackColor,
  kTextWhiteColor,
  kContainerColor,
  kOtherColor,
  kTextLightColor,
  kErrorBorderColor,
  kDefaultPadding,
  sizedBox,
  kWidthSizedBox,
  kHalfSizedBox,
  kHalfWidthSizedBox,
  kTopBorderRadius,
  kBottomBorderRadius,
  kInputTextStyle,
  mobilePattern,
  emailPattern,
};

export default constant;
