import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Countries from "./src/screens/Countries";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
        <Countries />
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({});
