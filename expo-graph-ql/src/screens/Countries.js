import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";
import { CONTINENT_QUERY } from "../api/query";

export default function Countries() {
  console.log("countries", CONTINENT_QUERY);
  const { data, loading } = useQuery(CONTINENT_QUERY);
  return (
    <View>
      {loading ? (
        <ActivityIndicator size={"large"} color={"red"} />
      ) : (
        data.continents.map((continent) => (
          <Text key={continent.code}>{continent.name}</Text>
        ))
      )}
    </View>
  );
}
