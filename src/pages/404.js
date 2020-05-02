import React from "react";
import { Link } from "../components/Link";
import { Flex, Heading } from "@chakra-ui/core";
import { Text } from "../components/Text";
import Layout from "../components/Layout";
import { Button } from "../components/Button";

const NotFoundPage = () => (
  <Layout>
    <Flex
      minHeight="70vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        fontSize={["4xl", "4xl", "5xl", "6xl"]}
        fontWeight="light"
        color="brand.gray"
        textAlign={["center", "center", "center", "left"]}
        as="h1"
        marginBottom="6"
      >
        404 - Jotain meni pieleen
      </Heading>
      <Text
        fontSize="2xl"
        fontWeight="light"
        textAlign={["center", "center", "center", "left"]}
        as="h2"
        marginBottom="6"
      >
        Valitettavasti etsimääsi sivua ei löytynyt. Koita löytyykö haluamasi
        sivu arkistosta!
      </Text>
      <Link to="/">
        <Button variant="dark">Etusivulle</Button>
      </Link>
    </Flex>
  </Layout>
);

export default NotFoundPage;
