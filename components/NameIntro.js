import React from 'react';
import { Box } from "@chakra-ui/react";
import { ReactTyped } from "react-typed";

const NameIntro = () => {
  return (
    <Box
      sx={{
        '.highlight-word-banner': {
          backgroundColor: 'transparent',
          color: 'yellow.400',
          fontWeight: 'bold',
          textDecoration: 'underline',
        }
      }}
    >
      <ReactTyped
        strings={[
          "Hello there! <mark class='highlight-word-banner'>Eduardo Fabricio</mark> here.",
        ]}
        startDelay={1500}
        typeSpeed={45}
      />
    </Box>
  );
};

export default NameIntro;