import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { withAppStore } from "src/redux/AppStore";
import AppNavigation from "src/navigation";
import Bootstrap from "src/bootstrap";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FlashMessage from "react-native-flash-message";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Bootstrap>
          <StatusBar
            animated={true}
            backgroundColor="white"
            barStyle={"light-content"}
          />
          <AppNavigation />
          <FlashMessage duration={4000} position={"top"} />
        </Bootstrap>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default withAppStore<typeof App>(App);
