import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { compose, color, size, space, flexbox, position } from "styled-system";

const Button = styled(TouchableOpacity)(
  compose(flexbox, space, color, size, position)
);

Button.defaultProps = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};

export default Button;
