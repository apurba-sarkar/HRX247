import { StyleSheet, Button, Text, View, ScrollView } from "react-native";
import React from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { getHospitalData } from "../Services/api";
import { useQuery } from "@tanstack/react-query";
const Main = () => {
  //   const QueryClient = useQueryClient();
  const {
    isLoading,
    data: list,
    error,
  } = useQuery({
    queryKey: ["hospitalData"],
    queryFn: getHospitalData,
  });

  return (
    <View>
      <Text>Main</Text>
      <Button title="get"></Button>
      <ScrollView>
        {list &&
          list.map((e) => {
            return <Text key={e.hospital_id}> {e.name}</Text>;
          })}
      </ScrollView>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
