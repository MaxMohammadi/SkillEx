import React from "react";
import { Container } from "theme-ui";
import { Header } from "src/components/Header";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  React.useEffect(() => {
    Modal.setAppElement("body");
  });

  return (
    <Container sx={{ maxWidth: "100%", width: "auto" }}>
      <Container sx={{ py: 6, px: [4, "15%"] }}>
        <Header />
      </Container>
      <ToastContainer
        style={{ background: "var(--theme-ui-colors-background)" }}
        toastClassName="toast-body"
        bodyClassName="toast-body"
      />
    </Container>
  );
};

export default App;
