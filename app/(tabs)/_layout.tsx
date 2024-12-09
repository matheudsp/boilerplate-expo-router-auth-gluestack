
import { Tabs } from 'expo-router';
import React from 'react';
import { FileText, Home } from 'lucide-react-native'


export default function TabLayout() {


  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="tabOne/index"
        options={{
          title: "tabOne",
          tabBarIcon: () => <Home size={24} />,
        }}
      />
      <Tabs.Screen
        name="tabTwo/index"
        options={{
          title: "tabTwo",
          tabBarIcon: () => <FileText size={24} />,
        }}
      />
    </Tabs>
  );
}