import Box from "@src/components/Box";
import theme from "@src/theme/theme";
import styled from "styled-components";

const MyComponent = styled.div`
  color: purple;
`;

export default function Home() {
  return (
    <Box
      tag="main"
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        backgroundColor: {
          xs: "red",
          sm: "yellow",
          md: "blue",
        },
      }}
    >
      <MyComponent>OI</MyComponent>
    </Box>
  );
}
