import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import { ProfileProvider } from "./context/ProfileContext";
function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ProfileProvider>
  );
}

export default App;
