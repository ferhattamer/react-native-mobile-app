import { TextInput } from "react-native";
import styled from "styled-components";
import {
  compose,
  color,
  size,
  typography,
  space,
  borderRadius,
  shadow,
} from "styled-system";
import theme from "../Ekranlar/tema";

const Input = styled(TextInput).attrs((props) => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor] || "#999",
}))(compose(typography, space, color, size, borderRadius, shadow));

export default Input;
