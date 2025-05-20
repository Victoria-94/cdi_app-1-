import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  AppstoreOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import NivelesPage from "./pages/NivelesPage";
import NinosPage from "./pages/NinosPage";
import TutoresPage from "./pages/TutoresPage";
import EvaluacionPage from "./pages/EvaluacionPage";
import RenderPerfilTutor from "./pages/RenderPerfilTutor"; 



const { Header, Content, Sider } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider theme="light" style={{ background: "#fadb14" }}>
          <div style={{ padding: 24, textAlign: "center" }}>
            <UserOutlined style={{ fontSize: 48 }} />
          </div>
          <Menu mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<AppstoreOutlined />}><Link to="/niveles">Nivel</Link></Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}><Link to="/ninos">Niños</Link></Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}><Link to="/tutores">Tutores</Link></Menu.Item>
            <Menu.Item key="4" icon={<SettingOutlined />}>Configuraciones</Menu.Item>
            <Menu.Item key="5" icon={<QuestionCircleOutlined />}>Ayuda</Menu.Item>
            <Menu.Item key="6" icon={<LogoutOutlined />}>Salir</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "16px" }}>
            <Routes>
              <Route path="/niveles" element={<NivelesPage />} />
              <Route path="/ninos" element={<NinosPage />} />
              <Route path="/tutores" element={<TutoresPage />} />
              <Route path="/evaluacion" element={<EvaluacionPage />} />
              <Route path="/PerfilTutor" element= {RenderPerfilTutor}/>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;