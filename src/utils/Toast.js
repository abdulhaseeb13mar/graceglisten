import Toast from 'react-native-root-toast';
import {colors, fonts} from './Theme';

export default (msg) => {
  Toast.show(msg, {
    backgroundColor: colors.lightBackground,
    textColor: colors.primary,
    opacity: 0.96,
    position: -100,
    shadowColor: colors.secondary,
    fontFamily:fonts.secondary
  });
};
