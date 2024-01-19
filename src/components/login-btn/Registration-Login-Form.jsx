import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function RegistrationLoginForm() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
    </Tabs>
  );
}

export default RegistrationLoginForm;
