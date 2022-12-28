import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { LandingPage } from "./pages/LandingPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LandingPage />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
